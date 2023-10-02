import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <>
    <footer>

    <h3>ADITIONAL INFORMATION</h3>
    <p>I will make sure all projects are delivered according to schedule and specifications. I am always learning and improving on existing knowlegde.</p>
      <a href="#" className='footer_logo'>ONYA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socails">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Portfolio. All rights reserved</small>
      </div>
    </footer>
    
    </>
  );
}

export default Footer;
