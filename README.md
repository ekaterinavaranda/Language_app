# Happy Learning

Learn Russian & Portuguese vocabulary through flashcards with pronunciation scoring, or quick multiple-choice quizzes — with pictures, a leaderboard shared across devices, and near-1000 words to draw from.

## How it works

1. Enter your name.
2. Pick a mode: **Learn** (flashcards) or **Quiz**.
3. Pick a language to study: Russian or Portuguese.
4. Pick a difficulty: Easy, Medium, Hard, or Insane.
5. Pick a category: Animals, Colors, Food, Verbs, and more.

**Learn mode**: flip through flashcards for the chosen category — each shows a picture, the English word, the translation, and a pronunciation guide. Tap the card to hear it spoken aloud, or tap the microphone button to say the word yourself; the app listens (via the browser's speech recognition) and tells you whether you got it right, replaying the correct pronunciation if not.

**Quiz mode**: answer 10 multiple-choice questions — each answer reveals its picture and pronunciation guide once you've picked one, and is spoken aloud when clicked (click again to hear it repeated). Score 7+ triggers a confetti celebration. Every attempt is logged to a leaderboard shared across every device and session, which shows the 10 most recent results from everyone, ranked by score.

## Running it

No build step or server required — just open `index.html` in a browser. Speech recognition (Learn mode's microphone feature) needs a Chromium-based browser (Chrome/Edge) and microphone permission; it degrades gracefully to playback-only elsewhere.

## Tech

Plain HTML/CSS/JavaScript. Pronunciation playback and recognition use the browser's built-in Web Speech API (`SpeechSynthesis` / `SpeechRecognition`). The leaderboard is stored in Firebase Firestore (config in `firebase-config.js` — the API key there is safe to expose; access is governed by Firestore security rules, not by secrecy).
