import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../styles/nav-back.scss';

const NavBack = () => (
  <AniLink fade className="nav-back" to="/" duration={0.6}>
    &larr; Home
  </AniLink>
);

export default NavBack;
