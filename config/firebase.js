const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyD32OJ9Or9YPdX407MOmn9IGA2uYDwEUvU",
    authDomain: "web-dev-project-404722.firebaseapp.com",
    databaseURL: "https://web-dev-project-404722-default-rtdb.firebaseio.com",
    projectId: "web-dev-project-404722",
    storageBucket: "web-dev-project-404722.appspot.com",
    messagingSenderId: "629017468910",
    appId: "1:629017468910:web:8f866115841be9f40b38ff",
    measurementId: "G-CFC97912VZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Image = db.collection("Images");

module.exports = Image;