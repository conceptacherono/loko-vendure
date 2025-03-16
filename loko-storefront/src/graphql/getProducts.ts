import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      items {
        id
        name
        slug
        description
        featuredAsset {
          preview
        }
        variants {
          price
        }
      }
    }
  }
`;
