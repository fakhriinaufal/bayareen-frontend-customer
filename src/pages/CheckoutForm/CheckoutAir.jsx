import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown"

export default function CheckoutAir() {
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Air PDAM
        </div>
        <form action="" className="">
          <Input text={"Nomor Pelanggan"} type={"number"} />
          {/* ini tempat dropdown */}
          <Button text={"Checkout"} className={"mt-10"} />
        </form>
      </div>
    </Layout>
  );
}
