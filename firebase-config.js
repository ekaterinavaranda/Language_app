// Firebase project config for Happy Learning.
// These values are safe to expose in client-side code — access is controlled
// by Firestore security rules, not by keeping this config secret.
const firebaseConfig = {
  apiKey: "AIzaSyAY5dHF53_Eqb7vOk2ZlXh2LPxQ_b0fM3g",
  authDomain: "happy-learning-92242.firebaseapp.com",
  projectId: "happy-learning-92242",
  storageBucket: "happy-learning-92242.firebasestorage.app",
  messagingSenderId: "1040825467916",
  appId: "1:1040825467916:web:66c1a53c8d92fb56365a29",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
