import React from 'react'
import './Login.css'

const LogIn = ({onRouteChange}) => {
  return (
    <div>
      <article className = 'br3  b--10 mv4 w-100 w-70-m w-70-l mw6 shadow-2-ns  center'>
        <main className = " pa4 black-80">
          <div className = 'measure'>
            <legend className = "center  ma4 f3">Log In</legend> 
            <div className ="  ma4">
              <label className = 'center'>Email</label>
              <input className = 'w5' required type ="email" name = "email"/>
            </div>
            <div className ="ma4">
              <label className = 'center'>Password</label>
              <input className = "w5" required type ="password" name = "password"/>
            </div>
             <div className = "">
              <input 
              onClick = {()=>onRouteChange ('home')}
              className ="center bg-green white bn br3 pa2 w-30" 
              type ="submit"
                value = "Log In"
              />
              </div>
              <div className = " 1h-copy mt3">
              <small 
              onClick ={()=>onRouteChange('signup')}
               className = "center f6 dim link black  pointer br3 ">Sign up</small>
              </div>
          </div>
        </main>
      </article>
    </div>
  ) 
}
export default LogIn
