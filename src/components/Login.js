import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'

import { createUser } from '../reducers/userReducer'
import firebase from '../firebase'
const Login = props => {
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const displayName = e.target[2].value
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(snap => {
            console.log(snap)
            const user = firebase.auth().currentUser
            user.updateProfile({
                displayName
            }).catch(error => console.log(error))
            props.createUser(email, displayName)
        }).catch(error => console.log(error.message))
    }
    
    const handleSubmitLogin = async e => {
        e.preventDefault()
        const email = e.email.value
        const password = e.target[1].value
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('firebase login error', error.message)
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user)
            const displayName = user.user.displayName
            props.createUser(email, displayName)
        })
        .catch(error => {
            console.log('firebase login error', error.message)
        })
    }

    return (
        <div>
            <Header as="h3">
                Login
            </Header>
            <Header as="h3">
                Register
            </Header>
            <Form onSubmit={(e) => handleRegister(e)}>
                <Form.Field>
                    <Form.Input label='enter email address' />
                    <Form.Input label='enter password' type='password' />
                    <Form.Input label='enter your Name' />
                    <Form.Button type='submit'>submit</Form.Button>
                </Form.Field>
            </Form>
            <Header as="h3">
                Login
            </Header>
            <Form onSubmit={handleLogin}>
                <Form.Field>
                    <Form.Input label='enter email address' />
                    <Form.Input label='enter password' type='password' />
                    <Form.Button type='submit'>submit</Form.Button>
                </Form.Field>
            </Form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)