import React, { useState } from 'react'
import { connect } from 'react-redux'
import {fireDb} from '../firebase'
import { setEdit, editChore, deleteChore } from '../reducers/choreReducer'

const ChoreList = ({ chores, setEdit, editChore, deleteChore }) => {
  const [editMode, setEditMode] = useState(false)

  const handleEditClick = (event, key) => {
    event.preventDefault()
    if (editMode === false) {
      setEdit(key)
      setEditMode(true)
    }
  }

  const handleEdit = (event, key) => {
    event.preventDefault()
    const value = event.target[0].value
    fireDb.ref('chores/' + key).update({
      chore: value
    }).catch(error => console.log(error.message))
    editChore(value, key)
    setEditMode(false)
  }

  const handleDelete = (chore) => {
    fireDb.ref('chores/' + chore.key).remove()
      .catch(error => console.log(error.message))
    deleteChore(chore.key)
  }

  const editForm = (chore) => {

    return (
      <div>
        <form onSubmit={(e) => handleEdit(e, chore.key)}>
          <input type="text" defaultValue={chore.chore}
            name="chore" autoFocus />
          <button type="submit">edit</button>
          <button onClick={() => handleDelete(chore)}>delete</button>
        </form>
      </div>
    )
  }

  const rows = () => {
    return (
      <ul>
        {chores.map(chore =>
          chore.edit === true ?
            <li key={chore.key}>{editForm(chore)}</li> :
            <li key={chore.key}
              onClick={(event) => handleEditClick(event, chore.key)}>{chore.chore}</li>
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

const mapDispatchToProps = {
  setEdit, editChore, deleteChore
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoreList)