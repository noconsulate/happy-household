import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Input } from 'semantic-ui-react'
import {fireDb} from '../firebase'
import {createChore} from '../reducers/choreReducer'

const AddChore = ({ chores, createChore }) => {
  const [chore, setChore] = useState('Enter a new chore')

  const handleSubmit = event => {
    event.preventDefault()
    fireDb.ref('chores/').push({
      chore
    }).then(res => {
      createChore(chore, res.key)
    })
    .catch(exception => console.log(exception))
    setChore('Enter a new chore')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={chore} 
        onChange={({ target }) => setChore(target.value)} />

        <Button content='submit' primary />
      </form>
    </div>
  )
}

export default connect(null, {createChore})(AddChore)