import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var firebaseConfig = {
  apiKey: "AIzaSyBmQ2dG6-KuKKHP7iLSzbWOIS4ZJRDimW8",
  authDomain: "database-example-1a740.firebaseapp.com",
  databaseURL: "https://database-example-1a740.firebaseio.com",
  projectId: "database-example-1a740",
  storageBucket: "database-example-1a740.appspot.com",
  messagingSenderId: "46272556218",
  appId: "1:46272556218:web:4b9444ecd8180d8e426683",
  measurementId: "G-ELJ2X47FXC"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

