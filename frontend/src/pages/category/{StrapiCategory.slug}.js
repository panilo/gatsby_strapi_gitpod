import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      id
      name
    }
  }
`;

export default function Category({ data }) {
  return (
    <Layout pageTitle={data.strapiCategory.name}>
      <p>Category: {data.strapiCategory.name}</p>
    </Layout>
  );
}
