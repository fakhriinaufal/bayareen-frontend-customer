import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function PaymentListrik() {
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="pt-16"></div>
      <h3 className=" text-dark-green text-2xl font-semibold">Payment</h3>
      <form action="">
        <Input value={"08129836124"} text={"Nomor"} disabled={true} />
        <Input value={"Rp100.000"} text={"Total Tagihan"} disabled={true} />
        <Input value={"Rp102.000"} text={"Total Price"} disabled={true} />
        <Button text={"Pay"} className={"mt-10"} />
      </form>
    </Layout>
  );
}
