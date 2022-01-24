import { useQuery } from "@apollo/client";
import { getTransactionsById } from "../graphql/query";
import moment from "moment";

export default function useGetTransactionsById(idx) {
  const { data, loading, error } = useQuery(getTransactionsById, {
    variables: {
      _eq: idx,
    },
  });

  if (data?.transactions.length === 0) {
    const loading = false;
    const error = false;
    const convertData = {
      name: "notFound",
    };
    return { convertData, loading, error };
  }
  const convertData = {
    name: data?.transactions[0].product.name,
    price: data?.transactions[0].price,
    status: data?.transactions[0].status,
    created_at: data?.transactions[0].created_at,
    invoice_url: data?.transactions[0].invoice_url,
  };
  if (!loading) {
    let dateObj;
    let momentObj;
    dateObj = new Date(convertData.created_at);
    momentObj = moment(dateObj);
    convertData.created_at = momentObj.format("lll");
  }

  console.log(convertData, "cnvrt");
  return { convertData, loading, error };
}
