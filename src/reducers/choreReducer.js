import fire, {fireDb} from '../firebase'

const choresRef = fireDb.ref('chores')

export const createChore = chore => {
  console.log('in reducer')
  return async dispatch => {
    const newChore = await fireDb.ref('chores').push({chore})
    console.log('in dispatch', newChore)
  }
}