import React from 'react';
import Layout from '../components/layout';
import '../styles/home.scss';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content home">
      <h1 id="title-one" className="front-title">
        Hi, I'm Emily
      </h1>
      <h2 id="title-two" className="front-title">
        Thanks for visiting my site!
      </h2>
      <p>
        I am a full stack developer based in LA, working primarily with React and Node. I am comfortable with both SQL
        and NoSQL databases.
      </p>
      <p>
        My passion is writing clean code and building clean user interfaces, and I constantly strive to get better at
        both. I especially love solving a good challenging problem.
      </p>
      <p>
        When not coding, I can also be found playing board games, playing D&D, or enjoying classical/orchestral music.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
