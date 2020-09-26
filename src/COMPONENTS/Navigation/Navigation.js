import React from 'react'
import './Navigation.css'
 const Navigation = ({onRouteChange, isLoggedIn}) => {
    return (
        <div>
        {isLoggedIn ?
         <nav style= {{display: 'flex', justifyContent : 'flex-end'}}>
            <p onClick = {()=>onRouteChange ('logout')} className = " f5 link dim white pointer log-out">Log Out</p>
        </nav> : 
        <nav style= {{display: 'flex', justifyContent : 'flex-end'}}>
            <p  onClick = {()=>onRouteChange ('login')}  className = " f5 link dim white  pointer nav login-style">Log in</p>
            <p onClick = {()=>onRouteChange ('signup')} className = " f5 link dim white pointer nav ">Sign Up</p>
        </nav>
        }
        
           
    </div>
    ) 
 }
export default Navigation
