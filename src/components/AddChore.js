import React, {useState} from 'react'
import {connect} from 'react-redux'
import fire, {fireDb} from '../firebase'

const AddChore = ({ chores }) => {
  const [chore, setChore] = useState('Enter a new chore')

  const handleSubmit = event => {
    event.preventDefault()
    fireDb.ref('chores/').push({
      chore
    }).then(response => console.log(response))
    .catch(exception => console.log(exception))
    setChore('Enter a new chore')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={chore} onChange={({ target }) => setChore(target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chores: state.chores,
  }
}

export default connect(mapStateToProps, null)(AddChore)