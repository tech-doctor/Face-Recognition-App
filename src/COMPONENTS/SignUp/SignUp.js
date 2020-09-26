import React from 'react'

const SignUp = ({onRouteChange}) => {
  return (
    <div>
      <article className = 'br3  b--10 mv4 w-100 w-50-m w-25-1 mw6 shadow-2 center'>
        <main className = " pa4 black-80">
          <form className = 'measure'>
            <legend className = "center  ma4 f3">Sign Up</legend> 
            <div className ="  ma4">
              <label className = 'center'>Name</label>
              <input  required type ="text" name = "name"/>
            </div>
            <div className ="  ma4">
              <label className = 'center'>Email</label>
              <input  required type ="email" name = "email"/>
            </div>
            <div className ="  ma4">
              <label className = 'center'>Password</label>
              <input  required type ="password" name = "password"/>
            </div>
            <div className = "">
              <input 
              onClick = {()=>onRouteChange ('home')}
              className ="center bg-green white bn br3 pa2 w-30" 
              type ="submit"
                  value = "Sign Up"
              />
              </div>
          </form>
        </main>
      </article>
    </div>
  ) 
}
export default SignUp
