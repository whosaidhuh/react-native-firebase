import firebase from 'firebase'

import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3hR4ki8VayFQq_U6K4U5UoS09OzSprbM",
    authDomain: "react-native-firebase2.firebaseapp.com",
    projectId: "react-native-firebase2",
    storageBucket: "react-native-firebase2.appspot.com",
    messagingSenderId: "587653710226",
    appId: "1:587653710226:web:3d2fbfaec76f6917adc14b",
    measurementId: "G-S2JHC3VDR6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };