


import gql from 'graphql-tag';
export const allProduct =  gql`
  {Products {
    id
    price
    picture
    product_name
  }}
`;