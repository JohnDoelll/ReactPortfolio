import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";
import { Zoom } from "react-awesome-reveal";

const date = [
  {
    id: 1,
    image: IMG1,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
  {
    id: 2,
    image: IMG2,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
  {
    id: 3,
    image: IMG3,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
  {
    id: 4,
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
  {
    id: 5,
    image: IMG5,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
  {
    id: 6,
    image: IMG6,
    github: "https://github.com",
    demo: "https://github.com/.....",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {date.map((item) => (
          <Zoom>
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="img1" />
              </div>
              <h3>This is portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          </Zoom>
        ))}
      </div>
    </section>
    
  );
};

export default Portfolio;
