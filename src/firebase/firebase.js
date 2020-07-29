import firebase from 'firebase';




var firebaseConfig = {
    apiKey: "AIzaSyA93X05qngO_0WVMPV705FaAX7tGTLtVtg",
    authDomain: "facebook-clone-rahulj.firebaseapp.com",
    databaseURL: "https://facebook-clone-rahulj.firebaseio.com",
    projectId: "facebook-clone-rahulj",
    storageBucket: "facebook-clone-rahulj.appspot.com",
    messagingSenderId: "682746244855",
    appId: "1:682746244855:web:e9eef7edac496049abadf2",
    measurementId: "G-JFC9HHHQEQ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const userRef = firebaseApp.database().ref("users");
export const postRef = firebaseApp.database().ref("post");