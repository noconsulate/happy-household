import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { initChores } from './reducers/choreReducer'
import AddChore from './components/AddChore'
import ChoreList from './components/ChoreList'

function App(props) {

  useEffect(() => {
    props.initChores()
  }, [])

  return (
    <div>
      <h1>Happy Household</h1>
      <AddChore />
      <ChoreList />
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
