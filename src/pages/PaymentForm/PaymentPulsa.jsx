import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import useCreateTransaction from "../../hooks/useCreateTransaction";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function PaymentPulsa() {
  const { state } = useLocation();

  const userId = useSelector((state) => state.user.data.id);
  const { createTransaction, loading, error, url } = useCreateTransaction();

  const displayPrice = state.nominal.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const object = {
      user_id: userId,
      product_id: state.nominal.val,
    };
    createTransaction(object);
  };
  if (url !== "") {
    console.log("test");
    window.location.replace(url);
  }

  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <h3 className="pt-16 text-dark-green text-2xl font-semibold">Payment</h3>
      <form onSubmit={submitHandler}>
        <Input value={state.no} text={"Nomor"} disabled={true} />
        <Input value={state.provider.text} text={"Provider"} disabled={true} />
        <Input value={state.nominal.text} text={"Nominal"} disabled={true} />
        <Input
          value={displayPrice}
          text={"Total Price"}
          disabled={true}
        />
        {!loading ? (
          <Button text={"Pay"} className={"mt-10"} />
        ) : (
          <ReactLoading
            type={"spokes"}
            color={"#83C5BE"}
            height={50}
            width={50}
            className="mx-auto mt-10"
          />
        )}
        {error && <p>{error.message}</p>}
      </form>
    </Layout>
  );
}
