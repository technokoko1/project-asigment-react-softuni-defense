import React from 'react'

export default function Login() {
  return (
    <div id='center'>


      <form id="login">
       <div id='logMail'> 
        <h1>Login</h1>
        {/* <label id='login2' htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="loginEmail"
          name="email"
          placeholder="Sokka@gmail.com"
        />
        </div>
        <div id='logPass'>
        {/* <label htmlFor="login-pass">Password:</label> */}
        <input type="password" id="login-password" name="password"  placeholder="Password"/>
        <div id='subBtn'>
        <button type="submit" id="subbmitBtn" className="btn submit" defaultValue="Login" >Login</button>
        </div>
        </div>
      </form>
    </div>
  )
}
