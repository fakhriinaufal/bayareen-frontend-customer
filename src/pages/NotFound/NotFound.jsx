import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import error from "../../assets/img/error.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center font-main">
        <img className="mt-12 w-60 h-60" src={error} alt="notfound" />
        <div className="mt-8 font-bold text-dark-green text-lg">
          Page Not Found
        </div>
        <Button
          text="Back to Home"
          className="bg-white border border-dark-green text-sm text-dark-green hover:text-white mt-8 w-60"
          onClick={() => navigate("/")}
        />
      </div>
    </Layout>
  );
}
