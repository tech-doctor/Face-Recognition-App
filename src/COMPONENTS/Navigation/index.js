import React from 'react';
import '../../Styles/Navigation.scss'


const Navigation = ({isLoggedIn}) => {
  return (
      <div>
      {isLoggedIn?
      <nav>
         <p className = "logout_link">Log Out</p>   
      </nav>
      : 
      <nav>
        <p className = "login_link ">Log in</p>
        <p className = " signup_link ">Sign Up</p>
      </nav>
      }     
    </div>
  ) 
}


export default Navigation
