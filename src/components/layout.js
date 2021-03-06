/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="main">{children}</main>
      <footer id="footer">
        <span id="copyright">{`© ${new Date().getFullYear()} Emily Yang`}</span>
        {/* <span id="dash">{' - '}</span> */}
        <span id="gatsby-footer">
          {'built using '}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>
        </span>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
