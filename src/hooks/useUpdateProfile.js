import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function () {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProfile = (object, idx) => {
    setLoading(true);
    axios
      .patch(`https://api.bayareen.my.id/users/${idx}/profile`, object, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        dispatch(
          setData({
            id: res.data.data.id,
            name: res.data.data.name,
            phone: res.data.data.phone_number,
            email: res.data.data.email,
          })
        );
        setLoading(false);
        navigate("/profile");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { updateProfile, loading, error };
}
