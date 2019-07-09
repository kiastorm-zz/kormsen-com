import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import {layout, background, space} from 'styled-system';
// import bgImg from '../img/mountains-bg.svg';
// import test from '../img/home/190123000000590017.jpg';
import Layout from '../components/Layout'
// import Features from '../components/Features'
import ContentFeed from '../components/ContentFeed'
// import PlayIcon from '../img/icons/play-icon.inline.svg';
import GridContainer from '../styles';

const IndexContainer = styled.div`
  ${background}
  ${space}
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const BgImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const IntroContainer = styled.div`
  ${space}
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${layout}
  ${space}
`;

const RightContainer = styled.div`
  ${layout}
  ${space}
`;

// const ImageGalleryCTA = styled.img`
//   border-radius: .8rem;
//   width: 100%;
// `;

// const FeedContainer = styled.div`
//   display: flex;
//   border-radius: 1.2rem;
//   overflow: scroll;
//   ${color}
//   ${space}
//   ${layout}
//   ${radii}
//   z-index: 1;
// `;

// const FeedContent = styled.div`
//   display: flex;
//   overflow: scroll;
//   flex: 1;
// `;


// const FeedItemLeftContainer = styled.div`
//   ${space}
//   ${color}
//   ${layout}
//   ${radii}
//   background-size: cover;
//   border-radius: .4rem;
//   height: 60px;
//   min-width: 60px;
//   position: relative;

//   &:after {
//     content: "";
//     background-color: #985668;
//     border-radius: .8rem;
//     opacity: .3;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }
// `;

// const FeedScrollArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const FeedItem = styled.div`
//   display: flex;
//   align-items: center;
//   border-radius: .8rem;
//   margin-bottom: 1.2rem;

//   ${border}

//   &:last-child {
//     margin-bottom: 0;
//   }

//   ${color}
//   ${space}
//   ${layout}
// `;






export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <IndexContainer bg="green" pb={4} pt={[0, 5]}>
      <GridContainer>
        <LeftContainer width={[1, 3/4, 1/2, 5/12]}>
          <IntroContainer mb={[6, 8, 8, 10]}>
            <h1 className="mb3">kia storm</h1>
            <h2>a web interface & experience <br/> designer / developer</h2>
          </IntroContainer>
        </LeftContainer>

        <RightContainer ml={'auto'} width={[0, 0, 0, 5/12]} pt={5}>
          <ContentFeed />
        </RightContainer>
      </GridContainer>
    </IndexContainer>
    <BgImgContainer>
      {/* <img className="absolute bottom-0" src={bgImg} /> */}
    </BgImgContainer>
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
