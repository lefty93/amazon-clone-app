
import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = event => {
    event.preventDefault();
  }

  const register = event => {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
          alt=""
          className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton" onClick={login}>Sign in</button>
        </form>

        <p>By continuing, you agree to Amazon's
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=508088"> Conditions of Use </a>
          and
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=468496"> Privacy Notice</a>
          .
        </p>


        <span>New to Amazon?</span>
        <button className="login__registerButton" onClick={register}>Create your Amazon account</button>

      </div>
    </div>
  )
}

export default Login