import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <BiCheck className='service__list-icon' />
            <h3>Web Development</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
