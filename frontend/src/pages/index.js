import React from "react";
import { graphql } from "gatsby";

function IndexPage({ data }) {
  return (
    <>
      <h1>Restuarants</h1>
      <ul>
        {data.allStrapiRestaurant.edges.map((nodeRestaurant) => {
          return (
            <li key={nodeRestaurant.node.id}>{nodeRestaurant.node.name}</li>
          );
        })}
      </ul>
      <hr />
      <h1>Categories</h1>
      <ul>
        {data.allStrapiCategory.edges.map((nodeCategory) => (
          <li key={nodeCategory.node.id}>{nodeCategory.node.name}</li>
        ))}
      </ul>
    </>
  );
}

export const dataQuery = graphql`
  query MyQuery {
    allStrapiRestaurant {
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
