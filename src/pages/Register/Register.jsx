import HeaderSecond from "../../components/Header/HeaderSecond";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import registerImg from "../../assets/img/register.svg"

export default function Register() {
    return (
        <Layout head={<HeaderSecond/>}>
            <div className="pt-12">
                <img src={registerImg} alt="register" className="mx-auto w-min" />
            </div>
            <h2 className="text-3xl text-dark-green text-center ">Create Account</h2>
            <p className="text-sm text-gray-400 text-center pt-1 pb-2">please register to get started</p>
            <form className="pb-5" action="">
                <Input name={'username'} text={"Username"} />
                <Input name={'phone'} type={"number"} text={"Phone Number"}  />
                <Input name={'email'} type={"email"} text={"Email"} />
                <Input name={'password'} type={"password"} text={"Password"} />
                <Input name={'confirm'} type={"password"} text={"Confirm Password"} />
                <Button text="Submit" className='mt-10 mx-auto' />
            </form>
        </Layout>
    )
}
