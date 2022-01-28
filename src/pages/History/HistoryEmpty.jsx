import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import empty from "../../assets/img/empty.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col items-center text-dark-green ">
        <div className="mt-12">History Empty</div>
        <img src={empty} alt="kosong" className="mt-4 w-48 h-48" />
        <div className="mt-4">Transaction Not Found</div>
        <div className="mt-2 text-xs">
          You don't have any transaction yet :(
        </div>
        <Button
          text="Home"
          className="bg-white border border-dark-green text-sm text-dark-green hover:text-white mt-5 w-56"
          onClick={() => navigate("/")}
        />
      </div>
    </Layout>
  );
}
