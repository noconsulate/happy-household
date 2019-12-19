import firebase from '../firebase'

export const createUser = (email, displayName) => {
  console.log('createuserAction', email, displayName)
  return  dispatch => {
    console.log('createuseraction post return dispatch')
    dispatch({
      type: 'USER',
      data: { email, displayName }
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
      console.log('choreReducer create_user', action.data)
      return {
        email: action.data.email,
        displayName: action.data.displayName,
      }
    default:  
      console.log('user reducer default', action)
      return state
  }
}

export default userReducer