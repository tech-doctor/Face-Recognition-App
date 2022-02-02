import React from 'react';


const Navigation = ({onRouteChange, isLoggedIn}) => {
  return (
      <div>
      {isLoggedIn ?
      <nav style= {{display: 'flex', justifyContent : 'flex-end'}}>
         <p onClick = {()=>onRouteChange ('logout')} className = "logout_link" backgroundColor = 'tomato'>Log Out</p>   
      </nav>
      : 
      <nav style= {{display: 'flex', justifyContent : 'flex-end'}}>
        <p onClick = {()=>onRouteChange ('login')}  className = "login_link ">Log in</p>
        <p onClick = {()=>onRouteChange ('signup')} className = " signup_link ">Sign Up</p>
      </nav>
      }     
    </div>
  ) 
}


export default Navigation
