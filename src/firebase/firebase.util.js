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

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    // if the user object doesn't exist
    // we want to exit from this function
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // if the snap shot does not have any data
    // create a new user using data from our userAuth
    // object
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle =  () => auth.signInWithPopup(provider);

  export default firebase;