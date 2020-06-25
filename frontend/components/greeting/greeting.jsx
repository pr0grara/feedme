import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className='login-signup'>
      <Link to='/login'>Login</Link>
      &nbsp;or&nbsp;
      <Link to='/signup'>Sign Up!</Link>
    </nav>
  );
  const personalGreeting = () => (
   <hgroup className='header-group'>
     <h2 className='header-name'>Hey, {currentUser.email}!</h2>
     <button className='header-button' onClick={logout}>Logout</button>
   </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;