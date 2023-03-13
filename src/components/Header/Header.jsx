import React from 'react';
import { CTA } from './CTA';
import './header.css';
import ME from '../../asets/me.jpg';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
  return (
    <header>
      <div className="container  header__container">
        <h5>Hello I am</h5>
        <h1>Łukasz Bolach</h1>
        <h5 className="text-light">Aspiring Software Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="img__me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
