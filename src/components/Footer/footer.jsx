import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="social-media">
          <div className="logo">
            <Link href="#" className="footer-logo">
              <img src="/assets/just-note.png" alt="logo" />
            </Link>
          </div>
          <div className="footer-info">
            <h3>Just - Note for writing quick notes...</h3>
            <h3>
              Made using
              <Link href="https://its-aqua-ui.netlify.app/">
                <span className="title-logo">Aqua UI</span>
              </Link>
              in 2022 by Arjun
            </h3>
          </div>
          <div className="media-links">
            <h2>Get in touch?</h2>

            <Link href="https://twitter.com/Arjun_R_A" target="_blank">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/arjun-r-a-3362aa147/"
              target="_blank"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </Link>
            <Link href="https://github.com/ArjunJunna" target="_blank">
              <i className="fab fa-github" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
