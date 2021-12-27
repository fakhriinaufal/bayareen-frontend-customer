import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import { mockCheckoutOption } from "../../mockdata";
import { useNavigate } from "react-router-dom";

export default function CheckoutPulsa() {
  const [provider, setProvider] = useState({
    val: null,
    text: "cari provider",
  });
  const [nominal, setNominal] = useState({
    val: null,
    text: "100xxxx",
  });
  const navigate = useNavigate();
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Isi Pulsa
        </div>
        <form action="" className="">
          <Input text={"Nomor"} type={"number"} />
          <Dropdown
            text={"Provider Pulsa"}
            name={"provider"}
            list={mockCheckoutOption}
            value={provider}
            containerClassName={"mt-5"}
            onChange={setProvider}
          />
          <Dropdown
            text={"Nominal"}
            name={"nominal"}
            list={mockCheckoutOption}
            value={nominal}
            containerClassName={"mt-5"}
            onChange={setNominal}
          />
          <Button
            onClick={() => navigate("/payment-1")}
            text={"Checkout"}
            className={"mt-10"}
          />
        </form>
      </div>
    </Layout>
  );
}
