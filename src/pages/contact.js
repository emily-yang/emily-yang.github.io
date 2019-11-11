import React from 'react';
import Layout from '../components/layout';
import NavBack from '../components/nav-back';
import SEO from '../components/seo';
import '../styles/contact.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="content contact">
      <h1 className="title">Contact Me</h1>
      <p>I am open to talking about new opportunities, or just anything in general.</p>
      <p> If you have something cool in mind, let's chat!</p>
      <p>Here's how we can get in touch:</p>
      <div className="contact-logos">
        <a href="mailto:eyang6@gmail.com">
          <img className="logo" src="/mail_logo.png" width="50" height="50" alt="mail logo" />
        </a>
        <a href="https://www.linkedin.com/in/emilyyang1">
          <img className="logo" src="/li_logo.png" width="50" height="50" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/emily-yang">
          <img className="logo" src="/github_logo.png" width="50" height="50" alt="Github logo" />
        </a>
      </div>

      <NavBack />
    </div>
  </Layout>
);

export default ContactPage;
