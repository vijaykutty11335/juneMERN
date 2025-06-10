import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setDdstate }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav>
      <li><Link to='/' className='navlink'>Home</Link></li>
      <li><Link to='/login' className='navlink'>Login</Link></li>
      <li
        onMouseEnter={() => {
          setDropdown(true);
          setDdstate(true);
        }}
        onMouseLeave={() => {
          setDropdown(false);
          setDdstate(false);
        }}
      >
        <Link to='/courses' className='navlink'>Courses</Link>
      </li>
    </nav>
  );
};

export default Navbar;
