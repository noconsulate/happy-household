import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import {Button} from 'antd'

import { initChores } from './reducers/choreReducer'
import AddChore from './components/AddChore'
import ChoreList from './components/ChoreList'

function App(props) {

  useEffect(() => {
    props.initChores()
  }, [])

  return (
    <React.Fragment>
    <Button>antd button</Button>
    <button>regular button</button>

      <CssBaseline />
      <div>
      <h1>Happy Household</h1>
      <AddChore />
      <ChoreList />
    </div>
    </React.Fragment>
    
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
