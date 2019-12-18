import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import choreReducer from './reducers/choreReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  chores: choreReducer,
  user: userReducer
})

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store