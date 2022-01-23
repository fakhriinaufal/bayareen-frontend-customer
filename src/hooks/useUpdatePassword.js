import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUpdatePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const updatePassword = (object, idx) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/users/${idx}/password`, object)
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
