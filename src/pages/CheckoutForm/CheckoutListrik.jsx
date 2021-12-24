import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function CheckoutListrik() {
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Listrik
        </div>
        <form action="" className="">
          <Input text={"Nomor Meter PLN"} type={"number"} />
          <Input text={"Nomor Handphone"} type={"number"} />
          <Button text={"Checkout"} className={"mt-10"} />
        </form>
      </div>
    </Layout>
  );
}
