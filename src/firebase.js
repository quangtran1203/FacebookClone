// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHBx4p_FM_3oqbt6OwBKjF7LcfajvEW9M",
    authDomain: "facebook-clone-25e38.firebaseapp.com",
    projectId: "facebook-clone-25e38",
    storageBucket: "facebook-clone-25e38.appspot.com",
    messagingSenderId: "951763916327",
    appId: "1:951763916327:web:839fe49ecebdea10b56002",
    measurementId: "G-NBG9R837CJ"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;