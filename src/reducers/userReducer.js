import firebase from '../firebase'

export const initUser = (user) => {
  return  dispatch => {
    dispatch({
      type: 'USER',
      data: user
    })
  }
}

const defaultState = {
  email: null,
  displayName: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER':
      return {
        email: action.data.email,
        displayName: action.data.displayName,
        family: action.data.family,
        uid: action.data.uid,
      }
    default:  
      return state
  }
}

export default userReducer