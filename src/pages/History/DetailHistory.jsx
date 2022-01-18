import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import useGetPaymentMethods from "../../hooks/useGetPaymentMethod";

export default function DetailHistory() {
  const { state } = useLocation();
  const { convertPaymentMethod, loading, error } = useGetPaymentMethods(
    state.payment_method_id
  );
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <h3 className="pt-16 text-dark-green text-2xl font-semibold">
        Detail Transaction
      </h3>
      <form action="" className="">
        <Input value={state.name} text={"Product Name"} disabled={true} />
        <Input value={state.price} text={"Price"} disabled={true} />
        <Input value={state.status} text={"Status"} disabled={true} />
        <Input
          value={state.created_at}
          text={"Transaction Date"}
          disabled={true}
        />
        <Input
          value={loading ? "loading..." : convertPaymentMethod.name}
          text={"Payment Method"}
          disabled={true}
        />
        {convertPaymentMethod.name !== "Unpaid" ? (
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
