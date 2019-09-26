
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAp-R-QSbSWDdt46ieUiCa5hlKJtnVG_HE",
    authDomain: "nbap-ee80d.firebaseapp.com",
    databaseURL: "https://nbap-ee80d.firebaseio.com",
    projectId: "nbap-ee80d",
    storageBucket: "nbap-ee80d.appspot.com",
    messagingSenderId: "506955170304",
    appId: "1:506955170304:web:68ea29b632ab8e34478ee5",
    measurementId: "G-4Q2PE7YVM8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  
  export default firebase;