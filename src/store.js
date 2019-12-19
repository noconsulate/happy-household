import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import choreReducer from './reducers/choreReducer'
import userReducer from './reducers/userReducer'

import test from './reducers/test'

const reducer = combineReducers({
  chores: choreReducer,
  user: userReducer,
  test: test
})

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store