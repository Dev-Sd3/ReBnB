import React from 'react'
import logo from '../assets/Airbnb_Logo.png'
import { Link } from 'react-router-dom'
import '../index.css'

/*
This is the Header Component that stays on top of the page
in all the different views on the react app.

The different elements present in the ul as well as the airbnb logo help 
link the different react router routes on click.
*/

const Header = () => {

  const navigatorStyle = {
    display: 'flex',
    listStyle: 'none',
    fontSize: '1.1em',
    width: '100%',
  };

  const navItemStyle = {
    marginRight: '20px',
    paddingRight: '20px',
    borderRight: '1px solid black',
  };

  const ImageStyle =
  {
    padding: '20px',
    width: '160px',
    height: '50px',
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} style={ImageStyle} />
      </Link>
      <div className='RoundedDivStyle'>
        <ul style={navigatorStyle}>
          <li style={navItemStyle}>
            <Link to="/">
              View listings
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/About-us">
              About us
            </Link>
          </li>
          <Link to="/ContactUs">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;