import { fireDb } from '../firebase'

export const initChores = () => {
  return async dispatch => {
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
      return action.data
    case 'NEW_CHORE':
      return state.concat(action.data)
    default:
      console.log('default')
      return state
  }
}

export default choreReducer