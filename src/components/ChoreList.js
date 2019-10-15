import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {fireDb} from '../firebase'

const ChoreList = ({chores}) => {
  
  let choresToMap = []

  useEffect(() => {
    console.log(chores)
    chores.map(chore => {
      choresToMap.concat({
        chore: chore.chore,
        key: chore.key,
        edit: false
      })
    })

    console.log(choresToMap)
  }, [])

  const handleEditClick = event => {
    event.preventDefault()
    console.log('handleEditClick')
  }

  const rows = () => {
    return (
      <ul>
        {chores.map(chore => 
          <li key={chore.key} onClick={handleEditClick}>
            {chore.chore}
          </li>  
        )}
      </ul>
    )
  }

  if (chores === undefined || chores === []) {
    return null
  } 

  return (
    <div>
      <h3>Chores that need doing</h3>
      {rows()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chores: state.chores
  }
}

export default connect(mapStateToProps, null)(ChoreList)