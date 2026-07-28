# Happy Learning

Learn Russian & Portuguese through flashcards with pronunciation scoring, or quick multiple-choice quizzes — covering single words, verb conjugation tables, everyday survival phrases, and full example dialogues, with a leaderboard shared across devices.

## How it works

1. Enter your name.
2. Pick a mode: **Learn** (flashcards/dialogues) or **Quiz**.
3. Pick a content type: **Words** (~1000 vocabulary words across 16 categories and 4 difficulty levels), **Phrases** (8 everyday situations — doctor, store, government office, restaurant, airport, hotel, bank, pharmacy — 30+ phrases each), or **Dialogues** (Learn mode only — 3 example conversations per situation, played back line by line).
4. Pick a language: Russian or Portuguese.
5. For Words, pick a difficulty: Easy, Medium, Hard, or Insane.
6. Pick a category (or situation, for Phrases/Dialogues).

**Learn mode**: flip through flashcards — each shows a picture, the English text, the translation, and a pronunciation guide. Tap the card to hear it spoken aloud, or tap the microphone button to say it yourself; the app listens (via the browser's speech recognition) and tells you whether you got it right, replaying the correct pronunciation if not. For the **Verbs** category specifically, each card also shows a present-tense conjugation table (я/ты/он.../eu/tu/ele...) with the changing personal ending highlighted in a different color, plus a grammar note (aspect for Russian, regular -ar/-er/-ir class or "Irregular" for Portuguese).

**Quiz mode**: answer 10 multiple-choice questions (Words or Phrases) — each answer reveals its picture and pronunciation guide once you've picked one, and is spoken aloud when clicked (click again to hear it repeated). Score 7+ triggers a confetti celebration. Every attempt is logged to a leaderboard shared across every device and session, which shows the best score per player, deduplicated.

## Running it

No build step or server required — just open `index.html` in a browser. Speech recognition (Learn mode's microphone feature) needs a Chromium-based browser (Chrome/Edge) and microphone permission; it degrades gracefully to playback-only elsewhere.

## Tech

Plain HTML/CSS/JavaScript. Pronunciation playback and recognition use the browser's built-in Web Speech API (`SpeechSynthesis` / `SpeechRecognition`). Verb conjugations (`conjugations.js`) are hand-authored, not rule-generated, since both languages have enough irregular verbs that a generic conjugator would produce wrong forms. The leaderboard is stored in Firebase Firestore (config in `firebase-config.js` — the API key there is safe to expose; access is governed by Firestore security rules, not by secrecy).
