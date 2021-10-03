import React from "react";
import { graphql } from "gatsby";

function IndexPage({ data }) {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.allStrapiProduct.edges.map((productEdge) => {
          return <li key={productEdge.node.id}>{productEdge.node.name}</li>;
        })}
      </ul>
      <hr />
      <h1>Categories</h1>
      <ul>
        {data.allStrapiCategory.edges.map((categoryEdge) => (
          <li key={categoryEdge.node.id}>{categoryEdge.node.name}</li>
        ))}
      </ul>
    </>
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
    allStrapiCategory {
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
