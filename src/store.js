import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import choreReducer from './reducers/choreReducer'

const reducer = combineReducers({
  chores: choresReducers,
})

 const store = createStore(choreReducer, applyMiddleWare(thunk))

 export default store