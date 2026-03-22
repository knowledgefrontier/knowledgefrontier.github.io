import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpCRNZmPir11gAbva-bPtH-SWXyhrExi4",
  authDomain: "knowledgefrontier1.firebaseapp.com",
  projectId: "knowledgefrontier1",
  storageBucket: "knowledgefrontier1.firebasestorage.app",
  messagingSenderId: "441154297343",
  appId: "1:441154297343:web:bd12910a37911bdcea9bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
