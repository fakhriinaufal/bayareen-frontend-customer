import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetPrice() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/price")
      .then((res) => {
        setPrice(res.data.data.price);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
      setError("");
  }, []);

  return { price, loading, error };
}
