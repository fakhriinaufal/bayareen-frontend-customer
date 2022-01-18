import axios from "axios";
import { useState } from "react";

export default function useUpdatePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const updatePassword = (object, idx) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/users/password/${idx}`, object)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { updatePassword, loading, error };
}
