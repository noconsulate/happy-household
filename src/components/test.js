import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-router-dom'

const Test = props => {
  const handleClick = e => {
    console.log('click')
  }

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  )
}

export default Test