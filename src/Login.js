import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            }))
            .catch(error => console.log(error.message))
    }
    return (
        <div className="login" >
            <div className="login_container">
                <img src="https://a.slack-edge.com/80588/img/slack_logo_240_vogue.png" alt="" />
                <h1>Sign in to wolz-CODElife</h1>
                <p>wolz-codelife.slack.com</p>
                <Button onClick={signIn} >Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
