import React from 'react'
import {connect} from 'react-redux'
import { Button, Input, Image } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import firebase from 'firebase'

import {fireDb} from '../firebase'
import {createChore} from '../reducers/choreReducer'

const AddChore = ({ chores, createChore, user }) => {
  const [date, setDate] = React.useState('')
  const [file, setFile] = React.useState(null)

  const handleChange = (event, {name, value} ) => {
    if (name === 'date') {
      setDate(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const family = user.family
    const value = event.target[0].value
    let image
    file ? image = true : image = false
    const chore = { value, date, image}
    fireDb.ref('chores/' + family).push(
      chore
    ).then(res => {
      createChore(chore, res.key)
      if (file) {
        const storage = firebase.storage()
        const storageRef = storage.ref()
        storageRef.child(family + '/' + res.key).put(file)
      }
    })
    .catch(exception => console.log(exception))

    
  }

  const handleImage = event => {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <Input placeholder='Add a new chore...'></Input>
        <DateInput 
          name='date'
          placeholder='To be done by'
          value={date}
          iconPosition='right'
          closable
          dateFormat='MM-DD-YYYY'
          onChange={handleChange}
        />
        <Input type="file" name="file" onChange={handleImage} />
        <Button type='submit'  content='submit' primary />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    use: state.user,
  }
}

export default connect(mapStateToProps, {createChore})(AddChore)