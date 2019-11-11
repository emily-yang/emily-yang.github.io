import React from 'react';
import '../styles/nav-back.scss';

const Project = ({ data: { title, description, link, tech, img, active_img } }) => (
  <div className="project">
    <a href={link}>
      <img className="project-info static-img" src={img} alt={title} />
      <img className="project-info active-img" src={active_img} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Made with: {tech}</p>
      </div>
    </a>
  </div>
);

export default Project;
