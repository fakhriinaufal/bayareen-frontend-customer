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
import { historyProps, homeProps } from "./mockdata";
import Payment1 from "./pages/PaymentForm/PaymentPulsa";
import Payment2 from "./pages/PaymentForm/PaymentListrik";
import NotLogin from "./pages/NotLogin/NotLogin";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/transaction"
          element={<ListHistory data={historyProps} />}
        />
        <Route path="/" element={<Home data={homeProps} />} />
        <Route path="/profile" element={<ProfileMenu />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout-pulsa" element={<CheckoutPulsa />} />
        <Route path="/checkout-paket" element={<CheckoutPaket />} />
        <Route path="/checkout-PDAM" element={<CheckoutAir />} />
        <Route path="/checkout-listrik" element={<CheckoutListrik />} />
        <Route path="/payment-1" element={<Payment1 />} />
        <Route path="/payment-2" element={<Payment2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
