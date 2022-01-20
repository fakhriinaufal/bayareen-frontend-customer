import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProfileMenu from "./pages/Profile/ProfileMenu";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePassword from "./pages/Profile/ChangePassword";
import NotFound from "./pages/NotFound/NotFound";
import ListHistory from "./pages/History/ListHistory";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import CheckoutPulsa from "./pages/CheckoutForm/CheckoutPulsa";
import CheckoutPaket from "./pages/CheckoutForm/CheckoutPaket";
import CheckoutListrik from "./pages/CheckoutForm/CheckoutListrik";
import CheckoutAir from "./pages/CheckoutForm/CheckoutAir";
import DetailHistory from "./pages/History/DetailHistory";
import Payment1 from "./pages/PaymentForm/PaymentPulsa";
import Payment2 from "./pages/PaymentForm/PaymentAir";
import Payment3 from "./pages/PaymentForm/PaymentListrik"
import NotLogin from "./pages/NotLogin/NotLogin";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PublicRoute from "./components/privateRoute/PublicRoute";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "./store/userSlice";
import ReactLoading from "react-loading";

function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  console.log(cookies.token);
  useEffect(() => {
    if (cookies.token !== null) {
      const instance = axios.create({
        baseURL: "http://localhost:8080/users/auth",
        timeout: 1000,
        headers: { Authorization: `bearer ${cookies.token}` },
      });
      instance
        .get()
        .then((res) => {
          dispatch(
            setData({
              id: res.data.data.id,
              name: res.data.data.name,
              email: res.data.data.email,
              phone: res.data.data.phone,
              token: cookies.token,
              isLogin: true,
            })
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "err");
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <ReactLoading
        type={"spokes"}
        color={"#83C5BE"}
        height={175}
        width={175}
        className="mx-auto mt-32"
      />
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/transaction" element={<PrivateRoute />}>
          <Route path="/transaction" element={<ListHistory />} />
        </Route>
        <Route path="/transaction-detail" element={<PrivateRoute />}>
          <Route path="/transaction-detail" element={<DetailHistory />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileMenu />} />
        </Route>
        <Route path="/edit-profile" element={<PrivateRoute />}>
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path="/change-password" element={<PrivateRoute />}>
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/checkout-pulsa" element={<PrivateRoute />}>
          <Route path="/checkout-pulsa" element={<CheckoutPulsa />} />
        </Route>
        <Route path="/checkout-paket" element={<PrivateRoute />}>
          <Route path="/checkout-paket" element={<CheckoutPaket />} />
        </Route>
        <Route path="/checkout-PDAM" element={<PrivateRoute />}>
          <Route path="/checkout-PDAM" element={<CheckoutAir />} />
        </Route>
        <Route path="/checkout-listrik" element={<PrivateRoute />}>
          <Route path="/checkout-listrik" element={<CheckoutListrik />} />
        </Route>
        <Route path="/payment-1" element={<PrivateRoute />}>
          <Route path="/payment-1" element={<Payment1 />} />
        </Route>
        <Route path="/payment-2" element={<PrivateRoute />}>
          <Route path="/payment-2" element={<Payment2 />} />
        </Route>
        <Route path="/payment-3" element={<PrivateRoute />}>
          <Route path="/payment-3" element={<Payment3 />} />
        </Route>
        <Route path="/not-login" element={<NotLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
