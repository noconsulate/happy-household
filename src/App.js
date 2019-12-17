import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import firebase from './firebase'

import { Header } from 'semantic-ui-react'

import { initChores } from './reducers/choreReducer'
import MyMenu from './components/MyMenu'
import ChoreView from './components/ChoreView'
import LoginView from './components/LoginView'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(user.email + displayName + 'is signed in')
    // ...
  } else {
    // User is signed out.
  }
});

function App(props) {

  useEffect(() => {
    props.initChores()
  }, [])

  const myStyle = {
    padding: 10
  }

  return (
    <div>
      <div style={myStyle}>
        <MyMenu />
        <Header as='h1'>Happy Household</Header>
        <ChoreView />
        <br />
        <LoginView />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    chores: state.chores
  }
}

const mapToDispatch = {
  initChores
}

export default connect(mapStateToProps, mapToDispatch)(App)
