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
//firebaseConfig is connecting our keys 

  const firebaseApp = firebase.initializeApp(firebaseConfig); //connects our app to the API keys
  const db = firebaseApp.firestore(); //getting access to firestore database 
  const auth = firebase.auth(); //preparing authentication module
  const provider = new firebase.auth.GoogleAuthProvider(); //preparing provider - in order to get Google services

  export { auth, provider };
  export default db;  
