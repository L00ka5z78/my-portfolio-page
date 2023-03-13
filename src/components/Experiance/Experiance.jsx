import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experiance.css';

export const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Developmnet</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experiance__backend">
          <h3>Backend Developmnet</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Nest JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
