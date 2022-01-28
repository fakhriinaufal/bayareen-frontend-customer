import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetPrice from "../../hooks/useGetPrice";
import useGetCategoriesByName from "../../hooks/useGetCategoriesByName";
import useCapitalize from "../../hooks/useCapitalize";

export default function CheckoutAir() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesByName("pdam");

  const { price, loading: loadingPrice, error: errorPrice } = useGetPrice();

  const submitHandler = (data, e) => {
    e.preventDefault();
    const newData = {
      number: data.number,
      catId: categories?.id,
      price: price,
    };
    navigate("/payment-2", { state: newData });
  };

  const validateButton =
    watch("number") === undefined || watch("number") === "";

  const error = errorPrice || errorCategories;

  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Air PDAM
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className="">
          <Input
            name={"number"}
            text={"Nomor Pelanggan"}
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
          {error && (
            <p className="text-red-500 ml-1 text-sm">
              {useCapitalize(error.message)}
            </p>
          )}
          {!validateButton && !loadingPrice && !loadingCategories ? (
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
