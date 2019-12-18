import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'

import { createUser, boozer } from '../reducers/userReducer'

import firebase from '../firebase'

const Login = props => {
    const handleSubmitRegister = e => {
        e.preventDefault()
        console.log('register')
        const email = e.target[0].value
        const password = e.target[1].value
        const displayName = e.target[2].value
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(snap => {
            console.log(snap)
            const user = firebase.auth().currentUser
            user.updateProfile({
                displayName
            })
        }).catch(error => {
            console.log(error.message)
        })
        .catch(error => {
            console.log('firebase registration error', error.message)
        })
    }
    
    const handleSubmitLogin = async e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('firebase login error', error.message)
        })
    }

    const handleSubmitRegister1 = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const displayName = e.target[2].value
        createUser(email, password, displayName)
        //boozer()
    }
    return (
        <div>
            <Header as="h3">
                Register
            </Header>
            <Form onSubmit={handleSubmitRegister1}>
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
            <Header as="h3">
                Register
            </Header>
            <Form onSubmit={handleSubmitRegister}>
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
            <Form onSubmit={handleSubmitLogin}>
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
    createUser, boozer
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)