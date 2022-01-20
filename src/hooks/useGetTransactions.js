import { useQuery } from "@apollo/client";
import { getTransactions } from "../graphql/query";

export default function useGetTransactions(idx) {
  const { data, loading, error } = useQuery(getTransactions, {
    variables: {
      _eq: idx,
    },
  });
  const convertData = data?.transactions.map((value) => {
    return {
      id: value.id,
      name: value.product.name,
      price: value.price,
      status: value.status,
      created_at: value.created_at,
      category: value.product.category.name,
      payment_method_id: value.payment_method_id,
    };
  });
  return { convertData, loading, error };
}
