import { useQuery } from "@apollo/client";
import { getProductByCatId } from "../graphql/query";

export default function useGetProductByCatId(idx) {
  const { data, loading, error } = useQuery(getProductByCatId, {
    variables: {
      _eq: idx,
    },
  });
  const product = {
    id: data?.products[0].id,
  };
  return { product, loading, error };
}
