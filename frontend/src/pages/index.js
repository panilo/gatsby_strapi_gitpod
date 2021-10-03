import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

function IndexPage({ data }) {
  return (
    <Layout pageTitle="Home">
      <ul>
        {data.allStrapiProduct.edges.map((productEdge) => {
          return <li key={productEdge.node.id}>{productEdge.node.name}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const dataQuery = graphql`
  query IndexQuery {
    allStrapiProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export default IndexPage;
