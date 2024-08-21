import React, { useState } from 'react';
import "./Login.css";
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='Login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ?
            <input type='text ' placeholder='Your name' /> : <> </>}

          <input type='email' placeholder='Your email' />
          <input type='password' placeholder='Your password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Remeber Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New to Netflix?
              <span onClick={() => setSignState("Sign Up")}>
                {signState}</span></p>
            :
            <p>Already have account?
              <span onClick={() => setSignState("Sign In")}>
                {signState}</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login