import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetProvider from "../../hooks/useGetProviders";
import useGetProducts from "../../hooks/useGetProducts";
import { useLocation } from "react-router-dom";

export default function CheckoutPulsa() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [provider, setProvider] = useState({
    val: null,
    text: "cari provider",
  });
  const [nominal, setNominal] = useState({
    val: null,
    text: "100xxxx",
  });

  const {
    providers,
    loading: loadingProv,
    error: errorProv,
  } = useGetProvider(state);
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = useGetProducts(provider.val);

  const submitHandler = (data, e) => {
    e.preventDefault();
    const newData = {
      no: data.number,
      provider: provider,
      nominal: nominal,
    };
    navigate("/payment-1", { state: newData });
  };

  const error = errorProv || errorProducts;

  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Isi Pulsa
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="">
          <Input
            name={"number"}
            text={"Nomor"}
            type={"number"}
            register={register}
            required
            requiredMsg={"Number must be filled"}
          />
          {errors.number?.type === "required" && (
            <span className="text-red-500 ml-1 text-sm">
              {errors.number?.message}
            </span>
          )}
          <Dropdown
            text={"Provider Pulsa"}
            name={"provider"}
            list={providers}
            value={provider}
            containerClassName={"mt-5"}
            onChange={setProvider}
          />
          <Dropdown
            text={"Nominal"}
            name={"nominal"}
            list={products}
            value={nominal}
            containerClassName={"mt-5"}
            onChange={setNominal}
          />
          {error && <p>{error.message}</p>}
          {!loadingProv && !loadingProducts && nominal.val !== null ? (
            <Button text={"Checkout"} className="mt-10" />
          ) : (
            <Button
              text={"Checkout"}
              className="mt-10 opacity-50"
              disabled={true}
            />
          )}
        </form>
      </div>
    </Layout>
  );
}
