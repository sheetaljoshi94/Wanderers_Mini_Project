import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCK6jKTg21P3Zluddojm8M85z8CWIQCia8",
    authDomain: "chatty-ac815.firebaseapp.com",
    databaseURL: "https://chatty-ac815.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();