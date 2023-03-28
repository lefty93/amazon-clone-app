
import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth()
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      // logged in, redirect to homepage
      navigate('/')
    })
      .catch((e) => alert(e.message));
  }

  const register = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      // register, and redirect to homepage
      navigate('/')
    })
      .catch((e) => alert(e.message));

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
          <input type="text" onChange={event => setEmail(event.target.value)} value={email} />
          <h5>Password</h5>
          <input type="password" onChange={event => setPassword(event.target.value)} value={password} />
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