import React from 'react';
import Login from './Login.js';
import firebase from '../firebase-init.js';

function Home(props) {

  // let result = <Login userData={props.userData} setUserData={props.setUserData}/>;
  // if (props.userData) {
  //   result = <h1>Logged in!</h1>
  // } 

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
