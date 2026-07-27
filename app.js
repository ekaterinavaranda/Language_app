(() => {
  "use strict";

  const QUESTIONS_PER_QUIZ = 10;
  const CHOICES_PER_QUESTION = 4;
  const CELEBRATION_THRESHOLD = 7;
  const LAST_NAME_KEY = "happyLearningLastName";
  const RECENT_WORDS_KEY = "happyLearningRecentWords";

  const state = {
    playerName: "",
    mode: null,       // 'learning' | 'quiz'
    lang: null,       // 'ru' | 'pt'
    level: null,      // 'easy' | 'medium' | 'hard' | 'insane'
    category: null,   // key in WORDS
    questions: [],     // [{ word, choices: [{text, isCorrect}] }]
    currentIndex: 0,
    score: 0,
    answered: false,
    deck: [],          // flashcard deck (learning mode)
    deckIndex: 0,
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
    const grid = document.getElementById("category-grid");
    grid.innerHTML = "";
    Object.keys(CATEGORY_LABELS).forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "choice-card";
      btn.dataset.category = key;
      const icon = CATEGORY_ICONS[key] || "🔤";
      btn.innerHTML = `<span class="card-icon">${icon}</span><span>${CATEGORY_LABELS[key]}</span>`;
      grid.appendChild(btn);
    });
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

  function getRecentWords(category, level) {
    try {
      const all = JSON.parse(localStorage.getItem(RECENT_WORDS_KEY) || "{}");
      return new Set(all[`${category}:${level}`] || []);
    } catch (e) {
      return new Set();
    }
  }

  function saveRecentWords(category, level, words) {
    try {
      const all = JSON.parse(localStorage.getItem(RECENT_WORDS_KEY) || "{}");
      all[`${category}:${level}`] = words;
      localStorage.setItem(RECENT_WORDS_KEY, JSON.stringify(all));
    } catch (e) {
      // localStorage unavailable — not fresh-word tracking isn't essential, skip silently
    }
  }

  // Builds N unique correct words, preferring ones NOT shown in this
  // player's immediately previous quiz for the same category+level (so
  // back-to-back replays don't just repeat the same words). Falls back to
  // reusing recent words only when the pool is too small to avoid them.
  function buildUniqueWordList(category, level, count) {
    const recent = getRecentWords(category, level);
    const primaryPool = WORDS[category][level];
    const fullPool = getAllCategoryWords(category);

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

    saveRecentWords(category, level, result.map((w) => w.en));
    return result;
  }

  function buildQuiz(category, level, lang) {
    const fullPool = getAllCategoryWords(category);
    const correctWords = buildUniqueWordList(category, level, QUESTIONS_PER_QUIZ);

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
      `Question ${state.currentIndex + 1} / ${QUESTIONS_PER_QUIZ}`;
    document.getElementById("progress-bar-fill").style.width =
      `${(state.currentIndex / QUESTIONS_PER_QUIZ) * 100}%`;
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
    if (state.currentIndex >= QUESTIONS_PER_QUIZ) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    document.getElementById("progress-bar-fill").style.width = "100%";
    document.getElementById("result-score").textContent = state.score;
    const pct = state.score / QUESTIONS_PER_QUIZ;
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
    state.questions = buildQuiz(state.category, state.level, state.lang);
    state.currentIndex = 0;
    state.score = 0;
    showScreen("screen-quiz");
    renderQuestion();
  }

  // ---------- Learning mode: flashcards ----------
  function startFlashcards() {
    state.deck = shuffle(WORDS[state.category][state.level]);
    state.deckIndex = 0;
    showScreen("screen-flashcard");
    renderFlashcard();
  }

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

    const feedback = document.getElementById("mic-feedback");
    feedback.textContent = "";
    feedback.className = "mic-feedback";

    document.getElementById("flashcard-prev-btn").disabled = state.deckIndex === 0;
    document.getElementById("flashcard-next-btn").textContent =
      state.deckIndex === state.deck.length - 1 ? "Finish" : "Next →";
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

  // ---------- Leaderboard: last 10 attempts from everyone (shared via Firestore) ----------
  const RECENT_RESULTS_LIMIT = 10;

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
      // Every attempt is logged as its own entry (not merged per player),
      // so the leaderboard can show the most recent attempts from everyone.
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

    let list;
    try {
      const snapshot = await db
        .collection("leaderboard")
        .orderBy("date", "desc")
        .limit(RECENT_RESULTS_LIMIT)
        .get();
      list = snapshot.docs.map((doc) => doc.data());
    } catch (err) {
      console.error("Failed to load leaderboard:", err);
      container.innerHTML = `<p class="leaderboard-empty">Couldn't load the leaderboard. Check your internet connection and try again.</p>`;
      return;
    }

    // The 10 most recent attempts are the pool; within that pool, rank by
    // score (highest first), breaking ties by most recent.
    list.sort((a, b) => b.bestScore - a.bestScore || new Date(b.date) - new Date(a.date));

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
      if (entry.category) metaParts.push(CATEGORY_LABELS[entry.category]);

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
    renderCategoryGrid();

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
        showScreen("screen-language");
      });
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.lang;
        showScreen("screen-level");
      });
    });

    document.querySelectorAll("[data-level]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.level = btn.dataset.level;
        showScreen("screen-category");
      });
    });

    document.getElementById("category-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      state.category = btn.dataset.category;
      if (state.mode === "learning") {
        startFlashcards();
      } else {
        startQuiz();
      }
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

    document.getElementById("leaderboard-btn").addEventListener("click", () => {
      renderLeaderboard();
      showScreen("screen-leaderboard");
    });
    document.getElementById("leaderboard-close-btn").addEventListener("click", () => showScreen("screen-results"));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
