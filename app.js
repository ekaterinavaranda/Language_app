(() => {
  "use strict";

  const QUESTIONS_PER_QUIZ = 10;
  const CHOICES_PER_QUESTION = 4;
  const CELEBRATION_THRESHOLD = 7;
  const LAST_NAME_KEY = "happyLearningLastName";
  const RECENT_WORDS_KEY = "happyLearningRecentWords";
  const PRACTICE_FUNCTION_URL = "https://us-central1-happy-learning-92242.cloudfunctions.net/practiceConversation";

  const state = {
    playerName: "",
    mode: null,       // 'learning' | 'quiz' | 'practice'
    topicType: null,  // 'words' | 'phrases' | 'dialogues' | 'grammar'
    lang: null,       // 'ru' | 'pt'
    level: null,      // 'easy' | 'medium' | 'hard' | 'insane' (Words only)
    category: null,   // key in WORDS, or a situational category key for Phrases/Dialogues
    questions: [],     // [{ word, choices: [{text, isCorrect}] }]
    currentIndex: 0,
    score: 0,
    answered: false,
    deck: [],          // flashcard deck (learning mode)
    deckIndex: 0,
    dialogueList: [],  // the selected category's dialogues
    dialogueIndex: 0,
    dialogueLineIndex: 0,
    tense: "present",  // 'present' | 'past' | 'future' (Verbs conjugation table)
    practiceHistory: [], // [{ role: 'user'|'assistant', text }] sent to/from the Practice Conversation Cloud Function
  };

  // ---------- Screen navigation ----------
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  // ---------- Utilities ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr, n, exclude = []) {
    const pool = arr.filter((x) => !exclude.includes(x));
    return shuffle(pool).slice(0, n);
  }

  function speak(text, lang) {
    if (!("speechSynthesis" in window)) return;
    // Chrome can silently drop an utterance if speak() is called in the same
    // tick as cancel(), and can also need a resume() after being idle — both
    // are worked around here so repeat clicks reliably replay the audio.
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = SPEECH_LANG[lang];
      utter.rate = 0.9;
      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utter);
    }, 50);
  }

  function capitalize(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // ---------- Build category picker ----------
  function renderCategoryGrid() {
    const isWords = state.topicType === "words";
    const labels = isWords ? CATEGORY_LABELS : PHRASE_CATEGORY_LABELS;
    const icons = isWords ? CATEGORY_ICONS : PHRASE_CATEGORY_ICONS;

    const grid = document.getElementById("category-grid");
    grid.innerHTML = "";
    Object.keys(labels).forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "choice-card";
      btn.dataset.category = key;
      const icon = icons[key] || "🔤";
      btn.innerHTML = `<span class="card-icon">${icon}</span><span>${labels[key]}</span>`;
      grid.appendChild(btn);
    });

    document.getElementById("category-title").textContent = isWords ? "Choose a category" : "Choose a situation";
  }

  // ---------- Quiz generation ----------
  function getAllCategoryWords(category) {
    const levels = WORDS[category];
    const all = [];
    Object.keys(levels).forEach((lvl) => all.push(...levels[lvl]));
    const seen = new Set();
    return all.filter((w) => {
      if (seen.has(w.en)) return false;
      seen.add(w.en);
      return true;
    });
  }

  // The word/phrase pool for the current selection. Phrases have no level
  // (one flat list per situational category); Words are scoped to the
  // chosen level, with the rest of the category available as a fallback.
  function getLevelPool() {
    return state.topicType === "phrases" ? PHRASES[state.category] : WORDS[state.category][state.level];
  }

  function getFullPool() {
    return state.topicType === "phrases" ? PHRASES[state.category] : getAllCategoryWords(state.category);
  }

  function getRecentWordsKey() {
    return state.topicType === "phrases" ? `phrases:${state.category}` : `${state.category}:${state.level}`;
  }

  function getRecentWords(key) {
    try {
      const all = JSON.parse(localStorage.getItem(RECENT_WORDS_KEY) || "{}");
      return new Set(all[key] || []);
    } catch (e) {
      return new Set();
    }
  }

  function saveRecentWords(key, words) {
    try {
      const all = JSON.parse(localStorage.getItem(RECENT_WORDS_KEY) || "{}");
      all[key] = words;
      localStorage.setItem(RECENT_WORDS_KEY, JSON.stringify(all));
    } catch (e) {
      // localStorage unavailable — fresh-word tracking isn't essential, skip silently
    }
  }

  // Builds N unique correct words/phrases, preferring ones NOT shown in this
  // player's immediately previous quiz for the same category+level (so
  // back-to-back replays don't just repeat the same words). Falls back to
  // reusing recent words only when the pool is too small to avoid them.
  function buildUniqueWordList(count) {
    const key = getRecentWordsKey();
    const recent = getRecentWords(key);
    const primaryPool = getLevelPool();
    const fullPool = getFullPool();

    const rank = (w) => (recent.has(w.en) ? 1 : 0); // fresh words first
    const orderedPrimary = shuffle(primaryPool).sort((a, b) => rank(a) - rank(b));

    const used = new Set();
    const result = [];
    for (const w of orderedPrimary) {
      if (result.length >= count) break;
      if (!used.has(w.en)) {
        used.add(w.en);
        result.push(w);
      }
    }
    if (result.length < count) {
      const rest = shuffle(fullPool.filter((w) => !used.has(w.en))).sort((a, b) => rank(a) - rank(b));
      for (const w of rest) {
        if (result.length >= count) break;
        used.add(w.en);
        result.push(w);
      }
    }

    saveRecentWords(key, result.map((w) => w.en));
    return result;
  }

  function buildQuiz(lang) {
    const fullPool = getFullPool();
    const correctWords = buildUniqueWordList(Math.min(QUESTIONS_PER_QUIZ, fullPool.length));

    return correctWords.map((word) => {
      const distractorCandidates = fullPool.filter((w) => w[lang] !== word[lang]);
      const distractors = pickRandom(distractorCandidates, CHOICES_PER_QUESTION - 1);
      const choices = shuffle([
        { word, isCorrect: true },
        ...distractors.map((d) => ({ word: d, isCorrect: false })),
      ]);
      return { word, choices };
    });
  }

  // ---------- Quiz rendering ----------
  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    state.answered = false;

    document.getElementById("quiz-progress-text").textContent =
      `Question ${state.currentIndex + 1} / ${state.questions.length}`;
    document.getElementById("progress-bar-fill").style.width =
      `${(state.currentIndex / state.questions.length) * 100}%`;
    document.getElementById("quiz-score").textContent = state.score;
    document.getElementById("quiz-word").textContent = q.word.en;
    document.getElementById("quiz-word-emoji").textContent = q.word.emoji || "🔤";

    const grid = document.getElementById("answers-grid");
    grid.innerHTML = "";
    q.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";

      const pronField = state.lang === "ru" ? "ruPron" : "ptPron";
      const text = capitalize(choice.word[state.lang]);
      const pron = choice.word[pronField];

      const pictureHtml = choice.word.swatch
        ? `<span class="answer-swatch" style="background:${choice.word.swatch}"></span>`
        : `<span class="answer-emoji">${choice.word.emoji || "🔤"}</span>`;

      btn.innerHTML = `
        <span class="answer-picture">${pictureHtml}</span>
        <span class="answer-lines">
          <span class="answer-text">${text}</span>
          <span class="answer-pron">[${pron}]</span>
        </span>
      `;
      btn.addEventListener("click", () => handleAnswer(btn, choice));
      grid.appendChild(btn);
    });

    document.getElementById("next-btn").disabled = true;
  }

  function handleAnswer(button, choice) {
    if (state.answered) {
      // Already answered this question: clicking any option just repeats
      // its pronunciation, without re-scoring or changing the reveal state.
      speak(choice.word[state.lang], state.lang);
      return;
    }
    state.answered = true;

    speak(choice.word[state.lang], state.lang);

    const allButtons = document.querySelectorAll(".answer-btn");
    allButtons.forEach((b) => {
      b.classList.add("revealed");
    });

    const correctChoice = state.questions[state.currentIndex].choices.find((c) => c.isCorrect);

    if (choice.isCorrect) {
      button.classList.add("correct");
      state.score++;
    } else {
      button.classList.add("wrong");
      allButtons.forEach((b) => {
        const label = b.querySelector(".answer-text");
        if (label && label.textContent === capitalize(correctChoice.word[state.lang])) {
          b.classList.add("correct");
        }
      });
    }

    document.getElementById("quiz-score").textContent = state.score;
    document.getElementById("next-btn").disabled = false;
  }

  function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    document.getElementById("progress-bar-fill").style.width = "100%";
    document.getElementById("result-score").textContent = state.score;
    document.querySelector("#screen-results .result-total").textContent = `/${state.questions.length}`;
    const pct = state.score / state.questions.length;
    let message;
    if (pct === 1) message = "Perfect score! Outstanding work.";
    else if (pct >= 0.8) message = "Excellent! You really know this.";
    else if (pct >= 0.5) message = "Good job! Keep practicing.";
    else message = "Keep going — practice makes perfect.";
    document.getElementById("result-message").textContent = message;
    showScreen("screen-results");

    saveResult(state.playerName, state.score);

    if (state.score >= CELEBRATION_THRESHOLD) {
      celebrate();
    }
  }

  function startQuiz() {
    state.questions = buildQuiz(state.lang);
    state.currentIndex = 0;
    state.score = 0;
    showScreen("screen-quiz");
    renderQuestion();
  }

  // ---------- Learning mode: flashcards ----------
  function startFlashcards() {
    state.deck = shuffle(getLevelPool());
    state.deckIndex = 0;
    state.tense = "present";
    showScreen("screen-flashcard");
    renderFlashcard();
  }

  // Classifies a verb into the regular -ar/-er/-ir pattern PLE courses
  // organize verb teaching around, or "Irregular" otherwise. Requires an
  // unchanging stem AND the exact regular ending set — matching only the
  // nós ending would wrongly call irregular verbs like "ir" regular
  // (vamos looks like a regular -ar ending in isolation).
  const PT_REGULAR_ENDINGS = {
    "-ar": ["o", "as", "a", "amos", "ais", "am"],
    "-er": ["o", "es", "e", "emos", "eis", "em"],
    "-ir": ["o", "es", "e", "imos", "is", "em"],
  };

  function ptConjugationClass(conj) {
    const endings = conj.forms.map((f) => f.ending);
    const sameStem = conj.forms.every((f) => f.stem === conj.forms[0].stem);
    if (!sameStem) return "Irregular";
    for (const [label, pattern] of Object.entries(PT_REGULAR_ENDINGS)) {
      if (pattern.every((e, i) => e === endings[i])) return label;
    }
    return "Irregular";
  }

  const TENSE_LABELS = { present: "Present", past: "Past", future: "Future" };

  function renderFlashcard() {
    const word = state.deck[state.deckIndex];
    const pronField = state.lang === "ru" ? "ruPron" : "ptPron";

    document.getElementById("flashcard-progress-text").textContent =
      `Card ${state.deckIndex + 1} / ${state.deck.length}`;
    document.getElementById("flashcard-progress-fill").style.width =
      `${(state.deckIndex / state.deck.length) * 100}%`;

    document.getElementById("flashcard-picture").innerHTML = word.swatch
      ? `<span class="answer-swatch" style="background:${word.swatch}"></span>`
      : (word.emoji || "🔤");
    document.getElementById("flashcard-en").textContent = word.en;
    document.getElementById("flashcard-target").textContent = capitalize(word[state.lang]);
    document.getElementById("flashcard-pron").textContent = `[${word[pronField]}]`;

    const isVerb = state.category === "verbs" && !!VERB_CONJUGATIONS[word.en];
    document.getElementById("tense-tabs").classList.toggle("visible", isVerb);
    document.querySelectorAll(".tense-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tense === state.tense);
    });
    renderConjugationTable(word);

    const feedback = document.getElementById("mic-feedback");
    feedback.textContent = "";
    feedback.className = "mic-feedback";

    document.getElementById("flashcard-prev-btn").disabled = state.deckIndex === 0;
    document.getElementById("flashcard-next-btn").textContent =
      state.deckIndex === state.deck.length - 1 ? "Finish" : "Next →";
  }

  function ptGrammarNote(tenseData, tense) {
    if (tense === "future") return "Regular future (formed from the infinitive)";
    if (tense === "past") return tenseData.irregular ? "⚠️ Irregular verb — doesn't follow the regular pattern" : "Regular preterite";
    return `${ptConjugationClass(tenseData)} verb`;
  }

  function ruGrammarNote(tense) {
    if (tense === "past") return "Imperfective aspect — agrees by gender & number, not by person";
    if (tense === "future") return "Imperfective aspect — compound future (буду + infinitive)";
    return "Imperfective aspect — an ongoing/repeated action (as opposed to a single completed one)";
  }

  function renderConjugationTable(word) {
    const container = document.getElementById("conjugation-table");
    const allTenses = state.category === "verbs" ? VERB_CONJUGATIONS[word.en] : null;
    const tenseData = allTenses ? allTenses[state.lang][state.tense] : null;

    if (!tenseData) {
      container.className = "conjugation-table";
      container.innerHTML = "";
      return;
    }

    const pronouns = state.lang === "ru"
      ? (state.tense === "past" ? RU_PAST_LABELS : RU_PRONOUNS)
      : PT_PRONOUNS;
    const tail = tenseData.tail || "";

    const rows = tenseData.forms
      .map(
        (form, i) => `
      <div class="conj-row">
        <span class="conj-pronoun">${pronouns[i]}</span>
        <span class="conj-lines">
          <span class="conj-form"><span class="conj-stem">${capitalize(form.stem)}</span><span class="conj-ending">${form.ending}</span>${tail}</span>
          <span class="conj-pron">[${form.pron}]</span>
        </span>
        <button class="conj-play" data-index="${i}" title="Listen">🔊</button>
      </div>`
      )
      .join("");

    const grammarNote = state.lang === "ru" ? ruGrammarNote(state.tense) : ptGrammarNote(tenseData, state.tense);

    container.innerHTML = `<p class="conjugation-table-title">${TENSE_LABELS[state.tense]} tense · ${grammarNote}</p>${rows}`;
    container.className = "conjugation-table visible";

    container.querySelectorAll(".conj-play").forEach((btn) => {
      btn.addEventListener("click", () => {
        const form = tenseData.forms[Number(btn.dataset.index)];
        speak(form.stem + form.ending + tail, state.lang);
      });
    });
  }

  function playCurrentCard() {
    const word = state.deck[state.deckIndex];
    speak(word[state.lang], state.lang);
  }

  function nextCard() {
    if (state.deckIndex >= state.deck.length - 1) {
      showScreen("screen-category");
      return;
    }
    state.deckIndex++;
    renderFlashcard();
  }

  function prevCard() {
    if (state.deckIndex === 0) return;
    state.deckIndex--;
    renderFlashcard();
  }

  // ---------- Learning mode: dialogues ----------
  function startDialogueList() {
    state.dialogueList = DIALOGUES[state.category] || [];

    document.getElementById("dialogue-list-title").textContent =
      `${PHRASE_CATEGORY_LABELS[state.category] || ""} — Dialogues`;

    const grid = document.getElementById("dialogue-list-grid");
    grid.innerHTML = "";
    state.dialogueList.forEach((dlg, i) => {
      const btn = document.createElement("button");
      btn.className = "choice-card";
      btn.dataset.dialogueIndex = i;
      btn.innerHTML = `<span class="card-icon">💬</span><span>${dlg.title}</span>`;
      grid.appendChild(btn);
    });

    showScreen("screen-dialogue-list");
  }

  function startDialogue(index) {
    state.dialogueIndex = index;
    state.dialogueLineIndex = 0;
    showScreen("screen-dialogue");
    renderDialogueLine();
  }

  function renderDialogueLine() {
    const dlg = state.dialogueList[state.dialogueIndex];
    const line = dlg.lines[state.dialogueLineIndex];
    const pronField = state.lang === "ru" ? "ruPron" : "ptPron";

    document.getElementById("dialogue-title-active").textContent = dlg.title;
    document.getElementById("dialogue-progress-text").textContent =
      `Line ${state.dialogueLineIndex + 1} / ${dlg.lines.length}`;
    document.getElementById("dialogue-progress-fill").style.width =
      `${(state.dialogueLineIndex / dlg.lines.length) * 100}%`;

    document.getElementById("dialogue-speaker").textContent = line.speaker;
    document.getElementById("dialogue-en").textContent = line.en;
    document.getElementById("dialogue-target").textContent = capitalize(line[state.lang]);
    document.getElementById("dialogue-pron").textContent = `[${line[pronField]}]`;

    document.getElementById("dialogue-prev-btn").disabled = state.dialogueLineIndex === 0;
    document.getElementById("dialogue-next-btn").textContent =
      state.dialogueLineIndex === dlg.lines.length - 1 ? "Finish" : "Next →";
  }

  function playDialogueLine() {
    const dlg = state.dialogueList[state.dialogueIndex];
    const line = dlg.lines[state.dialogueLineIndex];
    speak(line[state.lang], state.lang);
  }

  function nextDialogueLine() {
    const dlg = state.dialogueList[state.dialogueIndex];
    if (state.dialogueLineIndex >= dlg.lines.length - 1) {
      showScreen("screen-dialogue-list");
      return;
    }
    state.dialogueLineIndex++;
    renderDialogueLine();
  }

  function prevDialogueLine() {
    if (state.dialogueLineIndex === 0) return;
    state.dialogueLineIndex--;
    renderDialogueLine();
  }

  // ---------- Learning mode: grammar reference ----------
  function renderGrammarList() {
    const grid = document.getElementById("grammar-list-grid");
    grid.innerHTML = "";
    GRAMMAR_TOPICS[state.lang].forEach((topic, i) => {
      const btn = document.createElement("button");
      btn.className = "choice-card";
      btn.dataset.grammarIndex = i;
      btn.innerHTML = `<span class="card-icon">📐</span><span>${topic.title}</span>`;
      grid.appendChild(btn);
    });
  }

  function openGrammarLesson(index) {
    const topic = GRAMMAR_TOPICS[state.lang][index];

    document.getElementById("grammar-lesson-title").textContent = topic.title;
    document.getElementById("grammar-lesson-paragraphs").innerHTML = topic.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");

    const examplesEl = document.getElementById("grammar-lesson-examples");
    examplesEl.innerHTML = topic.examples
      .map(
        (ex, i) => `
      <div class="grammar-example">
        <span class="grammar-example-main">
          <span class="grammar-example-native">${capitalize(ex.native)}</span>
          <span class="grammar-example-pron">[${ex.pron}]</span>
          <span class="grammar-example-en">${ex.en}</span>
          <span class="grammar-example-note">${ex.note}</span>
        </span>
        <button class="grammar-example-play" data-index="${i}" title="Listen">🔊</button>
      </div>`
      )
      .join("");

    examplesEl.querySelectorAll(".grammar-example-play").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ex = topic.examples[Number(btn.dataset.index)];
        speak(ex.native, state.lang);
      });
    });

    showScreen("screen-grammar-lesson");
  }

  // ---------- Pronunciation scoring via the Web Speech API ----------
  function getSpeechRecognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function normalizeForCompare(s) {
    return s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();
  }

  function levenshtein(a, b) {
    const dp = [];
    for (let i = 0; i <= a.length; i++) dp.push([i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
    return dp[a.length][b.length];
  }

  function isCloseMatch(said, target) {
    const a = normalizeForCompare(said);
    const b = normalizeForCompare(target);
    if (!a || !b) return false;
    if (a === b) return true;
    const maxLen = Math.max(a.length, b.length);
    return levenshtein(a, b) <= Math.max(1, Math.floor(maxLen * 0.3));
  }

  function handleMicClick() {
    const feedback = document.getElementById("mic-feedback");
    const micBtn = document.getElementById("mic-btn");
    const SR = getSpeechRecognitionCtor();

    if (!SR) {
      feedback.textContent = "Speech recognition isn't supported in this browser. Try Chrome or Edge.";
      feedback.className = "mic-feedback wrong";
      return;
    }

    if (micBtn.classList.contains("listening")) return;

    const word = state.deck[state.deckIndex];
    const target = word[state.lang];
    const pronField = state.lang === "ru" ? "ruPron" : "ptPron";

    const recognizer = new SR();
    recognizer.lang = SPEECH_LANG[state.lang];
    recognizer.maxAlternatives = 5;
    recognizer.interimResults = false;

    micBtn.classList.add("listening");
    feedback.textContent = "Listening…";
    feedback.className = "mic-feedback";

    // Safety net: if the browser/speech service never fires a result, error,
    // or end event (observed in some environments), don't leave the button
    // stuck in "Listening…" forever with no way to retry.
    const watchdog = setTimeout(() => {
      try {
        recognizer.abort();
      } catch (e) {
        // ignore
      }
      micBtn.classList.remove("listening");
      feedback.textContent = "No response from the microphone — try again.";
      feedback.className = "mic-feedback wrong";
    }, 8000);

    recognizer.onresult = (event) => {
      clearTimeout(watchdog);
      const alternatives = event.results[0];
      let matched = false;
      let heard = "";
      for (let i = 0; i < alternatives.length; i++) {
        if (i === 0) heard = alternatives[i].transcript;
        if (isCloseMatch(alternatives[i].transcript, target)) {
          matched = true;
          break;
        }
      }
      if (matched) {
        feedback.textContent = "✅ Correct! Well pronounced.";
        feedback.className = "mic-feedback correct";
      } else {
        feedback.innerHTML = `❌ Not quite. You said "${heard}". Correct: <strong>${capitalize(target)}</strong> <em>[${word[pronField]}]</em>`;
        feedback.className = "mic-feedback wrong";
        speak(target, state.lang);
      }
    };

    recognizer.onerror = (event) => {
      clearTimeout(watchdog);
      feedback.textContent =
        event.error === "not-allowed" || event.error === "permission-denied"
          ? "Microphone access denied. Please allow microphone permissions and try again."
          : event.error === "no-speech"
          ? "Didn't hear anything — try again."
          : "Something went wrong with the microphone. Try again.";
      feedback.className = "mic-feedback wrong";
    };

    recognizer.onend = () => {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
    };

    try {
      recognizer.start();
    } catch (e) {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
      feedback.textContent = "Couldn't start the microphone. Try again.";
      feedback.className = "mic-feedback wrong";
    }
  }

  // ---------- Practice Conversation (Claude-powered) ----------
  async function callPracticeFunction(userUtterance) {
    const resp = await fetch(PRACTICE_FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          lang: state.lang,
          history: state.practiceHistory,
          userUtterance: userUtterance || undefined,
        },
      }),
    });
    const json = await resp.json();
    if (!resp.ok || json.error) {
      throw new Error((json.error && json.error.message) || "Request failed");
    }
    return json.result;
  }

  function setPracticeStatus(text, busy, isError = false) {
    document.getElementById("practice-mic-label").textContent = text;
    document.getElementById("practice-mic-label").classList.toggle("wrong", isError);
    document.getElementById("practice-mic-btn").disabled = busy;
  }

  function renderPracticeAssistantBubble(text, translation) {
    const container = document.getElementById("practice-transcript");
    const bubble = document.createElement("div");
    bubble.className = "practice-bubble assistant";
    bubble.innerHTML = `
      <button class="practice-bubble-play" title="Listen">🔊</button>
      <span class="practice-bubble-text"></span>
      <span class="practice-bubble-translation"></span>
    `;
    bubble.querySelector(".practice-bubble-text").textContent = text;
    bubble.querySelector(".practice-bubble-translation").textContent = translation;
    bubble.querySelector(".practice-bubble-play").addEventListener("click", () => speak(text, state.lang));
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
    return bubble;
  }

  function renderPracticeUserBubble(text) {
    const container = document.getElementById("practice-transcript");
    const bubble = document.createElement("div");
    bubble.className = "practice-bubble user";
    bubble.innerHTML = `
      <span class="practice-bubble-text"></span>
      <div class="practice-corrections"></div>
    `;
    bubble.querySelector(".practice-bubble-text").textContent = text;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
    return bubble;
  }

  function applyCorrectionsToBubble(bubble, corrections, encouragement) {
    const box = bubble.querySelector(".practice-corrections");
    if (corrections && corrections.length > 0) {
      box.innerHTML = corrections
        .map(
          (c) => `
        <div class="practice-correction">
          <span class="practice-correction-original">${c.original}</span>
          <span class="practice-correction-arrow">→</span>
          <span class="practice-correction-fixed">${c.corrected}</span>
          <span class="practice-correction-note">${c.explanation}</span>
        </div>`
        )
        .join("");
    } else if (encouragement) {
      box.innerHTML = `<div class="practice-encouragement">✅ ${encouragement}</div>`;
    }
    document.getElementById("practice-transcript").scrollTop =
      document.getElementById("practice-transcript").scrollHeight;
  }

  async function startPracticeConversation() {
    state.practiceHistory = [];
    document.getElementById("practice-transcript").innerHTML = "";
    setPracticeStatus("Starting conversation…", true);
    showScreen("screen-practice-chat");

    try {
      const result = await callPracticeFunction(null);
      state.practiceHistory.push({ role: "user", text: "(start the conversation)" });
      state.practiceHistory.push({ role: "assistant", text: result.reply });
      renderPracticeAssistantBubble(result.reply, result.reply_translation);
      speak(result.reply, state.lang);
      setPracticeStatus("Tap the mic and speak", false);
    } catch (err) {
      console.error("Practice Conversation error:", err);
      setPracticeStatus("Couldn't start the conversation. Check your connection and try again.", false, true);
    }
  }

  function handlePracticeMicClick() {
    const micBtn = document.getElementById("practice-mic-btn");
    const SR = getSpeechRecognitionCtor();

    if (!SR) {
      setPracticeStatus("Speech recognition isn't supported in this browser. Try Chrome or Edge.", false, true);
      return;
    }
    if (micBtn.disabled || micBtn.classList.contains("listening")) return;

    const recognizer = new SR();
    recognizer.lang = SPEECH_LANG[state.lang];
    recognizer.interimResults = false;

    micBtn.classList.add("listening");
    setPracticeStatus("Listening…", false);

    const watchdog = setTimeout(() => {
      try {
        recognizer.abort();
      } catch (e) {
        // ignore
      }
      micBtn.classList.remove("listening");
      setPracticeStatus("No response from the microphone — try again.", false, true);
    }, 8000);

    recognizer.onresult = async (event) => {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
      const heard = event.results[0][0].transcript;

      const userBubble = renderPracticeUserBubble(heard);
      setPracticeStatus("Thinking…", true);

      try {
        const result = await callPracticeFunction(heard);
        applyCorrectionsToBubble(userBubble, result.corrections, result.encouragement);
        state.practiceHistory.push({ role: "user", text: heard });
        state.practiceHistory.push({ role: "assistant", text: result.reply });
        renderPracticeAssistantBubble(result.reply, result.reply_translation);
        speak(result.reply, state.lang);
        setPracticeStatus("Tap the mic and speak", false);
      } catch (err) {
        console.error("Practice Conversation error:", err);
        setPracticeStatus("Couldn't reach the conversation partner. Try again.", false, true);
      }
    };

    recognizer.onerror = (event) => {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
      setPracticeStatus(
        event.error === "not-allowed" || event.error === "permission-denied"
          ? "Microphone access denied. Please allow microphone permissions and try again."
          : event.error === "no-speech"
          ? "Didn't hear anything — try again."
          : "Something went wrong with the microphone. Try again.",
        false,
        true
      );
    };

    recognizer.onend = () => {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
    };

    try {
      recognizer.start();
    } catch (e) {
      clearTimeout(watchdog);
      micBtn.classList.remove("listening");
      setPracticeStatus("Couldn't start the microphone. Try again.", false, true);
    }
  }

  // ---------- Celebration: confetti + fireworks ----------
  function celebrate() {
    const overlay = document.getElementById("celebration-overlay");
    overlay.innerHTML = "";

    const colors = ["#ff6b6b", "#ffd93d", "#6bcB77", "#4d96ff", "#ff8bc6", "#6d5ef8", "#ff9f43"];

    // Confetti falling from the top
    const confettiCount = 120;
    for (let i = 0; i < confettiCount; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      const size = 6 + Math.random() * 8;
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.width = `${size}px`;
      piece.style.height = `${size * 0.4}px`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
      piece.style.animationDelay = `${Math.random() * 1.2}s`;
      overlay.appendChild(piece);
    }

    // A few firework bursts
    const burstCount = 5;
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        spawnFirework(overlay, colors);
      }, i * 400);
    }

    setTimeout(() => {
      overlay.innerHTML = "";
    }, 5000);
  }

  function spawnFirework(overlay, colors) {
    const cx = 15 + Math.random() * 70; // vw
    const cy = 15 + Math.random() * 40; // vh
    const particleCount = 24;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const distance = 60 + Math.random() * 60;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      const particle = document.createElement("div");
      particle.className = "firework-particle";
      particle.style.left = `${cx}vw`;
      particle.style.top = `${cy}vh`;
      particle.style.background = color;
      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      overlay.appendChild(particle);
    }
  }

  // ---------- Leaderboard: best score per player (shared via Firestore) ----------
  const LEADERBOARD_TOP_N = 10;
  const LEADERBOARD_SCAN_LIMIT = 500; // how many top-scoring attempts to scan for unique players

  function relativeTime(isoDate) {
    const diffMs = Date.now() - new Date(isoDate).getTime();
    const minutes = Math.floor(diffMs / 60000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  async function saveResult(name, score) {
    if (!name) return;
    const normalized = name.trim().toLowerCase();

    try {
      // Every attempt is logged as its own entry; the leaderboard view reduces
      // these to each player's single best score at read time (see
      // renderLeaderboard), rather than merging them here at write time.
      await db.collection("leaderboard").add({
        normalized,
        displayName: name.trim(),
        bestScore: score,
        date: new Date().toISOString(),
        lang: state.lang,
        level: state.level,
        category: state.category,
      });
    } catch (err) {
      console.error("Failed to save leaderboard result:", err);
    }
  }

  async function renderLeaderboard() {
    const container = document.getElementById("leaderboard-list");
    container.innerHTML = `<p class="leaderboard-empty">Loading leaderboard…</p>`;

    let scanned;
    try {
      const snapshot = await db
        .collection("leaderboard")
        .orderBy("bestScore", "desc")
        .limit(LEADERBOARD_SCAN_LIMIT)
        .get();
      scanned = snapshot.docs.map((doc) => doc.data());
    } catch (err) {
      console.error("Failed to load leaderboard:", err);
      container.innerHTML = `<p class="leaderboard-empty">Couldn't load the leaderboard. Check your internet connection and try again.</p>`;
      return;
    }

    // Attempts are already sorted by score (highest first), so the first
    // time we see a given player is necessarily their best result — collect
    // one entry per unique player, in ranked order.
    const seen = new Set();
    const list = [];
    for (const entry of scanned) {
      if (seen.has(entry.normalized)) continue;
      seen.add(entry.normalized);
      list.push(entry);
      if (list.length >= LEADERBOARD_TOP_N) break;
    }

    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = `<p class="leaderboard-empty">No results yet. Finish a quiz to appear here!</p>`;
      return;
    }

    const myName = state.playerName.trim().toLowerCase();

    list.forEach((entry, index) => {
      const row = document.createElement("div");
      row.className = "leaderboard-row" + (entry.normalized === myName ? " me" : "");
      const metaParts = [relativeTime(entry.date)];
      if (entry.lang) metaParts.push(LANGUAGE_LABELS[entry.lang]);
      if (entry.level) metaParts.push(LEVEL_LABELS[entry.level]);
      if (entry.category) metaParts.push(CATEGORY_LABELS[entry.category] || PHRASE_CATEGORY_LABELS[entry.category] || entry.category);

      row.innerHTML = `
        <span class="leaderboard-rank">#${index + 1}</span>
        <span class="leaderboard-name">${entry.displayName}<br><span class="leaderboard-meta">${metaParts.join(" · ")}</span></span>
        <span class="leaderboard-score">${entry.bestScore}/${QUESTIONS_PER_QUIZ}</span>
      `;
      container.appendChild(row);
    });
  }

  // ---------- Event wiring ----------
  function init() {
    const nameInput = document.getElementById("name-input");
    const savedName = localStorage.getItem(LAST_NAME_KEY);
    if (savedName) nameInput.value = savedName;

    document.getElementById("name-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      if (!name) return;
      state.playerName = name;
      localStorage.setItem(LAST_NAME_KEY, name);
      document.getElementById("greeting-text").textContent = `Hi, ${name}! 👋`;
      showScreen("screen-mode");
    });

    document.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        // Practice Conversation skips topic/category selection entirely —
        // it's an open conversation, not tied to a word list — and goes
        // straight to picking a language.
        if (state.mode === "practice") {
          document.querySelector("#screen-language [data-back]").dataset.back = "screen-mode";
          showScreen("screen-language");
          return;
        }
        document.querySelector("#screen-language [data-back]").dataset.back = "screen-topictype";
        // Dialogues and Grammar are Learning-only concepts — a multi-choice
        // quiz doesn't map onto a full conversation or a grammar lesson.
        const learningOnly = state.mode === "learning" ? "" : "none";
        document.getElementById("topictype-dialogues-btn").style.display = learningOnly;
        document.getElementById("topictype-grammar-btn").style.display = learningOnly;
        showScreen("screen-topictype");
      });
    });

    document.querySelectorAll("[data-topictype]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.topicType = btn.dataset.topictype;
        showScreen("screen-language");
      });
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.lang;
        if (state.mode === "practice") {
          startPracticeConversation();
        } else if (state.topicType === "words") {
          showScreen("screen-level");
        } else if (state.topicType === "grammar") {
          renderGrammarList();
          showScreen("screen-grammar-list");
        } else {
          // Phrases/Dialogues have no difficulty level — go straight to
          // the (situational) category picker.
          renderCategoryGrid();
          showScreen("screen-category");
        }
      });
    });

    document.querySelectorAll("[data-level]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.level = btn.dataset.level;
        renderCategoryGrid();
        showScreen("screen-category");
      });
    });

    document.getElementById("category-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      state.category = btn.dataset.category;
      if (state.topicType === "dialogues") {
        startDialogueList();
      } else if (state.mode === "learning") {
        startFlashcards();
      } else {
        startQuiz();
      }
    });

    document.getElementById("category-back-btn").addEventListener("click", () => {
      showScreen(state.topicType === "words" ? "screen-level" : "screen-language");
    });

    document.querySelectorAll("[data-back]").forEach((btn) => {
      btn.addEventListener("click", () => showScreen(btn.dataset.back));
    });

    document.getElementById("next-btn").addEventListener("click", nextQuestion);
    document.getElementById("retry-btn").addEventListener("click", startQuiz);
    document.getElementById("home-btn").addEventListener("click", () => showScreen("screen-mode"));

    document.getElementById("flashcard-btn").addEventListener("click", playCurrentCard);
    document.getElementById("flashcard-prev-btn").addEventListener("click", prevCard);
    document.getElementById("flashcard-next-btn").addEventListener("click", nextCard);
    document.getElementById("mic-btn").addEventListener("click", handleMicClick);

    document.querySelectorAll(".tense-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.tense = btn.dataset.tense;
        document.querySelectorAll(".tense-tab").forEach((b) => b.classList.toggle("active", b === btn));
        renderConjugationTable(state.deck[state.deckIndex]);
      });
    });

    document.getElementById("dialogue-list-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-dialogue-index]");
      if (!btn) return;
      startDialogue(Number(btn.dataset.dialogueIndex));
    });
    document.getElementById("dialogue-line-card").addEventListener("click", playDialogueLine);
    document.getElementById("dialogue-prev-btn").addEventListener("click", prevDialogueLine);
    document.getElementById("dialogue-next-btn").addEventListener("click", nextDialogueLine);

    document.getElementById("grammar-list-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-grammar-index]");
      if (!btn) return;
      openGrammarLesson(Number(btn.dataset.grammarIndex));
    });

    document.getElementById("practice-mic-btn").addEventListener("click", handlePracticeMicClick);

    document.getElementById("leaderboard-btn").addEventListener("click", () => {
      renderLeaderboard();
      showScreen("screen-leaderboard");
    });
    document.getElementById("leaderboard-close-btn").addEventListener("click", () => showScreen("screen-results"));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
