import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC4JxWZ9K7x5qmgQm91Eili6f4UhyOrISI",
  authDomain: "happy-household.firebaseapp.com",
  databaseURL: "https://happy-household.firebaseio.com",
  projectId: "happy-household",
  storageBucket: "happy-household.appspot.com",
  messagingSenderId: "839235197768",
  appId: "1:839235197768:web:62b9c47f5880cbfa16717d"

};

const fire = firebase.initializeApp(firebaseConfig)

export const fireDb = firebase.database()

export default fire