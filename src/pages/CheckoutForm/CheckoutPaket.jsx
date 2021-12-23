import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown"
import { useState } from "react";

export default function CheckoutPaket() {
  const [provider, setProvider] = useState({
    val: null,
    text: "cari provider",
  })
  const [nominal, setNominal] = useState({
    val: null,
    text: "100xxxx",
  })

  // const mock = [
  //   {
  //       text: "Option 1",
  //       val: 1,
  //   },
  //   {
  //       text: "Option 2",
  //       val: 2,
  //   }
  // ]
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Isi Paket
        </div>
        <form action="" className="">
          <Input text={"Nomor"} type={"number"} />
          <Dropdown text={"Provider Pulsa"} name={"provider"} list={mock} value={provider} containerClassName={"mt-5"} onChange={setProvider} />
          <Dropdown text={"Nominal"} name={"nominal"} list={mock} value={nominal} containerClassName={"mt-5"} onChange={setNominal} />
          <Button text={"Checkout"} className={"mt-10"} />
        </form>
      </div>
    </Layout>
  );
}
