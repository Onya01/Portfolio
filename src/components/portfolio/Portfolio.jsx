import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather webapp',
    github: 'https://github.com/Onya01/weather',
    demo: 'https://weather-six-sand.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Admin Dashboard',
    github: 'https://github.com/Onya01/admin-dashboard',
    demo: 'https://admin-dashboard-jet-five.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lend-Service',
    github: 'https://github.com/Onya01/lendsqr-fetest',
    demo: 'https://onya-uchenna-lendsqr-fe-test.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'ToDo List',
    github: 'https://github.com/Onya01/R-ToDoList',
    demo: 'https://r-to-do-list.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Travel webpage',
    github: 'https://github.com/Onya01/top',
    demo: 'https://top-kappa-opal.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'AI',
    github: 'https://github.com/Onya01/Prompt_Ai',
    demo: 'https://react-website-nine-nu.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta' >
                <a href={github} className='btn' target='_bank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>
              )
            })
        }
      </div>
    </section>
  );
}

export default Portfolio;
