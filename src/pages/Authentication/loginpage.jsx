import React from 'react';
import './loginpagestyle.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { toast } from 'react-toastify';
import '../../utilities/css/util.css';

const LoginPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/home';

  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response?.data?.encodedToken);
      setAuth({
        token: response?.data?.encodedToken,
        isAuthorized: true,
      });
      toast.success('You are now successfully logged in!');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setErrMsg(err.response.data.errors[0]);
    }
  };

  return (
    <>
      <div className="auth__container absolute-container">
        <p className={errMsg ? 'errMsg' : 'offscreen'}>{errMsg}</p>
        <h2 className="heading">Login</h2>
        <form>
          <div className="text-field">
            <input
              type="email"
              required
              className="form-input"
              id="input--email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              ref={emailRef}
            />
            <span></span>
            <label>Email Address</label>
          </div>
          <div className="text-field">
            <input
              type="password"
              ref={passwordRef}
              required
              className="form-input"
              id="input--password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <span></span>
            <label>Password</label>
          </div>
          <button
            className="form-btn primary-btn"
            type="submit"
            onClick={e => handleSubmit(e, email, password)}
          >
            Login
          </button>
          <button
            className="form-btn primary-btn"
            type="submit"
            onClick={e => handleSubmit(e, 'rockybhai@kgf.in', 'Rocky@1999')}
          >
            Login as Guest
          </button>
          <Link to="/signup" className="center">
            Create New Account
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
