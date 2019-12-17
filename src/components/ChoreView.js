import React from 'react'

import ChoreList from './ChoreList'
import AddChore from './AddChore'

const ChoreView = props => {
  return (
    <div>
      <AddChore />
      <ChoreList />
    </div>
  )
}

export default ChoreView