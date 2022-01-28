import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useGetProviders(idx) {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [providers, setProviders] = useState([]);

  let url = `https://api.bayareen.my.id/providers?catId=${idx}`;

  useEffect(() => {
    if (!idx) {
      return { providers, loading, error };
    }
    axios
      .get(url, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        const convertProviders = res.data.data.map((prov) => {
          return {
            text: prov.name,
            val: prov.id,
          };
        });
        setProviders(convertProviders);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  }, [idx]);

  return { providers, loading, error };
}
