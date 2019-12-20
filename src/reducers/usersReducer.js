export const addUser = user => {
  return dispatchEvent({
    type: 'ADD_USER',
    data: user
  })
}

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state. concat(action.data)
  }
}

export default usersReducer