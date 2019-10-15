import { fireDb } from '../firebase'

export const initChores = () => {
  return async dispatch => {
    console.log('initChores')
    let arr = []
    const snapshot = await fireDb.ref('chores/').once('value')
    snapshot.forEach(child => {
      const item = {
        chore: child.val().chore,
        key: child.key
      }
      arr.push(item)
    })
    dispatch({
      type: 'INIT_CHORES',
      data: arr,
    })
  }
}

export const createChore = (chore, key) => {
  return async dispatch => {
    console.log('createChore action')
    const item = {
      chore: chore,
      key: key
    }
    dispatch ({
      type: 'NEW_CHORE',
      data: item
    })
  }
}

const choreReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CHORES':
      console.log(action.data)
      return action.data
    case 'NEW_CHORE':
      console.log(action.data)
      return state.concat(action.data)
    default:
      console.log('default')
      return state
  }
}

export default choreReducer