import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import firebase from './firebase'
import { initChores } from './reducers/choreReducer'
import MyMenu from './components/MyMenu'
import ChoreView from './components/ChoreView'
import LoginView from './components/LoginView'

function App(props) {
  useEffect(() => {
    props.initChores(props.user.family)
    firebase.auth().onAuthStateChanged(res => {
      console.log(res)
      
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
  initChores
}

export default connect(mapStateToProps, mapToDispatch)(App)
