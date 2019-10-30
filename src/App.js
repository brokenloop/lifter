import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from './firebase-init.js';
import Navbar from './components/Navbar.js';
import Login from './pages/Login.js';
import Home from './pages/Home';
import './App.css';

function App() {
  const [userData, setUserData] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserData(user);
    } else {
      setUserData(false);
    }
  });
  
  return (
    <div className='App'>
      <Navbar isLoggedIn={userData != false}/>
      <div className='App-header'>
        <Switch>
          <Route 
            exact path='/' 
            render={() => <Home userData={userData} setUserData={setUserData}/>}
          />
          <Route 
            exact path='/login' 
            render={() => <Login userData={userData} setUserData={setUserData}/>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
