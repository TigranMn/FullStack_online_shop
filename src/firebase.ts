import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCRdVSksH0QzR_12oJXVC7mMdd-sJBjYIg',
  authDomain: 'online-shop-674ff.firebaseapp.com',
  projectId: 'online-shop-674ff',
  storageBucket: 'online-shop-674ff.appspot.com',
  messagingSenderId: '994083342799',
  appId: '1:994083342799:web:0747da05d7660c0e826aba',
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFireStore, projectAuth };
