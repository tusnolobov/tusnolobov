import React from 'react';

import { SEO } from '../components/Seo/seo';
import { Layout } from '../components/Layout/layout';

import { Container, ImageContainer } from '../page-styles/index.styles';
const IndexPage = ({ location }) => (
  <Layout>
    <SEO slug={location.pathname} />
    <Container>
      <ImageContainer>
        <img
          src="/images/svg/dude.svg"
          alt="Drawing of a dude sitting at a computer"
        />
      </ImageContainer>
      <div>
        <h1>Hello</h1>
        <p>
          My&nbsp;name is&nbsp;Ivan Tusnolobov. I&rsquo;m a&nbsp;developer and
          designer from Moscow, Russia.
        </p>
        <p>
          I&rsquo;m currently working as a&nbsp;full-time developer, but always
          happy to&nbsp;contribute to&nbsp;open-source projects.
        </p>
        <p>
          Interested in&nbsp;working together? Reach me&nbsp;at&nbsp;{' '}
          <a
            href="mailto:ivan.tusnolobov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ivan.tusnolobov[at]gmail.com
          </a>
        </p>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
