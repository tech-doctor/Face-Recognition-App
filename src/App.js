import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalContext} from './context/GlobalState';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import classes from './App.module.scss';
import  './App.scss';




const App = () => {
   const {lightMode} = useContext(GlobalContext);

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
