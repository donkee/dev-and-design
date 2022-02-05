import axios from 'axios';
import { parseISO } from 'date-fns';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

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
const linkStyles = {
  cursor: 'pointer'
};

const IndexPage = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<any[]>([]);
  let limit = 1;
  let query = `query allPost {
                    allPost(limit: 1, offset: ${page * limit}) {
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
                  }`;

  useEffect(() => {
    axios
      .post('https://5hs4bn0k.apicdn.sanity.io/v1/graphql/production/default', {
        query: query
      })
      .then((response) => {
        setData((oldData) => oldData.concat(response.data.data.allPost));
      })
      .catch((_error) => {
        console.log(_error);
      });
  }, [page]);

  const createPostLinks = () => {
    if (data.length === 0) {
      return <></>;
    }

    const postLinks: React.ReactNode[] = [];
    data.forEach((post) => {
      postLinks.push(
        <span key={post.slug.current}>
          <h3>
            <Link to={`/post/${post.slug.current}`}>{post.title}</Link>
          </h3>
          <span>
            <Link to={`/author/${post.author.slug.current}`}>
              {post.author.name}
            </Link>{' '}
            - {parseISO(post._createdAt).toDateString()}
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
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <h2>Top {limit * (page + 1)} posts:</h2>
      {createPostLinks()}
      <br />
      <br />
      <a onClick={() => setPage(page + 1)} style={linkStyles}>
        Load More...
      </a>
    </main>
  );
};

export default IndexPage;
