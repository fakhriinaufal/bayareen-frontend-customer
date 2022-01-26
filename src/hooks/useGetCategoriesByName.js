import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetCategoriesByName(string) {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get(`https://api.bayareen.my.id/categories/name?category=${string}`, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertCategories = {
          id: res.data.data.id,
          name: res.data.data.name,
        };
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
