import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import choreReducer from './reducers/choreReducer'

const reducer = combineReducers({
  chores: choreReducer,
})

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store