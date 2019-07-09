import React from 'react'
import Helmet from 'react-helmet'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components';
import {color} from 'styled-system';
import '../scss/index.scss'
// import bgImg from '../img/mountains-bg.svg';
import useSiteMetadata from './SiteMetadata'
import { ThemeProvider, withTheme } from 'styled-components';
import theme from '../theme';

const AppContainer = styled.div`
  ${color}
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <AppContainer bg="green">
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />

        <div className="flex flex-auto overflow-hidden">{children}</div>
        {/* <Footer /> */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default withTheme(TemplateWrapper);
