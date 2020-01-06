import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        {' '}
        {/* Materialize CSS to contain content in a central column*/}
        <Link to='/' className='brand-logo'>
          Project Management
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
