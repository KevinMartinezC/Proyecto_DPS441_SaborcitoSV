import * as firebase from "firebase"

const firebaseConfig = {
 apiKey: "AIzaSyDog4pAQAQcB3NRZxXIp_Tp2mCFmJw6Upc",
    authDomain: "saborcitosvproyecto.firebaseapp.com",
    projectId: "saborcitosvproyecto",
    storageBucket: "saborcitosvproyecto.appspot.com",
    messagingSenderId: "249677646585",
    appId: "1:249677646585:web:75c6e320765c3a54dc7028"
};


 export const firebaseApp = firebase.initializeApp(firebaseConfig);


