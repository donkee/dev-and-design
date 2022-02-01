import { graphql } from 'gatsby';
import React from 'react';

const Author = ({ data }) => {
  const name = data.allSanityAuthor.edges[0].node.name;
  return (
    <>
      <title>{name} | dev and design</title>
      <span>{name}</span>
    </>
  );
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
