// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZonk5q1IHwNnoiTSsXNoaMhG-058EMbo",
    authDomain: "chat-app-76b1e.firebaseapp.com",
    projectId: "chat-app-76b1e",
    storageBucket: "chat-app-76b1e.appspot.com",
    messagingSenderId: "378426354854",
    appId: "1:378426354854:web:91f8b168ea73bbcd519867",
    measurementId: "G-2GM0VBKJWB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};