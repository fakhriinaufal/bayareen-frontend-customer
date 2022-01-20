import { gql } from "@apollo/client";

export const getTransactions = gql`
  query MyQuery($_eq: bigint!) {
    transactions(
      where: {
        deleted_at: { _is_null: true }
        _and: { user_id: { _eq: $_eq } }
      }
    ) {
      id
      status
      created_at
      price
      payment_method_id
      invoice_url
      product {
        name
        category {
          name
        }
      }
    }
  }
`;

export const getPaymentMethod = gql`
  query MyQuery($_id: bigint!) {
    payment_methods_by_pk(id: $_id) {
      id
      payment_channel
    }
  }
`;

export const getProductByCatId = gql`
  query MyQuery($_eq: bigint!) {
    products(where: { cat_id: { _eq: $_eq } }) {
      id
    }
  }
`;
