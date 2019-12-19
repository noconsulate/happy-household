import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, List, Header, Input } from 'semantic-ui-react'
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
    else {
      setEdit(key)
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

  const handleCancel = (key) => {
    setEdit(key)
    setEditMode(false)
  }

  const editForm = (chore) => {

    return (
      <div>
        <form onSubmit={(e) => handleEdit(e, chore.key)}>
          <Input type="text" defaultValue={chore.chore}
            name="chore" autoFocus />
          <Button type="submit" primary>edit</Button>
          <Button 
           onClick={() => handleDelete(chore)}>delete</Button>
          <Button
           onClick={() => handleCancel(chore.key)}>cancel</Button>
        </form>
      </div>
    )
  }

  const rows = () => {
    return (
      <List bulleted>
        {chores.map(chore =>
          chore.edit === true ?
            <List.Item key={chore.key}>{editForm(chore)}</List.Item> :
            <List.Item key={chore.key}
              onClick={(event) => handleEditClick(event, chore.key)}>{chore.chore}</List.Item>
        )}
      </List>
    )
  }

  if (chores === undefined || chores === []) {
    return null
  }

  return (
    <div>
      <span />
      <Header as='h3'>Chores that need doing</Header>
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