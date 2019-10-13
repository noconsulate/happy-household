import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { createChore, initChores } from '../reducers/choreReducer'

const Redoo = ({ chores, createChore, initChores }) => {
  useEffect(() => {
    initChores()
    console.log(chores)
  }, [])

  if (chores === undefined) {
    return null
  }

  return (
    <div>
      {console.log(chores)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chores: state.chores
  }
}

const mapToDispatch = {
  createChore,
  initChores,
}

export default connect(mapStateToProps, mapToDispatch)(Redoo)