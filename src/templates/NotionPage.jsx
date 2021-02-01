import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'
import Layout from '../components/Layout';

const NotionPage = ({ data: { notion } }) => {
  const content = notion.internal.content;

  return (
    <Layout>
      <Helmet>
          <title>Generic - Forty by HTML5 UP</title>
          <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <div className="inner">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  );
};

export default NotionPage;

export const pageQuery = graphql`
  query NotionByPath($id: String!) {
    notion: notionContent (id: { eq: $id }) {
      id
      internal {
        content
        description
      }
    }
  }
`;
