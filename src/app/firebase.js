// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2uqFGyL6leV1Cxg5-bi7CBNXdnjrLQs",
  authDomain: "appwebtesis.firebaseapp.com",
  projectId: "appwebtesis",
  storageBucket: "appwebtesis.appspot.com",
  messagingSenderId: "557650999186",
  appId: "1:557650999186:web:619293dd59983a6e07b34b",
  measurementId: "G-CNKM5V6MCV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


console.log(app);

