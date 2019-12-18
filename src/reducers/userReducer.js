import firebase from '../firebase'

export const createUser = (email, password, displayName) => {
  console.log('createuserAction', email, password, displayName)
  return async dispatch => {
    console.log('poopoo')
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {console.log(error.message)})
    console.log('lala')
    const user = await firebase.auth().currentUser
    .catch(error => console.log(error.message))
    user.updateProfile({ displayName })
    dispatch({
      type: 'CREATE_USER',
      data: { email, password, displayName }
    })
  }
}

export const boozer = () => {
  console.log('crooze!')
  return dispatch => {
    console.log('booze!!')
    dispatch({
      type: 'dee',
      data: 'greeb'
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
    case 'dee':
      console.log(action.data)
    default:  
      console.log('user reducer default', action)
      return state
  }
}

export default userReducer