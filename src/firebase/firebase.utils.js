import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ05lXe4XjLyWiHkfdkT07RTRfHl5GEd0",
    authDomain: "crwn-db-fd003.firebaseapp.com",
    projectId: "crwn-db-fd003",
    storageBucket: "crwn-db-fd003.appspot.com",
    messagingSenderId: "625081075336",
    appId: "1:625081075336:web:963cc3a2bd196ef4e1813d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;