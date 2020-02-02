import firebase from 'firebase/app';
import 'firebase/firestore'; // This is the database
import 'firebase/auth'; // This is the authentication

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBxTP-ONRWGV2KGw6UR4T9SWxMRR5lyZMc',
  authDomain: 'react-project-management-712a3.firebaseapp.com',
  databaseURL: 'https://react-project-management-712a3.firebaseio.com',
  projectId: 'react-project-management-712a3',
  storageBucket: 'react-project-management-712a3.appspot.com',
  messagingSenderId: '617339652403',
  appId: '1:617339652403:web:58b74e9770af7d82db1646',
  measurementId: 'G-49B0H3ZFLL'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
