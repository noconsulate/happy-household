import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from 'semantic-ui-react'

import { initChores } from './reducers/choreReducer'
import MyMenu from './components/MyMenu'
import ChoreView from './components/ChoreView'
import LoginView from './components/LoginView'

function App(props) {
  useEffect(() => {
    props.initChores()
  }, [])

  const myStyle = {
    padding: 10
  }

  return (
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
