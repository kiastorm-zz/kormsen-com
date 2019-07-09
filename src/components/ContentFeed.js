import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby'
import {color, layout, border, space} from 'styled-system';
// import test from '../img/home/190123000000590017.jpg';
import PlaySvg from '../img/icons/play-icon.inline.svg';
import Image from './Image'

const FeedContainer = styled.div`
  display: flex;
  border-radius: 1.2rem;
  overflow: scroll;
  ${color}
  ${space}
  ${layout}
  z-index: 1;
`;

const FeedContent = styled.div`
  display: flex;
  overflow: scroll;
  flex: 1;
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
  z-index: 2;

  g {
    ${color}
  }
`;





const ContentFeed = ({data}) => {
  const generatePost = (postData) => {
    let post;

    if (!postData.frontmatter) return null;

    console.log(postData);

    switch (postData.frontmatter.templateKey) {
      case 'blog-post':
       post = (
        <FeedItem bg="pink" py={3} px={3} key={postData.id}>
          {postData.frontmatter.featuredimage &&
            <>
              <Link
                to={postData.fields.slug}
              >
                <Image imageInfo={{image: postData.frontmatter.featuredimage, alt: 'test', width: '120px', height: '80px'}}>
                  <PlayIcon />
                </Image>
              </Link>
            </>
          }


          <div className="ml4">
            <p className="h7 mb1">new article</p>
            <Link
              className="h4 bold text-decoration-none"
              to={postData.fields.slug}
            >{postData.frontmatter.title}</Link>
          </div>
        </FeedItem>
      );
      break;

      default:
        break;
    }

    return post;
  }

    const { edges: posts } = data.allMarkdownRemark;


  return (
    <FeedContainer bg="white" p={3}>
      <FeedContent>
        <FeedScrollArea>

          {posts &&
            posts.map(({ node: post }) => {
              return generatePost(post);
          })}
        </FeedScrollArea>
      </FeedContent>
    </FeedContainer>
  );
}

ContentFeed.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContentFeedQuery {
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
                templateKey
                title
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ContentFeed data={data} count={count} />}
  />
)
