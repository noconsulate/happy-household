import React from 'react'
import { Menu } from 'semantic-ui-react'

const MyMenu = props => {
    const [activeItem, setActiveItem] = React.useState('chores')

    const handleItemClick = (e, { name })  => {
        setActiveItem(name)
    }

    return (
        <Menu>
            <Menu.Item 
            name='chores'
            active={activeItem === 'chores'}
            onClick={handleItemClick}
            >
                chores
            </Menu.Item>
            <Menu.Item position='right'
            name='signin'
            active={activeItem === 'signin'}
            onClick={handleItemClick}
            >
                signin
            </Menu.Item>
        </Menu>
    )
}

export default MyMenu
