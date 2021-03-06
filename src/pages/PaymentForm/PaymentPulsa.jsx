import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useLocation, Navigate } from "react-router-dom";
import useCreateTransaction from "../../hooks/useCreateTransaction";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import useCapitalize from "../../hooks/useCapitalize";
import { useEffect } from "react";

export default function PaymentPulsa() {
  const { state } = useLocation();

  if (state === null || state === undefined || state === "") {
    return <Navigate to="/" />;
  }

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
    window.location.replace(url);
  }
  
  useEffect(() => {
    
  })

  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <h3 className="pt-16 text-dark-green text-2xl font-semibold">Payment</h3>
      <form onSubmit={submitHandler}>
        <Input value={state.no} text={"Nomor"} disabled={true} />
        <Input value={state.provider.text} text={"Provider"} disabled={true} />
        <Input value={state.nominal.text} text={"Nominal"} disabled={true} />
        <Input value={displayPrice} text={"Total Price"} disabled={true} />
        {error && (
          <p className="text-red-500 ml-1 text-sm">
            {useCapitalize(error.message)}
          </p>
        )}
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
      </form>
    </Layout>
  );
}
