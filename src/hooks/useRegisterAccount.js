import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useRegisterAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerAccount = (object) => {
    setLoading(true);
    axios
      .post("https://api.bayareen.my.id/users", object)
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { registerAccount, loading, error };
}
