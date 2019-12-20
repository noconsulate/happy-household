import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import choreReducer from './reducers/choreReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  chores: choreReducer,
  user: userReducer,
  users: usersReducer
})

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store