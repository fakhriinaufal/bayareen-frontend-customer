import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useCreateTransaction() {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  const createTransaction = (object) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/transactions", object, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setUrl(res.data.data.invoice_url);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { createTransaction, loading, error, url };
}
