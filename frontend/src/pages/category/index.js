import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";

export default function Categories({ data }) {
  return (
    <Layout pageTitle="Categories">
      <ul>
        {data.allStrapiCategory.edges.map((categoryEdge) => (
          <li key={categoryEdge.node.id}>
            <Link to={`/category/${categoryEdge.node.slug}`}>
              {categoryEdge.node.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const dataQuery = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
