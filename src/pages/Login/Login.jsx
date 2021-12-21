import HeaderSecond from "../../components/Header/HeaderSecond";
import Input from '../../components/Input/Input'
import Layout from '../../components/Layout/Layout'
import loginImg from "../../assets/img/login.svg"
import Button from "../../components/Button/Button";

export default function Login() {
    return (
        <Layout head={<HeaderSecond/>}>
            <div className="pt-12">
                <img src={loginImg} alt="register" className="mx-auto w-min pb-2" />
            </div>
            <h2 className="text-3xl text-dark-green text-center ">Welcome Back</h2>
            <p className="text-sm text-gray-400 text-center pt-1 pb-2">please sign-in to continue</p>
            <form className="pb-5" action="">
                <Input name={"email"} type={"email"} text={"Email"} />
                <Input name={"password"} type={"password"} text={"Password"} />
                <Button text={"Login"} className="mt-10" />
            </form>
        </Layout>
    )
}
