import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import notlogin from "../../assets/img/notlogin.svg";
import { Link } from "react-router-dom";

export default function NotLogin() {
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col items-center text-dark-green text-center">
        <img src={notlogin} alt="NotLogin" className="mt-6" />
        <div className="font-bold text-lg">You haven't login yet</div>
        <div className="mt-4">
          Please login or register account first before accessing all features
          from Bayareen
        </div>
        <div className="flex flex-row mt-12">
          <Link to="/register" className="mr-5">
            <Button
              text={"Sign Up"}
              className="bg-white border border-dark-green text-dark-green hover:text-white h-[54.7px] w-32"
            />
          </Link>
          <Link to="/login">
            <Button text={"Sign In"} className="h-[54px] w-32" />
          </Link>
        </div>
        <div className="mb-20"></div>
      </div>
    </Layout>
  );
}
