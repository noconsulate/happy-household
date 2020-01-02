import React from 'react'
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'

import { fireDb } from '../firebase'
import { initUser } from '../reducers/userReducer'
import { addUser } from '../reducers/usersReducer'
import firebase from '../firebase'

const Login = props => {
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const displayName = e.target.name.value
        const family = e.target.family.value
        const user = {email, displayName, family}
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(snap => {
            const fireUser = firebase.auth().currentUser
            fireUser.updateProfile({
                displayName
            }).catch(error => console.log(error))
            const uid = fireUser.uid
            props.initUser(user)
            fireDb.ref('users/' + uid).set(user)
            .then(res => {
                props.addUser(user)
            })
            .catch(error => console.log(error.message)
            )
        }).catch(error => console.log(error.message))
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(snap => {
            const uid = firebase.auth().currentUser.uid
            console.log(uid)
            
            fireDb.ref('users/' + uid).once('value').then(snap => {
                console.log(snap.val())
                const user = snap.val()
                props.initUser(user)
            })
            
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
                    <Form.Input label='enter email address' name='email' />
                    <Form.Input label='enter password' type='password'
                    name='password' />
                    <Form.Input label='enter your name' name='name' />
                    <Form.Input label='enter your family' name='family' />
                    <Form.Button type='submit'>submit</Form.Button>
                </Form.Field>
            </Form>
            <Header as="h3">
                Login
            </Header>
            <Form onSubmit={handleLogin}>
                <Form.Field>
                    <Form.Input label='enter email address' name='email'/>
                    <Form.Input label='enter password' type='password'
                    name='password' />
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
    initUser,
    addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)