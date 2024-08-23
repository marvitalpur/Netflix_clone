import React, { useState } from 'react';
import "./Login.css";
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';


const Login = () => {
  
  const [signState, setSignState] = useState("Sign In")
  const [email , setEmail]= useState("");
  const [name, setName]= useState("");
  const [password, setPassword]= useState("");

  const user_auth = async (event)=>{
    event.preventDefualt();
    if(signState === "Sign In "){
      await login(email, password)
    }else{
      await signup(name, email, password);
    }
  }

  return (
    <div className='Login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ?
            <input type='text ' placeholder='Your name' value={name} 
            onChange={(e)=>setName(e.target.value)}/> : <> </>}
          <input type='email' placeholder='Your email' value={email}
          onChange={(e)=>setEmail(e.target.value)} />
          <input type='password' placeholder='Your password' 
          value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type='submit' onClick={user_auth}>{signState}</button>
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