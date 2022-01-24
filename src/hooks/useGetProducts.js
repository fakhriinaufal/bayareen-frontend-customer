import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetProducts(idx) {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  let url = `http://localhost:8080/products?providerId=${idx}`;

  useEffect(() => {
    if (idx === null) {
      return { products, loading, error };
    }
    axios
      .get(url, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
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
