import React from 'react';
import { NavLink } from 'react-router-dom';
// Changed Link to NavLink because we get access to the active link when a certain link is active

const SignedOutLink = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/signup'>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to='/signin'>Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLink;
