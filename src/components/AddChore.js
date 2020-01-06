import React from 'react'
import {connect} from 'react-redux'
import { Button, Input } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import moment from 'moment'

import {fireDb} from '../firebase'
import {createChore} from '../reducers/choreReducer'

const AddChore = ({ chores, createChore, user }) => {
  const [date, setDate] = React.useState('')

  const handleChange = (event, {name, value} ) => {
    if (name === 'date') {
      setDate(value)
    }
  }


  const handleSubmit = event => {
    event.preventDefault()

    console.log(date)
    const momentObj = moment(date, "MM-DD-YYYY")
    console.log(momentObj.format())
    

    const family = user.family
    const value = event.target[0].value
    const chore = { value, date }
    fireDb.ref('chores/' + family).push(
      chore
    ).then(res => {
      createChore(chore, res.key)
    })
    .catch(exception => console.log(exception))
  }
  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        autocomplete='off'
      >
        <Input placeholder='Add a new chore...'></Input>
        <DateInput 
          name='date'
          placeholder='To be done by'
          value={date}
          iconPosition='right'
          closable='true'
          dateFormat='MM-DD-YYYY'
          onChange={handleChange}
        />
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