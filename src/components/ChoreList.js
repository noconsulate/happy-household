import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, List, Header, Input, Image } from 'semantic-ui-react'
import moment from 'moment'

import firebase, {fireDb} from '../firebase'
import { setEdit, editChore, deleteChore } from '../reducers/choreReducer'

const ChoreList = ({ chores, setEdit, editChore, deleteChore, user }) => {
  const [editMode, setEditMode] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

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
    const family = user.family
    console.log(family)
    const value = event.target[0].value
    fireDb.ref('chores/' + family + '/' + key).update({
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

  const dateParser = dateString => {
    moment.relativeTimeThreshold('h', 1)
    const dateObj = moment(dateString, 'MM-DD-YYYY' )
    
    return (
      dateObj.fromNow()
    )
  }

  const getImage = key => {
    const storage = firebase.storage()
    const pathReference = storage.ref(user.family + '/' + key)
    pathReference.getDownloadURL().then(url => {
      setImageUrl(url)
    })
  }

  const editForm = (chore) => {
    return (
      <div>
        <form onSubmit={(e) => handleEdit(e, chore.key)}>
          <Input type="text" defaultValue={chore.value}
            name="chore" autoFocus />
          <Button type="submit" primary>edit</Button>
          <Button 
           onClick={() => handleDelete(chore)}>delete</Button>
          <Button
           onClick={() => handleCancel(chore.key)}>cancel</Button>
           <br />
           <Image onClick={getImage(chore.key)} src={imageUrl} />
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
              onClick={(event) => handleEditClick(event, chore.key)}>{chore.value} {dateParser(chore.date) }
            </List.Item>
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
    chores: state.chores,
    user: state.user
  }
}
const mapDispatchToProps = {
  setEdit, editChore, deleteChore
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoreList)