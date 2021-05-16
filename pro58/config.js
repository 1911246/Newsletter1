import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBvIO0YJYVmFOTehvS14gmnCESZWYb-9Aw",
    authDomain: "newsletter-3c5aa.firebaseapp.com",
    projectId: "newsletter-3c5aa",
    storageBucket: "newsletter-3c5aa.appspot.com",
    messagingSenderId: "732478747308",
    appId: "1:732478747308:web:df9c41123927722eaa6509",
    measurementId: "G-C118Q9CYCM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();