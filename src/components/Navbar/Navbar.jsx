import React from 'react';
import "./navbar.css";
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import dropdown from '../../assets/caret_icon.svg';


const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-left">
        <img src={logo} alt='' className="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Brows by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt='search icon ' className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt='bell icon' className='icons' />
        <div className='navbar-profile'>
          <img src={profile} alt=' profile ' className='profile' />
          <img src={dropdown} alt='drop down icon'  />
       <div className='dropdown'>
        <p>Sign out of Netflix</p>

       </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar