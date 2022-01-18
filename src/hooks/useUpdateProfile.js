import axios from "axios";
import { useState } from "react";

export default function () {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateProfile = (object, idx) => {
    axios
      .post(`http::/localhost:3000/users/profile/${idx}`, object)
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { updateProfile, loading, error };
}
