import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB-w8iE7xqj75I81tFEMugg5UqUWYdQkVs',
  authDomain: 'gestao-a-vista-curingas.firebaseapp.com',
  databaseURL: 'https://gestao-a-vista-curingas.firebaseio.com',
  projectId: 'gestao-a-vista-curingas',
  storageBucket: 'gestao-a-vista-curingas.appspot.com',
  messagingSenderId: '580279756020',
  appId: '1:580279756020:web:1c7017f50ecb8d79'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
