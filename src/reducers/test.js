export const increment = () => {
  console.log('pre dispatch')
  /*return dispatch => {
    console.log('post dispatch', param)
    dispatch({
      type: 'INCREMENT',
      data: param
    })
  }*/
  return dispatch => {
    dispatch({
      type: 'NONE',
      data: null
    })
  }
}

const testReducer = (state = [], action) => {
  console.log('test reducer pre switch', action)
  switch (action.type) {
    
    case 'INCREMENT':
      console.log('test reducer INCREMENT' )
      return state
    default:
      console.log('test reducer default')
      return state
  }
}

export default testReducer