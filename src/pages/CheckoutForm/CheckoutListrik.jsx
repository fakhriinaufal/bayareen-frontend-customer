import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CheckoutListrik() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Listrik
        </div>
        <form action="" className="">
          <Input
            name={"number1"}
            text={"Nomor Meter PLN"}
            type={"number"}
            register={register}
            required
            requiredMsg={"Number must be filled"}
          />
          {errors.number1?.type === "required" && (
            <span className="text-red-500 ml-1 text-sm">
              {errors.number1?.message}
            </span>
          )}
          <Input
            name={"number2"}
            text={"Nomor Handphone"}
            type={"number"}
            register={register}
            required
            requiredMsg={"Number must be filled"}
          />
          {errors.number2?.type === "required" && (
            <span className="text-red-500 ml-1 text-sm">
              {errors.number2?.message}
            </span>
          )}
          <Button
            onClick={() => navigate("/payment-2")}
            text={"Checkout"}
            className={"mt-10"}
          />
        </form>
      </div>
    </Layout>
  );
}
