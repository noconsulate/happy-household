import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import firebase, { fireDb } from './firebase'
import { initUser } from './reducers/userReducer'
import { initChores } from './reducers/choreReducer'
import MyMenu from './components/MyMenu'
import ChoreView from './components/ChoreView'
import LoginView from './components/LoginView'

function App(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(res => {
      if (res) {
        const uid = res.uid
        let family
        fireDb.ref('users/' + uid).once('value').then(snap => {
          const user = snap.val()
          family = user.family
          props.initUser(user)
          props.initChores(family)
        })
      } else {
        console.log('no user')
      }
    })
  }, [])

  const myStyle = {
    padding: 10
  }

  return (
    <div style={myStyle}>
      <Router>
      <Route component={MyMenu} />
      <Switch>
        <Route path='/signin'>
          <LoginView />
        </Route>
        <Route path='/chores'>
          <ChoreView />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chores: state.chores,
    user: state.user,
  }
}

const mapToDispatch = {
  initChores,
  initUser
}

export default connect(mapStateToProps, mapToDispatch)(App)
