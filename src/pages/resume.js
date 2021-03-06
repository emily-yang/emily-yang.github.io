import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ResumePage = () => (
  <Layout>
    <h1>This is the Resume page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default ResumePage;
