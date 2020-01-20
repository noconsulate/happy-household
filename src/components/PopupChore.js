import React from 'react'
import { List, Popup, Button } from 'semantic-ui-react'

const PopupChore = ({ chore }) => {

  console.log('popupchore noise')
  

  const popupContent = () => {
    return (
      <>
        {chore.value}
        <Button>
          and a button
        </Button>
      </>
    )
  }

  return (
    <>
      <Popup
        basic
        on='click'
        content={popupContent}
        trigger={
          <List.Item>
            {chore.value}
          </List.Item>
        } />
    </>
  )
}

export default PopupChore