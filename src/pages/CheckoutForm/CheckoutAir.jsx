import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import { mockCheckoutOption } from "../../mockdata";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CheckoutAir() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [provider, setProvider] = useState({
    val: null,
    text: "Select",
  });
  const navigate = useNavigate();
  return (
    <Layout head={<HeaderSecond />}>
      <div className="flex flex-col">
        <div className="mt-16 text-2xl text-dark-green font-bold">
          Pembayaran Air PDAM
        </div>
        <form action="" className="">
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
          <Dropdown
            text={"Wilayah"}
            name={"wilayah"}
            list={mockCheckoutOption}
            value={provider}
            containerClassName={"mt-5"}
            onChange={setProvider}
          />
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
