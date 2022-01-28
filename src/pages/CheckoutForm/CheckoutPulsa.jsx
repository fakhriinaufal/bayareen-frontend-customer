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
import useCapitalize from "../../hooks/useCapitalize";
import useGetCategoriesByName from "../../hooks/useGetCategoriesByName";

export default function CheckoutPulsa() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regexPhone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

  const [provider, setProvider] = useState({
    val: null,
    text: "cari provider",
  });
  const [nominal, setNominal] = useState({
    val: null,
    text: "100xxxx",
    price: 0,
  });

  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesByName("pulsa");

  const {
    providers,
    loading: loadingProv,
    error: errorProv,
  } = useGetProvider(categories?.id);

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

  const error = errorProv || errorProducts || errorCategories;

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
            regex={regexPhone}
          />
          {errors.number?.type === "required" && (
            <p className="text-red-500 ml-1 text-sm">
              {errors.number?.message}
            </p>
          )}
          {errors.number?.type === "pattern" && (
            <p className="text-red-500 ml-1 text-sm">
              Format number isn't valid
            </p>
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
          {error && (
            <p className="text-red-500 ml-1 text-sm">
              {useCapitalize(error.message)}
            </p>
          )}
          {!loadingCategories &&
          !loadingProv &&
          !loadingProducts &&
          nominal.val !== null ? (
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
