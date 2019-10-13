import fire, {fireDb} from '../firebase'

const choresRef = fireDb.ref('chores')



/**
  const handleSubmit = event => {
    event.preventDefault()
    fireDb.ref('chorez/').push({
      chore
    }).then(response => console.log(response))
    .catch(exception => console.log(exception))
    setChore('Enter a new chore')
  }
 */