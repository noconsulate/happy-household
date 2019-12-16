import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { Header } from 'semantic-ui-react'

import { initChores } from './reducers/choreReducer'
import AddChore from './components/AddChore'
import ChoreList from './components/ChoreList'

function App(props) {

  useEffect(() => {
    props.initChores()
  }, [])

  return (
    <div>
      <div>
        <Header as='h1'>Happy Household</Header>
        <AddChore />
        <ChoreList />
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
