import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";

export default function PaymentListrik() {
  const { state } = useLocation();
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="pt-16"></div>
      <h3 className=" text-dark-green text-2xl font-semibold">Payment</h3>
      <form action="">
        <Input
          value={state.number}
          text={state.catId === 3 ? "Nomor PDAM" : "Nomor Meter PLN"}
          disabled={true}
        />
        <Input value={"Rp100.000"} text={"Total Tagihan"} disabled={true} />
        <Button text={"Pay"} className={"mt-10"} />
      </form>
    </Layout>
  );
}
