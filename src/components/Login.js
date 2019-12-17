import React from 'react'
import { Form, Header } from 'semantic-ui-react'

import fire from '../firebase'

fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user.email + 'is signed in')
      // ...
    } else {
      // User is signed out.
      console.log(user.email + 'is signed out')
    }
  });

const Login = props => {
    const handleSubmitRegister = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        fire.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('firebase registration error', error.message)
        })
    }
    
    const handleSubmitLogin = e => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        fire.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('firebase login error', error.message)
        })
    }
    return (
        <div>
            <Header as="h3">
                Register
            </Header>
            <Form onSubmit={handleSubmitRegister}>
                <Form.Field>
                    <Form.Input label='enter email address' />
                    <Form.Input label='enter password' type='password' />
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

export default Login