import React from 'react'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthConext';
import * as authService from "../services/authService";

export default function Register() {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirm-password');
      
      if (password !== confirmPassword) {
          return;
      }

      authService.register(email, password)
          .then(authData => {
              userLogin(authData);
              navigate('/');
          });
  }

  return (
    <div id='center'>


    <form id="register" onSubmit={onSubmit}>
    <h1>Register</h1>
                <div className="container">
                    <div className="brand-logo" />
                   
                  
                    <input
                        type="email"
                        id="registerEmail"
                        name="email"
                        placeholder="maria@email.com"
                    />
                  
                    <input type="password" name="password" id="register-password"  placeholder=" Password"/>
                    
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Retype Your Password" />
                    <button className="btn submit" id='subbmitBtn' type="submit"  >Register</button>
                    <p className="field">
                      
                    </p>
                </div>
            </form>
    </div>
  )
}
