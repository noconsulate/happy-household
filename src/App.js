import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import firebase from './firebase'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { Header, Menu } from 'semantic-ui-react'

import { initChores } from './reducers/choreReducer'
import MyMenu from './components/MyMenu'
import ChoreView from './components/ChoreView'
import LoginView from './components/LoginView'

import Test from './components/test'

function App(props) {
  //temporary menu functions
  const [activeItem, setActiveItem] = React.useState('chores')

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  useEffect(() => {
    props.initChores()
  }, [])

  const myStyle = {
    padding: 10
  }

  return (
    <Router>
      <div style={myStyle}>
        <Test />
        <Header as='h1'>Happy Household</Header>
        <MyMenu />
        <Route path="/chores" render={() => <ChoreView />} />
        <Route path='/signin' render={() => <LoginView />} />
      </div>
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
