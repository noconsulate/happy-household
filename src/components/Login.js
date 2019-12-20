import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'

import { initUser } from '../reducers/userReducer'
import firebase from '../firebase'
const Login = props => {
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const displayName = e.target[2].value
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(snap => {
            const user = firebase.auth().currentUser
            user.updateProfile({
                displayName
            }).catch(error => console.log(error))
            props.initUser(email, displayName)
        }).catch(error => console.log(error.message))
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            const displayName = user.user.displayName
            props.initUser(email, displayName)
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
    initUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)