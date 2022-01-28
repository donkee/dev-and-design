exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const authorsQuery = await graphql(`
    query getAuthors {
      allSanityAuthor {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  if (authorsQuery.errors) {
    throw authorsQuery.errors;
  }

  const authors = authorsQuery.data.allSanityAuthor.edges || [];
  authors.forEach(
    (edge: { node: { id: string; name: string } }, index: any) => {
      const path = `/authors/${edge.node.id}`;

      createPage({
        path,
        component: require.resolve('./src/templates/authors.tsx'),
        context: { slug: edge.node.name }
      });
    }
  );
};
