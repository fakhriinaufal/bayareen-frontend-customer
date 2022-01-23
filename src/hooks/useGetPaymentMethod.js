import { useQuery } from "@apollo/client";
import { getPaymentMethod } from "../graphql/query";

export default function useGetPaymentMethod(idx) {
  if (idx === 0) {
    const loading = false;
    const error = false;
    const convertPaymentMethod = {
      id: 0,
      name: "Unpaid",
    };
    return { convertPaymentMethod, loading, error };
  }
  const { data, loading, error } = useQuery(getPaymentMethod, {
    variables: {
      _id: idx,
    },
  });

  const convertPaymentMethod = {
    id: data?.payment_methods_by_pk.id,
    name: data?.payment_methods_by_pk.payment_channel,
  };
  
  return { convertPaymentMethod, loading, error };
}
