import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby'
import {color, layout, background, border, space, radii} from 'styled-system';
import test from '../img/home/190123000000590017.jpg';
import PlaySvg from '../img/icons/play-icon.inline.svg';
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeedContainer = styled.div`
  display: flex;
  border-radius: 1.2rem;
  overflow: scroll;
  ${color}
  ${space}
  ${layout}
  ${radii}
  z-index: 1;
`;

const FeedContent = styled.div`
  display: flex;
  overflow: scroll;
  flex: 1;
`;


const FeedItemLeftContainer = styled.div`
  ${space}
  ${color}
  ${layout}
  ${radii}
  background-image: url("${test}");
  background-size: cover;
  border-radius: .4rem;
  height: 60px;
  min-width: 60px;
  position: relative;

  &:after {
    content: "";
    background-color: #985668;
    border-radius: .8rem;
    opacity: .3;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const FeedItemImageContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  &:after {
    content: "";
    background-color: #985668;
    border-radius: .8rem;
    opacity: .3;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;



const FeedScrollArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: .8rem;
  margin-bottom: 1.2rem;

  ${border}

  &:last-child {
    margin-bottom: 0;
  }

  ${color}
  ${space}
  ${layout}
`;

const PlayIcon = styled(PlaySvg)`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translateX(50%); */
  transform: translate(50%);
  z-index: 2;

  g {
    ${color}
  }
`;





const BlogRoll = ({data}) => {

    const { edges: posts } = data.allMarkdownRemark;

    console.log(posts);

  return (
    <FeedContainer bg="white" p={3}>
      <FeedContent>
        <FeedScrollArea>

          {posts &&
            posts.map(({ node: post }) => (

              <FeedItem bg="pink" py={3} px={3} key={post.id}>

              {post.frontmatter.featuredimage && (
                <FeedItemImageContainer bg={test} width={80} height={80}>
                  <PlayIcon />
                </FeedItemImageContainer>
              )}


                <div className="ml4">
                  <p className="h7 mb1">new article</p>
                  <Link
                    className="h4 bold text-decoration-none"
                    to={post.fields.slug}
                  >{post.frontmatter.title}</Link>
                </div>
                </FeedItem>
            ))}
        </FeedScrollArea>
      </FeedContent>
    </FeedContainer>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
