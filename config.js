// firebase config key setup

import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCInDGSaFqOdFuVDjHXAK3CbsLgZ0TvZow",
    authDomain: "random-app-d4d7b.firebaseapp.com",
    projectId: "random-app-d4d7b",
    storageBucket: "random-app-d4d7b.appspot.com",
    messagingSenderId: "537870826435",
    appId: "1:537870826435:web:954c3c24c53625f1239b76",
    measurementId: "G-WVW876BFFN"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};