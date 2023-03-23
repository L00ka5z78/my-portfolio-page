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
        <a
          href="https://www.linkedin.com/in/%C5%82ukasz-bolach/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a href="http://instagram.com" target="blank">
          <FiInstagram />
        </a>
        <a href="http://twitter.com" target="blank">
          <IoLogoTwitter />
        </a>
        <a href="http://yahoo.com" target="blank">
          <AiOutlineYahoo />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Łukasz Bolach. All rights reserved</small>
      </div>
    </footer>
  );
};
