import React from 'react';
import Layout from '../components/layout';
import NavBack from '../components/nav-back';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content">
      <h1 className="title">404 Error: Page not found</h1>
      <p>Oops! This page does not exist...</p>
      <NavBack />
    </div>
  </Layout>
);

export default NotFoundPage;
