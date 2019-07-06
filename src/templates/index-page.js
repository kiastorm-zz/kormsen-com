import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import {color, layout, background, space, radii} from 'styled-system';
import bgImg from '../img/mountains-bg.svg';
import test from '../img/home/190123000000590017.jpg';
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import PlayIcon from '../img/icons/play-icon.inline.svg';
import GridContainer from '../styles';

const IndexContainer = styled.div`
  ${background}
`;

const BgImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const LeftContainer = styled.div`
  ${layout}
`;

const RightContainer = styled.div`
  ${layout}
`;

const ImageGalleryCTA = styled.img`
  border-radius: .8rem;
  width: 100%;
`;

const FeedContainer = styled.div`
  border-radius: 1.2rem;
  ${color}
  ${space}
  ${layout}
  ${radii}
  z-index: 1;
`;

const FeedScrollArea = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const FeedItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: .8rem;
  margin-bottom: 1.6rem;
  ${color}
  ${space}
  ${layout}
`;


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
    <IndexContainer bg="green">
      <GridContainer className="flex pt8 p-pt4">
        <LeftContainer width={[1, 3/4, 1/2, 5/12]}>
          <div className="mb12">
            <h1 className="mb3">kia storm</h1>
            <h2>a web interface & experience designer / developer</h2>
          </div>

          <FeedContainer bg="white" py={4} px={4}>
            <FeedScrollArea>
              <FeedItem bg="purple" py={3} px={3}>
                <PlayIcon />
                <div className="ml3">
                  <h6 className="bold">kormsen - song name here</h6>
                </div>
              </FeedItem>
              <FeedItem bg="pink" py={3} px={3}>
                <img className="rounded" src={test} width={100} />
                <div className="ml4">
                  <p className="h7 mb1">new article</p>
                  <h6 className="bold">How to Become The Best Version Of Yourself: Part</h6>
                </div>
              </FeedItem>
              <FeedItem>
                <ImageGalleryCTA src={test}/>
              </FeedItem>
              <FeedItem bg="pink" py={3} px={3}>
                <div className="ml3">
                  <h6 className="bold">kormsen - song name here</h6>
                </div>
              </FeedItem>
              <FeedItem bg="orange" py={3} px={3}>
                <div className="ml3">
                  <h6 className="bold">kormsen - song name here</h6>
                </div>
              </FeedItem>
              <FeedItem bg="purple" py={3} px={3}>
                <div className="ml3">
                  <h6 className="bold">kormsen - song name here</h6>
                </div>
              </FeedItem>
            </FeedScrollArea>
          </FeedContainer>
        </LeftContainer>

        <RightContainer width={[0, 0, 0, 7/12]}>

        </RightContainer>
      </GridContainer>
      <BlogRoll />
    </IndexContainer>
    <BgImgContainer>
      <img className="absolute bottom-0" src={bgImg} />
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
