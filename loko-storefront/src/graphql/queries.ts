import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        id
        name
        description
        price
      }
    }
  }
`;
