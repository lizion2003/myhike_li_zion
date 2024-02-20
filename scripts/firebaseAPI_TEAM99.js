//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyAscF4zGUKKqFFUTNqUpFqVbomAS2tDG1U",
    authDomain: "comp1800-demo-4f8b2.firebaseapp.com",
    projectId: "comp1800-demo-4f8b2",
    storageBucket: "comp1800-demo-4f8b2.appspot.com",
    messagingSenderId: "685566530343",
    appId: "1:685566530343:web:273f5207346786ea48cf02"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
