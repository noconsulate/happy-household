import { fireDb } from '../firebase'

export const initChores = () => {
  return async dispatch => {
    let arr = []
    const snapshot = await fireDb.ref('chores/').once('value')
      .catch(error => console.log(error.message))
    snapshot.forEach(child => {
      const item = {
        chore: child.val().chore,
        key: child.key,
        edit: false
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
    dispatch({
      type: 'NEW_CHORE',
      data: item
    })
  }
}

export const setEdit = (key) => {
  return async dispatch => {
    dispatch({
      type: 'SET_EDIT',
      data: { key }
    })
  }
}

export const editChore = (value, key) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_CHORE',
      data: {
        key, value
      }
    })
  }
}

export const deleteChore = (key) => {
  return dispatch => {
    dispatch({
      type: 'DELETE_CHORE',
      data: { key }
    })
  }
}

const choreReducer = (state = [], action) => {
  let key, choreToChange, changedChore, index, newState
  switch (action.type) {
    case 'INIT_CHORES':
      return action.data
    case 'NEW_CHORE':
      return state.concat(action.data)
    case 'SET_EDIT':
      key = action.data.key
      choreToChange = state.find(chore => chore.key === key)
     
      changedChore = {
        ...choreToChange,
        edit: !choreToChange.edit
      }
      return state.map(chore =>
        chore.key !== key ? chore : changedChore
      )
    case 'EDIT_CHORE':
      key = action.data.key
      choreToChange = state.find(chore => chore.key === key)
      changedChore = {
        chore: action.data.value,
        edit: false,
        key: key
      }
      console.log(changedChore)
      return state.map(chore =>
        chore.key !== key ? chore : changedChore
      )
    case 'DELETE_CHORE':
      key = action.data.key
      index = state.map((e) => e.key).indexOf(key)
      return state.slice(0, index).concat(state.slice(index + 1))

    default:
      return state
  }
}

export default choreReducer