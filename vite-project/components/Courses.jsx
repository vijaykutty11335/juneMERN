import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Courses = ({ ddstate }) => {
  return (
    <div>
      <Navbar />
      
      {ddstate && (
        <div className='dropdown'>
          <li><Link to='/it' className='ddlinks'>IT</Link></li>
          <li><Link to='/cse' className='ddlinks'>CSE</Link></li>
          <li><Link to='/cce' className='ddlinks'>CCE</Link></li>
          <li><Link to='/aids' className='ddlinks'>AI-DS</Link></li>
          <li><Link to='/aiml' className='ddlinks'>AI-ML</Link></li>
        </div>
      )}
    </div>
  );
};

export default Courses;
