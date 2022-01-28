import HeaderSecond from "../../components/Header/HeaderSecond";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import registerImg from "../../assets/img/register.svg";
import useRegisterAccount from "../../hooks/useRegisterAccount";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import useCapitalize from "../../hooks/useCapitalize";

export default function Register() {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regexPhone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

  const { registerAccount, loading, error } = useRegisterAccount();

  const submitHandler = (data) => {
    if (data.password !== data.confirm) {
      return setErr("Password doesn't match");
    }
    setErr("");
    const object = {
      name: data.username,
      phone_number: data.phone,
      email: data.email,
      password: data.password,
    };
    registerAccount(object);
  };

  return (
    <Layout head={<HeaderSecond />}>
      <div className="pt-12">
        <img src={registerImg} alt="register" className="mx-auto w-min" />
      </div>
      <h2 className="text-3xl text-dark-green text-center ">Create Account</h2>
      <p className="text-sm text-gray-400 text-center pt-1 pb-2">
        please register to get started
      </p>
      <form className="pb-5" onSubmit={handleSubmit(submitHandler)}>
        <Input
          name={"username"}
          text={"Username"}
          register={register}
          required
          requiredMsg={"Name can't be empty"}
        />
        {errors.username?.type === "required" && (
          <span className="text-red-500 ml-1 text-sm">
            {errors.username?.message}
          </span>
        )}
        <Input
          name={"phone"}
          type={"number"}
          text={"Phone Number"}
          register={register}
          required
          requiredMsg={"Phone number can't be empty"}
          regex={regexPhone}
        />
        {errors.phone?.type === "required" && (
          <p className="text-red-500 ml-1 text-sm">{errors.phone?.message}</p>
        )}
        {errors.phone?.type === "pattern" && (
          <p className="text-red-500 ml-1 text-sm">Format number isn't valid</p>
        )}
        <Input
          name={"email"}
          type={"email"}
          text={"Email"}
          register={register}
          required
          requiredMsg={"Email can't be empty"}
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500 ml-1 text-sm">
            {errors.email?.message}
          </span>
        )}
        <Input
          name={"password"}
          type={"password"}
          text={"Password"}
          register={register}
          required
          requiredMsg={"Password can't be empty"}
        />
        {errors.password?.type === "required" && (
          <span className="text-red-500 ml-1 text-sm">
            {errors.password?.message}
          </span>
        )}
        <Input
          name={"confirm"}
          type={"password"}
          text={"Confirm Password"}
          register={register}
          required
          requiredMsg={"Confirm password can't be empty"}
        />
        {errors.confirm?.type === "required" && (
          <span className="text-red-500 ml-1 text-sm">
            {errors.confirm?.message}
          </span>
        )}
        {err !== "" && <p className="text-red-500 ml-1 text-sm">{err}</p>}
        {error && (
          <p className="text-red-500 ml-1 text-sm">
            {useCapitalize(error.message)}
          </p>
        )}
        {!loading ? (
          <Button text={"submit"} className="mt-10 mx-auto" />
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
