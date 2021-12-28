import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import NotLogin from "../NotLogin/NotLogin";

export default function CheckoutListrik() {
  const isLogin = false;
  if (!isLogin) return <NotLogin />;
  const navigate = useNavigate();
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Listrik
        </div>
        <form action="" className="">
          <Input text={"Nomor Meter PLN"} type={"number"} />
          <Input text={"Nomor Handphone"} type={"number"} />
          <Button
            onClick={() => navigate("/payment-2")}
            text={"Checkout"}
            className={"mt-10"}
          />
        </form>
      </div>
    </Layout>
  );
}
