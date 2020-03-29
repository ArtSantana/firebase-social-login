import React from 'react';
import Routes from './src/routes';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2zOqqcYfHXdY3f2lMrp2nLN4qoA6U6Os",
    authDomain: "fir-auth-react-native-6ba9d.firebaseapp.com",
    databaseURL: "https://fir-auth-react-native-6ba9d.firebaseio.com",
    projectId: "fir-auth-react-native-6ba9d",
    storageBucket: "fir-auth-react-native-6ba9d.appspot.com",
    messagingSenderId: "176165717514",
    appId: "1:176165717514:web:628ec01aba66a2bba301f3"
}

firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <Routes />
  );
}