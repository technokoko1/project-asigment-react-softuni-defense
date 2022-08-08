import React from 'react'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthConext';
import * as authService from "../services/authService";
export default function Login() {
  const { userLogin } = useContext(AuthContext);
  console.log(userLogin)
  const navigate = useNavigate();

  const onSubmit = (e) => {
      e.preventDefault();

      const {
          email,
          password,
      } = Object.fromEntries(new FormData(e.target));

      authService.login(email, password)
          .then(authData => {
              userLogin(authData);
              navigate('/');
          })
          .catch(() => {
              navigate('/404');
          });
  };
  return (
    <div id='center'>


      <form id="login" onSubmit={onSubmit}>
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
