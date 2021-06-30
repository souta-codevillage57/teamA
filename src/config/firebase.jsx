import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBA699H8Np4nH1c0kQhGCat-d3lopD58_c",
    authDomain: "teama-f9684.firebaseapp.com",
    projectId: "teama-f9684",
    storageBucket: "teama-f9684.appspot.com",
    messagingSenderId: "142954621586",
    appId: "1:142954621586:web:04eaa699b1b8e757a1d44b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;