import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyDjrK1r6y9jNqZM0FrNtIMvBMJ_8giWI",
    authDomain: "crwn-db-abf94.firebaseapp.com",
    databaseURL: "https://crwn-db-abf94.firebaseio.com",
    projectId: "crwn-db-abf94",
    storageBucket: "crwn-db-abf94.appspot.com",
    messagingSenderId: "116943943507",
    appId: "1:116943943507:web:fe5f991f80a9c398aa93a6",
    measurementId: "G-Q4C1H596EK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;