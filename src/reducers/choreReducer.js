import {fireDb} from '../firebase'

export const initChores = () => {
  return async dispatch => {
    console.log('initChores')
    let arr = []
    const snapshot = await fireDb.ref('chores/').once('value')
    snapshot.forEach(child => {
      let item = child.val()
      item.key = child.key
      arr.push(item)
    })
    dispatch({
      type: 'INIT_CHORES',
      data: arr,
    })
  }
}

export const createChore = chore => {
  return async dispatch => {
    const response = await fireDb.ref('chores/').push({chore})
    const newChore = {
      chore: chore,
      key: response.key
    }
    dispatch({
      type: 'NEW_CHORE',
      data: newChore
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
        return state
   }
 }

 export default choreReducer