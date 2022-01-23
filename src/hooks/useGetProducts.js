import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetProducts(idx) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  let url = `http://localhost:8080/products?providerId=${idx}`;

  useEffect(() => {
    if (idx === null) {
      return { products, loading, error };
    }
    axios
      .get(url)
      .then((res) => {
        const convertProduct = res.data.data.map((prod) => {
          return {
            val: prod.id,
            text: prod.name,
            price: prod.price,
          };
        });
        setProducts(convertProduct);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, [idx]);

  return { products, loading, error };
}
