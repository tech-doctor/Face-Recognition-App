import React from 'react';
import '../../Styles/Navigation.css'


const Navigation = ({onRouteChange, isLoggedIn}) => {
  return (
      <div>
      {isLoggedIn ?
      <nav>
         <p onClick = {()=>onRouteChange ('logout')} className = "logout_link">Log Out</p>   
      </nav>
      : 
      <nav>
        <p onClick = {()=>onRouteChange ('login')}  className = "login_link ">Log in</p>
        <p onClick = {()=>onRouteChange ('signup')} className = " signup_link ">Sign Up</p>
      </nav>
      }     
    </div>
  ) 
}


export default Navigation
