const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    resolve(
      graphql(`
        {
          allNotionContent {
            edges {
              node {
                id
                contentType
                internal {
                  type
                }
              }
            }
          }
        }
      `).then(({ errors, data: { allNotionContent: { edges: notions } } }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        notions.forEach(({ node: { id, contentType, internal: { type } } }) => {
          if (type === 'NotionContent') {
            createPage({
              path: `/${id}`,
              component: path.resolve(`./src/templates/NotionPage.jsx`),
              context: {
                id,
                contentType,
                type,
              },
            });
          }
        });
      })
    );
  });
};
