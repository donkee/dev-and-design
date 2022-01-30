import { graphql, Link } from 'gatsby';
import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};

// markup
const IndexPage = ({ data }) => {
  const posts = data.allSanityPost.edges;

  const createPostLinks = () => {
    const postLinks: React.ReactNode[] = [];
    posts.forEach((node) => {
      postLinks.push(
        <span>
          <h3>
            <Link to={`/post/${node.node.slug.current}`}>
              {node.node.title}
            </Link>
          </h3>
          <span>
            <Link to={`/author/${node.node.author.slug.current}`}>
              {node.node.author.name}
            </Link>{' '}
            - {node.node._createdAt}
          </span>
        </span>
      );
    });

    return postLinks;
  };

  return (
    <main style={pageStyles}>
      <title>dev and design</title>
      <h1 style={headingStyles}>
        Welcome to dev and design
        <span role='img' aria-label='Party popper emojis'>
          🎉🎉🎉
        </span>
      </h1>
      <h2>Top 20 posts:</h2>
      <p>{createPostLinks()}</p>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allSanityPost(limit: 20) {
      edges {
        node {
          _createdAt
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
          }
          title
        }
      }
    }
  }
`;
