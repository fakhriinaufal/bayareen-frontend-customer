import { useQuery } from "@apollo/client";
import { getTransactions } from "../graphql/query";
import moment from "moment";

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
      invoice_url: value.invoice_url,
    };
  });
  if (!loading) {
    let dateObj;
    let momentObj;
    for (let i = 0; i < convertData.length; i++) {
      dateObj = new Date(convertData[i].created_at);
      momentObj = moment(dateObj);
      convertData[i].created_at = momentObj.format("lll");
    }
  }
  return { convertData, loading, error };
}
