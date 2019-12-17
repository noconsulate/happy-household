import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const MyMenu = props => {
    const [activeItem, setActiveItem] = React.useState('chores')

    const handleItemClick = (e, { name })  => {
        setActiveItem(name)
    }

    return (
        <Menu>
            <Menu.Item 
            name='chores' as={Link} to={'/chores'}
            active={activeItem === 'chores'}
            onClick={handleItemClick}
            >
                chores
            </Menu.Item>
            <Menu.Item position='right' as={Link} to={'/signin'}
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
