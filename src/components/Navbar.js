import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase-init.js';

function Navbar(props) {
    const signOut = () => {
        firebase.auth().signOut();
    }
    let signInLink = <Link to={{
                        pathname: '/login',
                        props: props.isLoggedIn
                    }}>Log In</Link>;
    let accountLink = props.isLoggedIn ? 
                    <Link onClick={() => signOut()} to={'/'}>Log Out</Link> 
                    : signInLink;
    return (
        <div className="navbar">
            <ul>
                <li>{accountLink}</li>
                <li><Link to={'/'}>Calculator</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
