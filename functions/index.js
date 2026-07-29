const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const Anthropic = require("@anthropic-ai/sdk").default;
const { zodOutputFormat } = require("@anthropic-ai/sdk/helpers/zod");
const { z } = require("zod/v4");

const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

const LANGUAGE_NAMES = { ru: "Russian", pt: "Portuguese" };

const ConversationResponseSchema = z.object({
  reply: z
    .string()
    .describe("Your next message in the target language, continuing the conversation naturally with a question or comment."),
  reply_translation: z.string().describe("English translation of `reply`."),
  corrections: z
    .array(
      z.object({
        original: z.string().describe("Exact phrase the learner said that had an error."),
        corrected: z.string().describe("The corrected version."),
        explanation: z.string().describe("Brief, friendly English explanation of the grammar or word-choice mistake."),
      }),
    )
    .describe("Grammar or word-choice corrections for the learner's last message. Empty array if there were no errors."),
  encouragement: z
    .string()
    .describe("A short, warm one-sentence note in English -- praise if there were no errors, or gentle encouragement if there were."),
});

exports.practiceConversation = onCall(
  { secrets: [anthropicApiKey], cors: true },
  async (request) => {
    const { lang, history, userUtterance } = request.data || {};

    if (lang !== "ru" && lang !== "pt") {
      throw new HttpsError("invalid-argument", "lang must be 'ru' or 'pt'");
    }
    if (history !== undefined && !Array.isArray(history)) {
      throw new HttpsError("invalid-argument", "history must be an array");
    }

    const languageName = LANGUAGE_NAMES[lang];

    const systemPrompt = `You are a warm, patient ${languageName} conversation partner helping a learner practice speaking ${languageName} out loud.

Always write your "reply" ONLY in ${languageName}, and always give its English translation in "reply_translation". Keep "reply" short (1-2 sentences) and end with a question or prompt so the conversation keeps flowing naturally -- friendly everyday topics like introductions, daily routine, hobbies, food, travel, family, work. Keep vocabulary and grammar appropriate for a learner, not native-speaker edge cases.

The learner's messages arrive as text transcribed from speech, so ignore missing punctuation, capitalization, or obvious speech-recognition typos -- only flag genuine grammar or word-choice mistakes a ${languageName} teacher would actually correct. For each real mistake in the learner's last message, add an entry to "corrections" with the exact original phrase, the corrected version, and a short friendly English explanation. If there were no mistakes, return an empty "corrections" array.

If the learner's message is a bracketed system note in English (like "(start the conversation)") rather than an actual practice utterance, do not treat it as something to correct -- just follow its instruction, greet them warmly, and return an empty "corrections" array.

Always fill "encouragement" with one short warm English sentence -- praise when there were no errors, gentle encouragement when there were.`;

    const messages = [];
    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn && (turn.role === "user" || turn.role === "assistant") && typeof turn.text === "string") {
          messages.push({ role: turn.role, content: turn.text });
        }
      }
    }

    if (userUtterance) {
      messages.push({ role: "user", content: userUtterance });
    } else if (messages.length === 0) {
      messages.push({ role: "user", content: "(start the conversation)" });
    }

    const client = new Anthropic();

    let response;
    try {
      response = await client.messages.parse({
        model: "claude-sonnet-5",
        max_tokens: 1024,
        system: systemPrompt,
        messages,
        output_config: { format: zodOutputFormat(ConversationResponseSchema) },
      });
    } catch (err) {
      console.error("Claude API error", err);
      throw new HttpsError("internal", "Failed to reach the conversation partner. Please try again.");
    }

    if (!response.parsed_output) {
      throw new HttpsError("internal", "The conversation partner's response could not be parsed.");
    }

    return response.parsed_output;
  },
);
