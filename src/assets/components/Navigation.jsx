import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../home-agreement.png'; // აირჩიეთ სწორი ადგილმდებარეობა
import downloadIcon from '../download.png';
import aboutIcon from '../about.png';
import chatIcon from '../chat.png';
import './css/navigation.css';

function Navigation() {
  return (
    <section className='header'>
      <div id="header">
        <div className="menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <img src={homeIcon} alt="Home" className="icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <img src={downloadIcon} alt="Programs" className="icon" />
                Programs
              </NavLink>
            </li>
            <li>
              <a href="#">
                <img src={aboutIcon} alt="About" className="icon" />
                About
              </a>
            </li>
            <li>
              <a href="#">
                <img src={chatIcon} alt="Contact" className="icon" />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
