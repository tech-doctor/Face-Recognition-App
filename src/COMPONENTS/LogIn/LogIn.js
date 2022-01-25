import React from 'react'
import '../../Styles/Login.css'

const LogIn = ({onRouteChange}) => {
  return (
    <div>
      <article className = 'login_article'>
        <main className = " main">
          <form className = 'form_segment'>
            <legend className = "form_title">Log In</legend> 
            <div className = "email_div">
              <label>Email</label>
              <input required type ="email" name = "email"/>
            </div>
            <div className ="password_div">
              <label>Password</label>
              <input required type ="password" name = "password"/>
            </div>
             <div className = "submit_div">
              <input 
              onClick = {()=>onRouteChange ('home')}
              className ="submit_button" 
              type ="submit"
              value = "Log In"
              />
              </div>
              <div className = "redirect_to_signup">
              <small 
              onClick ={()=>onRouteChange('signup')}>Sign up</small>
              </div>
          </form>
        </main>
      </article>
    </div>
  ) 
}
export default LogIn
