import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../utilities/css/util.css';
import { useAuth } from '../../context/authContext';
import {toast} from 'react-toastify';

const NavBar = () => {

  const {auth:{isAuthorized},setAuth}=useAuth();

  const handleLogout=()=>{
    localStorage.removeItem('token')
    setAuth({
      token: '',
      isAuthenticated: false,
    });
    toast.success('You have logged out successfully!!!');
  }


  return (
    <nav className="navigation-hz">
      <div className="left-nav">
        <Link to="/" className="nav-logo">
          <img src="./assets/just-note.png" alt="logo" />
        </Link>
      </div>

      <div className="nav__search">
        <input type="text" placeholder="Search..." />
        <i className="bi bi-search"></i>
      </div>

      <div className="right-nav">
        {isAuthorized ? (
          <li onClick={handleLogout}>
            <Link className="link" to="/login">
              LOGOUT
            </Link>
          </li>
        ) : (
          <li>
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
