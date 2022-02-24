import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import storage from 'local-storage-fallback';
import { GlobalContext} from './context/GlobalState';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import classes from './App.module.scss';
import  './App.scss';


// const getInitialTheme = () => {
//   //check if there is a theme in local storage
//   const savedTheme = storage.getItem('theme');
//   return savedTheme ? JSON.parse(savedTheme) : {lightMode: true};
// }

const App = () => {
   const {lightMode} = useContext(GlobalContext);
   const state = useContext(GlobalContext);
   
   
   
   useEffect(() => {
    storage.setItem('theme', JSON.stringify(state));
   },[lightMode]);

  const containerClass = lightMode ? classes.container : classes.dark;
  return (
      <div className = {`${containerClass} app`}>
      <Router>
        <Switch>
          <Route exact path='/' component = {Home}/> 
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/signup' component={SignUp}/>  
        </Switch>
      </Router>
      </div>
  );
}

export default App;
