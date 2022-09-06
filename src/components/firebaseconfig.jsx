import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDnttmZLHXDEI0uNz_bb1DutFv4s9CS77Q",
    authDomain: "masailms-7bea0.firebaseapp.com",
    projectId: "masailms-7bea0",
    storageBucket: "masailms-7bea0.appspot.com",
    messagingSenderId: "645423375928",
    appId: "1:645423375928:web:b1a7c3d2ba23ca7deee8cd",
    measurementId: "G-SMPVRFPTQZ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;