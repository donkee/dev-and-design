import { graphql } from 'gatsby';
import React from 'react';

const Author = ({ data }) => {
  return <span>{data.allSanityAuthor.edges[0].node.name}</span>;
};

export default Author;

export const query = graphql`
  query ($slug: String!) {
    allSanityAuthor(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          id
          name
          slug {
            current
          }
        }
      }
    }
  }
`;
