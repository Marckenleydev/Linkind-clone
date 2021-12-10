import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCBzf_frDRqT6fu6yv4wI786d0ELLZC6j4",
    authDomain: "linkind-clone-36050.firebaseapp.com",
    projectId: "linkind-clone-36050",
    storageBucket: "linkind-clone-36050.appspot.com",
    messagingSenderId: "855280034463",
    appId: "1:855280034463:web:f06699a03d7c46cb4138aa"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;

