import React from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className='d-flex justify-content-center header'>
            <ul>
                <Link to='/home' className='ml-md-2'><span>Home</span></Link>
                <Link to ='/premium' className='ml-md-2 ml-1'><span>Premimum</span></Link>
                <Link to ='/contacts' className='ml-md-2 ml-1'><span>Contacts</span></Link>
                <Link to ='/login' className='ml-md-2 ml-1'><span>Sign In</span></Link>
            </ul>
        </div>
    );
};

export default Header;