import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetPrice() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [price, setPrice] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/price")
      .then((res) => {
        setPrice(res.data.data.price);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return { price, loading, error };
}
