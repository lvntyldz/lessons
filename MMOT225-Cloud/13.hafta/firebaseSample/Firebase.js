import firebase from 'firebase';

const FB = firebase.initializeApp({
    apiKey: "<APIKEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://rnfb2-81abd-default-rtdb.firebaseio.com/",
    projectId: "<PROJECT_ID>",
    storageBucket: "<PROJECT_ID>.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
  });

export default FB;


