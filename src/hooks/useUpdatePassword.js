import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function useUpdatePassword() {
  const [cookies, setCookies] = useCookies(["cookies"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const updatePassword = (object, idx) => {
    setLoading(true);
    axios
      .patch(`https://api.bayareen.my.id/users/${idx}/password`, object, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then(() => {
        setLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { updatePassword, loading, error };
}
