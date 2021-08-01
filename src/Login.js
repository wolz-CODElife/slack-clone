import React from 'react'
import './Login.css'
import Button from '@material-ui/core'

const Login = () => {
    return (
        <div className="login" >
            <div className="login_container">
                <img src="" alt="" />
                <h1>Sign in to wolz-CODElife</h1>
                <p>wolz-codelife.slack.com</p>
                <Button>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
