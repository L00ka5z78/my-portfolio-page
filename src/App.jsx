import React from 'react';
import { Header } from './components/Header//Header';
import { Nav } from './components/Nav/Nav';
import { About } from './components/About/About';
import { Experiance } from './components/Experiance/Experiance';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
