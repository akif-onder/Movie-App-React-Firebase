import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBzZip4hWXLJFTxkziex31ooHn0tbclszM",
    authDomain: "movie-app-akif.firebaseapp.com",
    projectId: "movie-app-akif",
    storageBucket: "movie-app-akif.appspot.com",
    messagingSenderId: "873602438086",
    appId: "1:873602438086:web:afc6733b56b1ae1a8b58c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

