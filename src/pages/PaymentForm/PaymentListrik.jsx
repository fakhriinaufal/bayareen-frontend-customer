import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useCreateTransaction from "../../hooks/useCreateTransaction";
import useGetProductByCatId from "../../hooks/useGetProductByCatId";
import ReactLoading from "react-loading";

export default function PaymentListrik() {
  const { state } = useLocation();
  const userId = useSelector((state) => state.user.data.id);

  const {
    product,
    loading: loadingProduct,
    error: errorProduct,
  } = useGetProductByCatId(state.catId);
  const { createTransaction, loading, error, url } = useCreateTransaction();

  const displayPrice = state.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const object = {
      user_id: userId,
      product_id: product.id,
      price: state.price,
    };
    createTransaction(object);
  };

  if (url !== "") {
    window.location.replace(url);
  }

  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="pt-16"></div>
      <h3 className=" text-dark-green text-2xl font-semibold">Payment</h3>
      <form onSubmit={submitHandler}>
        <Input value={state.number} text={"Nomor Meter PLN"} disabled={true} />
        <Input value={displayPrice} text={"Total Tagihan"} disabled={true} />
        {errorProduct && (
          <p className="text-red-500 ml-1 text-sm">{errorProduct.message}</p>
        )}
        {error && <p className="text-red-500 ml-1 text-sm">{error.message}</p>}
        {!loadingProduct && !loading ? (
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
