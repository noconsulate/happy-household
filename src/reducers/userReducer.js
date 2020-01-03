import firebase from '../firebase'

export const initUser = (user) => {
  return  dispatch => {
    dispatch({
      type: 'USER',
      data: user
    })
  }
}

export const signOutUser = () => {
  return dispatch => {
    dispatch({
      type: 'SIGNOUT'
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
    case 'SIGNOUT':
      return {
        email: null,
        displayName: null,
        family: null,
        uid:  null,
      }
    default:  
      return state
  }
}

export default userReducer