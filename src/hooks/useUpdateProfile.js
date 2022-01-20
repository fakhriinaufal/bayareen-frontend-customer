import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function () {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);

  const updateProfile = (object, idx) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/users/${idx}/profile`, object)
      .then((res) => {
        dispatch(
          setData({
            id: res.data.data.id,
            name: res.data.data.name,
            phone: res.data.data.phone_number,
            email: res.data.data.email,
            token: cookies.token,
          })
        );
        setLoading(false);
        navigate("/profile");
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { updateProfile, loading, error };
}
