import firebase from "firebase"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMF778hstAALxvW-nne7jDysCDoj4_bQ8",
    authDomain: "satviks-slack-clone.firebaseapp.com", 
    projectId: "satviks-slack-clone",
    storageBucket: "satviks-slack-clone.appspot.com",
    messagingSenderId: "901090914363",
    appId: "901090914363:web:42873a460f4b78e5ceec1e",
    measurementId: "G-15KHVP7LVL" 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider };
  export default db;  
