import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUpdatePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const updatePassword = (object, idx) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/users/${idx}/password`, object)
      .then(() => {
        setLoading(false);
        navigate("/profile");
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { updatePassword, loading, error };
}
