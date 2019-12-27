import { fireDb } from '../firebase'

export const addUser = user => {
  return dispatch => {
    dispatch({
      type: 'ADD_USER',
      data: user
    })
  }
}

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat(action.data)
    default:
      return state
  }
}

export default usersReducer