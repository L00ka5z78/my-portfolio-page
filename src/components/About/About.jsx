import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import myImg from '../../assets/me-img.jpg';
import './about.css';

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imge">
            <img src={myImg} alt="about section" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>No commercial experiance, yet..</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>No commercial clients, yet..</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Im aspiring software developer and like to explore new technologies.
            Learning JavaScript and most useful things which are used to buid
            complete applications. I like backend most but i try to solve all
            kind of problem during coding process. I feel pretty confident with
            building backend structures and connections both with MySqql, and
            MongoDb. Im doing my best to learn as much as possible as daily life
            allows me. Im on complete JS bootcamp (JS, node, express, mysql,
            mongoDb, TypeScript, React, NestJs) completed several couses on
            Udemy and of course I write projects on my own too, to develop and
            extend my skills. I wish I would become a full stack dev one day...
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's have a chat
          </a>
        </div>
      </div>
    </section>
  );
};
