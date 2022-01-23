import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import loginImg from "../../assets/img/login.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLoginAccount from "../../hooks/useLoginAccount";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import useCapitalize from "../../hooks/useCapitalize";

export default function Login() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.data.isLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginAccount, loading, error } = useLoginAccount();
  const submitHandler = (data) => {
    loginAccount(data);
  };

  if (isLogin) {
    navigate("/");
  }
  return (
    <Layout head={<HeaderSecond />}>
      <div className="pt-12">
        <img src={loginImg} alt="register" className="mx-auto w-min pb-2" />
      </div>
      <h2 className="text-3xl text-dark-green text-center ">Welcome Back</h2>
      <p className="text-sm text-gray-400 text-center pt-1 pb-2">
        please sign-in to continue
      </p>
      <form className="pb-5" onSubmit={handleSubmit(submitHandler)}>
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
        {error && (
          <p className="text-red-500 ml-1 text-sm">
            {useCapitalize(error.message)}
          </p>
        )}
        {!loading ? (
          <Button text={"Login"} className="mt-10" />
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
