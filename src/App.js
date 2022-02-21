import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalProvider} from './context/GlobalState';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import  './App.scss';




const App = () => {
  return (
    <GlobalProvider>
      <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component = {Home}/> 
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/signup' component={SignUp}/>  
        </Switch>
      </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
