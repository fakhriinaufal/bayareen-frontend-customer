import HeaderSecond from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function ChangePassword() {
  return (
    <Layout head={<HeaderSecond />} nav={<Navbar />}>
      <div className="pt-14"></div>
      <form action="">
        <Input text={"Password"} type={"password"} />
        <Input text={"New Password"} type={"password"} />
        <Input text={"Re-enter New Password"} type={"password"} />
        <Button text={"Submit"} className={"mt-10"} />
      </form>
    </Layout>
  );
}
