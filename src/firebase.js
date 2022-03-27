import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyD0AmCYc2c9RQVszwFXPZDUysg39v_pV4s",
        authDomain: "picsgram-3ae2e.firebaseapp.com",
        projectId: "picsgram-3ae2e",
        storageBucket: "picsgram-3ae2e.appspot.com",
        messagingSenderId: "846640772733",
        appId: "1:846640772733:web:78a5fa3868af59055ce314"
    
      
};
firebase.initializeApp(firebaseConfig);

export default firebase;
