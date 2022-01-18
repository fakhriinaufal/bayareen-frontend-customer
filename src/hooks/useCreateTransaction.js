import axios from "axios";
import { useState } from "react";

export default function useCreateTransaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  const createTransaction = (object) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/transactions", object)
      .then((res) => {
        setUrl(res.data.data.invoice_url);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { createTransaction, loading, error, url };
}
