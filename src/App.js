import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import './App.css';


const App = () => {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home}/> 
          <Route exact path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>  
        </Switch>
    </Router>
  );
}

export default App;
