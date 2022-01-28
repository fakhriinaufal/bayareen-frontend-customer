import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import useCapitalize from "../../hooks/useCapitalize";
import useGetTransactionsById from "../../hooks/useGetTransactionsById";
import ReactLoading from "react-loading";
import NotFound from "../NotFound/NotFound";

export default function DetailHistory() {
  const { id } = useParams("id");

  const { convertData, loading, error } = useGetTransactionsById(parseInt(id));

  if (convertData.name === "notFound") {
    return <NotFound />;
  }

  if (loading) {
    return (
      <ReactLoading
        type={"spokes"}
        color={"#83C5BE"}
        height={175}
        width={175}
        className="mx-auto mt-32"
      />
    );
  }

  const displayPrice = convertData.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    window.location.replace(convertData.invoice_url);
  };

  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <h3 className="pt-16 text-dark-green text-2xl font-semibold">
        Detail Transaction
      </h3>
      <form onSubmit={submitHandler} className="">
        <Input value={convertData.name} text={"Product Name"} disabled={true} />
        <Input value={displayPrice} text={"Price"} disabled={true} />
        <Input value={convertData.status} text={"Status"} disabled={true} />
        <Input
          value={convertData.created_at}
          text={"Transaction Date"}
          disabled={true}
        />
        {error && (
          <p className="text-red-500 ml-1 text-sm">
            {useCapitalize(error.message)}
          </p>
        )}
        {convertData.status === "PENDING" ? (
          <Button text={"Click to Pay"} className="mt-10" />
        ) : (
          <Button
            text={"Click to Pay"}
            className="mt-10 opacity-50"
            disabled={true}
          />
        )}
      </form>
    </Layout>
  );
}
