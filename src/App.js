import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import './App.css';


const App = () => {
  return (
    <div className='app'>
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
