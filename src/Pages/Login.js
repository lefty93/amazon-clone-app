import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
          alt=""
          className="login__logo" />
      </Link>
    </div>
  )
}

export default Login