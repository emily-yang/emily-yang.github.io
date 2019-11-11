import PropTypes from 'prop-types';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1 style={{ margin: 0 }}>
      <AniLink id="name" fade to="/" duration={0.6}>
        <img id="header-logo" className="logo" src="/eylogo.png" height="40" width="40" alt="logo" />
        {siteTitle}
      </AniLink>
    </h1>
    <nav>
      <a href={'/EmilyYang_Resume.pdf'} target="_blank" rel="noopener noreferrer">
        Résumé
      </a>
      <AniLink fade to="/projects" duration={0.6}>
        Projects
      </AniLink>
      <AniLink fade to="/contact" duration={0.6}>
        Contact
      </AniLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
