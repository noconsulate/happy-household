import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { signOutUser } from '../reducers/userReducer'

const MyMenu = props => {
    var currentPath = props.location.pathname
    const [activeItem, setActiveItem] = React.useState(currentPath)

    const handleItemClick = (e, { name })  => {
        setActiveItem(name)
        console.log(props.user)
        
    }

    const handleItemClickLogout = (e, { name })  => {
        setActiveItem(name)
        console.log(props.user)
        
        props.signOutUser()
    }


    return (
        <Menu>
            <Menu.Item 
            name='/chores' as={Link} to={'/chores'}
            active={activeItem === '/chores'}
            onClick={handleItemClick}
            >
                chores
            </Menu.Item>
            <Menu.Item position='right' as={Link} to={'/signin'}
            name='/signin'
            active={activeItem === '/signin'}
            onClick={props.user ? handleItemClickLogout : handleItemClick}
            >
                {props.user.email === null ? 'signin' : 'logout'}
            </Menu.Item>
        </Menu>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMenu)
