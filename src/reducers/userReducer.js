import firebase from '../firebase'

export const createUser = (email, password, displayName) => {
  debugger
  console.log('createuserAction', email, password, displayName)
  return  dispatch => {
    console.log('createuseraction post return dispatch')
    dispatch({
      type: 'CREATE_USER',
      data: { email, password, displayName }
    })
  }
}

const defaultState = {
  email: null,
  password: null,
  displayName: null,
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('choreReducer create_user', action.data)
      return {
        email: action.data.email,
        password: action.data.password,
        displayName: action.data.displayName,
      }
    default:  
      console.log('user reducer default', action)
      return state
  }
}

export default userReducer