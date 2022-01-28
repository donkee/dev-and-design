const { graphql } = require('gatsby');

exports.createPages = async ({ actions, graphql }) => {
  await generateAuthors(actions, graphql);
  await generatePosts(actions, graphql);
};

const generateAuthors = async (actions, graphql) => {
  const { data } = await graphql(`
    query {
      allSanityAuthor {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.allSanityAuthor.edges.forEach((edge) => {
    const slug = edge.node.slug.current;

    const path = `/author/${edge.node.slug.current}`;

    actions.createPage({
      path: path,
      component: require.resolve('./src/templates/author.tsx'),
      context: { slug: slug }
    });
  });
};

const generatePosts = async (actions, graphql) => {
  const { data } = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.allSanityPost.edges.forEach((edge) => {
    const slug = edge.node.slug.current;

    const path = `/post/${edge.node.slug.current}`;

    actions.createPage({
      path: path,
      component: require.resolve('./src/templates/post.tsx'),
      context: { slug: slug }
    });
  });
};
