import React from 'react'
import {connect} from 'react-redux'
import { Button, Input } from 'semantic-ui-react'
import {fireDb} from '../firebase'
import {createChore} from '../reducers/choreReducer'

const AddChore = ({ chores, createChore, user }) => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log(user)
    
    const family = user.family
    const value = event.target[0].value
    fireDb.ref('chores/' + family).push({
      value
    }).then(res => {
      createChore(value, res.key)
    })
    .catch(exception => console.log(exception))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Add a new chore...'></Input>
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