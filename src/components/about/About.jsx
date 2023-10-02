import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import{FiUsers} from 'react-icons/fi';
import{VscFolderLibrary} from 'react-icons/vsc';
//import ME from '../../assets/Me.png';
import ME2 from '../../assets/Me2.jpg';
// import ME from '../../assets/me-about.png';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed projects</small>
            </article>
          </div>

          <p>
            Enthusiastic Front End Software Developer with over 2 years of experience creating responsive and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, React.js and Next.js. Passionate about creating visually appealing designs and optimizing user experiences. Eager to contribute to long-term success through hard work attention to detail and excellent organition skills. Clear understanding of coding and web development and training in other programming languages. Motivated to learn, grow and excel in computer related field.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
