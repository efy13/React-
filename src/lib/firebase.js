import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBDa3VQJawlBL8MUS8rkfIeSpw2qNYdhOQ",
  authDomain: "login-test-a3ac6.firebaseapp.com",
  projectId: "login-test-a3ac6",
  storageBucket: "login-test-a3ac6.firebasestorage.app",
  messagingSenderId: "539318854084",
  appId: "1:539318854084:web:14f730173582a3dda34491",
  measurementId: "G-28453JK8Q7"
};

const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);