import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { AiOutlineYahoo } from 'react-icons/ai';

import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {' '}
        Smile! It scares people!
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="http://instagram.com">
          <FiInstagram />
        </a>
        <a href="http://twitter.com">
          <IoLogoTwitter />
        </a>
        <a href="http://yahoo.com">
          <AiOutlineYahoo />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Łukasz Bolach. All rights reserved</small>
      </div>
    </footer>
  );
};
