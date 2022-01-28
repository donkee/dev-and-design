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
const IndexPage = ({ data, location }) => {
  return (
    <main style={pageStyles}>
      <title>dev and design</title>
      <h1 style={headingStyles}>
        Welcome to dev and design
        <span role='img' aria-label='Party popper emojis'>
          🎉🎉🎉
        </span>
      </h1>
    </main>
  );
};

export default IndexPage;
