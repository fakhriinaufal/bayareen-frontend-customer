import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/userSlice";
import { useCookies } from "react-cookie";

export default function useRegisterAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const dispatch = useDispatch();

  const loginAccount = (object) => {
    setLoading(true);
    axios
      .post("https://api.bayareen.my.id/users/login", object)
      .then((res) => {
        dispatch(
          setData({
            id: res.data.data.id,
            name: res.data.data.name,
            phone: res.data.data.phone_number,
            email: res.data.data.email,
          })
        );
        setCookie("token", res.data.data.token, { path: "/" });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { loginAccount, loading, error };
}
