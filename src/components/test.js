import React from 'react'
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import increment from '../reducers/test'


const Test = props => {
  const handleClick = e => {
    console.log('click')
    increment()
  }

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  )
}

const mapDispatchToProps = {
  increment
}

export default connect(null, mapDispatchToProps)(Test)