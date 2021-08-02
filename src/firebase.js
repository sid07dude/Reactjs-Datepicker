import * as firebase from "firebase";

var firebaseConfig = {
    /*
    replace this object with yours
    */
    apiKey: "AIzaSyACRbBHQa-ikKF7TeVCvf-ypgYBr8gw5hs",
    authDomain: "angularcrud-826fc.firebaseapp.com",
    databaseURL: "https://angularcrud-826fc.firebaseio.com",
    projectId: "angularcrud-826fc",
    storageBucket: "angularcrud-826fc.appspot.com",
    messagingSenderId: "106762000507",
    appId: "1:106762000507:web:6091ef3a34a6a78f5c6ade",
    measurementId: "G-H4MH5E74VY"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();