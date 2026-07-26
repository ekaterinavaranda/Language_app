(() => {
  "use strict";

  const QUESTIONS_PER_QUIZ = 10;
  const CHOICES_PER_QUESTION = 4;
  const CELEBRATION_THRESHOLD = 7;
  const LEADERBOARD_KEY = "happyLearningLeaderboard";
  const LAST_NAME_KEY = "happyLearningLastName";

  const state = {
    playerName: "",
    lang: null,       // 'ru' | 'pt'
    level: null,      // 'easy' | 'medium' | 'hard' | 'insane'
    category: null,   // key in WORDS
    questions: [],     // [{ word, choices: [{text, isCorrect}] }]
    currentIndex: 0,
    score: 0,
    answered: false,
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
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = SPEECH_LANG[lang];
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
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

  // Builds N unique correct words: primary level pool first, then fills
  // from the rest of the category (still unique) if the level is too small.
  function buildUniqueWordList(category, level, count) {
    const primaryPool = shuffle(WORDS[category][level]);
    const fullPool = getAllCategoryWords(category);
    const used = new Set();
    const result = [];

    for (const w of primaryPool) {
      if (result.length >= count) break;
      if (!used.has(w.en)) {
        used.add(w.en);
        result.push(w);
      }
    }
    if (result.length < count) {
      const rest = shuffle(fullPool.filter((w) => !used.has(w.en)));
      for (const w of rest) {
        if (result.length >= count) break;
        used.add(w.en);
        result.push(w);
      }
    }
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
        ${pictureHtml}
        <span class="answer-text">${text}</span>
        <span class="answer-pron">[${pron}]</span>
      `;
      btn.addEventListener("click", () => handleAnswer(btn, choice));
      grid.appendChild(btn);
    });

    document.getElementById("next-btn").disabled = true;
  }

  function handleAnswer(button, choice) {
    if (state.answered) return;
    state.answered = true;

    const pronField = state.lang === "ru" ? "ruPron" : "ptPron";
    speak(choice.word[state.lang], state.lang);

    const allButtons = document.querySelectorAll(".answer-btn");
    allButtons.forEach((b) => (b.disabled = true));

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

  // ---------- Leaderboard (localStorage) ----------
  function loadLeaderboard() {
    try {
      const raw = localStorage.getItem(LEADERBOARD_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveLeaderboard(list) {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(list));
  }

  function saveResult(name, score) {
    if (!name) return;
    const normalized = name.trim().toLowerCase();
    const list = loadLeaderboard();
    const existing = list.find((entry) => entry.normalized === normalized);

    if (existing) {
      if (score > existing.bestScore) {
        existing.bestScore = score;
        existing.displayName = name.trim();
        existing.date = new Date().toISOString();
        existing.lang = state.lang;
        existing.level = state.level;
        existing.category = state.category;
      }
    } else {
      list.push({
        normalized,
        displayName: name.trim(),
        bestScore: score,
        date: new Date().toISOString(),
        lang: state.lang,
        level: state.level,
        category: state.category,
      });
    }
    saveLeaderboard(list);
  }

  function renderLeaderboard() {
    const list = loadLeaderboard().sort((a, b) => b.bestScore - a.bestScore);
    const container = document.getElementById("leaderboard-list");
    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = `<p class="leaderboard-empty">No results yet. Finish a quiz to appear here!</p>`;
      return;
    }

    const myName = state.playerName.trim().toLowerCase();
    const medals = ["🥇", "🥈", "🥉"];

    list.forEach((entry, index) => {
      const row = document.createElement("div");
      row.className = "leaderboard-row" + (entry.normalized === myName ? " me" : "");
      const rank = medals[index] || `#${index + 1}`;
      const metaParts = [];
      if (entry.lang) metaParts.push(LANGUAGE_LABELS[entry.lang]);
      if (entry.level) metaParts.push(LEVEL_LABELS[entry.level]);
      if (entry.category) metaParts.push(CATEGORY_LABELS[entry.category]);

      row.innerHTML = `
        <span class="leaderboard-rank">${rank}</span>
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
      showScreen("screen-language");
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
      startQuiz();
    });

    document.querySelectorAll("[data-back]").forEach((btn) => {
      btn.addEventListener("click", () => showScreen(btn.dataset.back));
    });

    document.getElementById("next-btn").addEventListener("click", nextQuestion);
    document.getElementById("retry-btn").addEventListener("click", startQuiz);
    document.getElementById("home-btn").addEventListener("click", () => showScreen("screen-language"));

    document.getElementById("leaderboard-btn").addEventListener("click", () => {
      renderLeaderboard();
      showScreen("screen-leaderboard");
    });
    document.getElementById("leaderboard-close-btn").addEventListener("click", () => showScreen("screen-results"));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
