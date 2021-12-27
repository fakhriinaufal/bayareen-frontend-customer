import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import { mockCheckoutOption } from "../../mockdata";
import { useNavigate } from "react-router-dom";

export default function CheckoutAir() {
  const [provider, setProvider] = useState({
    val: null,
    text: "Select",
  });
  const navigate = useNavigate();
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Air PDAM
        </div>
        <form action="" className="">
          <Input text={"Nomor Pelanggan"} type={"number"} />
          <Dropdown
            text={"Wilayah"}
            name={"wilayah"}
            list={mockCheckoutOption}
            value={provider}
            containerClassName={"mt-5"}
            onChange={setProvider}
          />
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
