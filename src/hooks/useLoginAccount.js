import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/userSlice";
import { useCookies } from "react-cookie";

export default function useRegisterAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const dispatch = useDispatch();

  const loginAccount = (object) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/users/login", object)
      .then((res) => {
        console.log(res);
        dispatch(
          setData({
            id: res.data.data.id,
            name: res.data.data.name,
            phone: res.data.data.phone_number,
            email: res.data.data.email,
            token: res.data.data.token,
          })
        );
        setCookie("token", res.data.data.token, { path: "/"});
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { loginAccount, loading, error };
}
