import React from 'react'

export default function Register() {
  return (
    <div id='center'>


    <form id="register">
    <h1>Register</h1>
                <div className="container">
                    <div className="brand-logo" />
                   
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                        type="email"
                        id="registerEmail"
                        name="email"
                        placeholder="maria@email.com"
                    />
                    {/* <label htmlFor="pass">Password:</label> */}
                    <input type="password" name="password" id="register-password"  placeholder=" Password"/>
                    {/* <label htmlFor="con-pass">Confirm Password:</label> */}
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Retype Your Password" />
                    <button className="btn submit" id='subbmitBtn' type="submit"  >Register</button>
                    <p className="field">
                      
                    </p>
                </div>
            </form>
    </div>
  )
}
