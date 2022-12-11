import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './navbar.css';
import '../../utilities/css/util.css';
import { useAuth } from '../../context/authContext';
import { toast } from 'react-toastify';
import {useDataContext} from '../../context/dataContext';

const NavBar = () => {
  const {
    auth: { isAuthorized },
    setAuth,
  } = useAuth();
   const navigate = useNavigate();
    const {
      state: { searchFor },
      dataDispatch,
    } = useDataContext();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: '',
      isAuthenticated: false,
    });
    toast.success('You have logged out successfully!!!');
  };

  return (
    <nav className="navigation-hz">
      <div className="left-nav">
        <Link to="/" className="nav-logo">
          <img src="./assets/just-note.png" alt="logo" />
        </Link>
      </div>

      <div className="nav__search">
        <input
          type="search"
          placeholder="Search..."
          id="search-bar"
          value={searchFor}
          onChange={e => {
            navigate('/notes');
            dataDispatch({ type: 'SEARCH', payload: e.target.value });
          }}
        />
        <label htmlFor="search-bar">
          {searchFor === '' ? <i className="bi bi-search"></i> : null}
        </label>
        
      </div>

      <div className="right-nav">
        <div className="nav__links">
          <Link to="/notes" className="icon">
            <span className="icon-badge">
              <i className="bi bi-file-text"></i>
              <span className="icon-text">notes</span>
            </span>
          </Link>
          <Link to="/archive" className="icon">
            <span className="icon-badge">
              <i className="bi bi-archive-fill"></i>
              <span className="icon-text">archives</span>
            </span>
          </Link>
          <Link to="/trash" className="icon">
            <span className="icon-badge">
              <i className="bi bi-trash3-fill"></i>
              <span className="icon-text">trash</span>
            </span>
          </Link>
        </div>
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
