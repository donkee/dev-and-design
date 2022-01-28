import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '../components/BlockContent';

const Post = ({ data }) => {
  const post = data.allSanityPost.edges[0].node;
  return (
    <div>
      <img
        src={post.mainImage.asset.url}
        alt={post.mainImage.asset.altText}
        width={640}
      />
      <h3>{post.title}</h3>
      <div>
        Author:{' '}
        <a href={`/author/${post.author.slug.current}`}>{post.author.name}</a>
      </div>
      <div>{post._createdAt}</div>
      <BlockContent
        blocks={post._rawBody}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}></BlockContent>
    </div>
  );
};

export default Post;

export const query = graphql`
  query ($slug: String!) {
    allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          _rawBody
          author {
            name
            slug {
              current
            }
          }
          mainImage {
            asset {
              url
              altText
            }
          }
          _createdAt
          title
        }
      }
    }
  }
`;
