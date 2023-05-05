import firebase from "firebase/compat/app";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
