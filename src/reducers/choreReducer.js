import { fireDb } from '../firebase'

export const initChores = (family) => {
  return async dispatch => {
    let arr = []
    const snapshot = await fireDb.ref('chores/' + family).once('value')
      .catch(error => console.log(error.message))
      
    snapshot.forEach(child => {
      const item = {
        value: child.val().value,
        date: child.val().date,
        key: child.key,
        edit: false,
        image: child.val().image
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
      value: chore.value,
      date: chore.date,
      key: key,
      edit: false,
      image: chore.image
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
      choreToChange = state.find(chore => chore.edit)
      if (choreToChange) {
        key = choreToChange.key
        changedChore = {
          ...choreToChange,
          edit: !choreToChange.edit
        }
        newState = state.map(chore => 
          chore.key !== key ? chore : changedChore
        )
      } else {
        newState = state
      }
      
      key = action.data.key
      choreToChange = state.find(chore => chore.key === key)
      changedChore = {
        ...choreToChange,
        edit: !choreToChange.edit
      }
      return newState.map(chore =>
        chore.key !== key ? chore : changedChore
      )
    case 'EDIT_CHORE':
      key = action.data.key
      choreToChange = state.find(chore => chore.key === key)
      changedChore = {
        value: action.data.value,
        edit: false,
        key: key
      }
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