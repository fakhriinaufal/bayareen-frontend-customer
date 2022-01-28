import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCategories() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://api.bayareen.my.id/categories")
      .then((res) => {
        const convertCategories = res.data.data.map((cat) => {
          return {
            text: cat.name,
            val: cat.id,
          };
        });
        setCategories(convertCategories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, []);

  return { categories, loading, error };
}
