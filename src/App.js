import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import {Button} from 'antd'

import './App.css'
import { initChores } from './reducers/choreReducer'
import AddChore from './components/AddChore'
import ChoreList from './components/ChoreList'

function App(props) {

  useEffect(() => {
    props.initChores()
  }, [])

  return (
    <div className="App">
      <Button>antd button</Button>
      <button>regular button</button>
      <div>
      <h1>Happy Household</h1>
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
