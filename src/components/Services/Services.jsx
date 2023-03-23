import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Flow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interface Design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive and universal design</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing frontend sollution with HTML and CSS</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing single page applications in JavaScript</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing of frontend sollutions with React</p>
            </li>
          </ul>
        </article>
        {/* end of frontend development */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building REST APIS with good structure</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Connecting APIS with both relational and non-relational
                databases.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing tests to prevent errors in APIS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Refactoring of existing code and make it work optimal </p>
            </li>
          </ul>
        </article>
        {/* end of backend creation */}
      </div>
    </section>
  );
};
