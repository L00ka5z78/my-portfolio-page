import React from 'react';
import { data } from '../../assets/data/testimonialData';

import './testimonials.css';

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

{
  /* <article className="testimonial">
<div className="client__avatar">
  <img src={AV1} alt="avatar one" />
</div>
<h5 className="client__name">kira riddick</h5>
<small className="client__review">
  Lorem ipsum dolor sit amet. Vel eius illo ea quaerat inventore a
  culpa fugiat non numquam dignissimos in atque mollitia. Vel possimus
  sapiente aut praesentium molestias ut aspernatur facilis id rerum
  pariatur id quia dolorem sit veritatis numquam 33 voluptatum
  provident. Qui culpa numquam et possimus quia aut galisum quis.
</small>
</article> */
}
