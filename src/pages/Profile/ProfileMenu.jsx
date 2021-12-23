import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import edit from "../../assets/icon/edit.svg";
import password from "../../assets/icon/password.svg";
import out from "../../assets/icon/out.svg";
import enter from "../../assets/icon/enter.svg";
import banner from "../../assets/img/profile.svg";
import { Link } from "react-router-dom";

export default function ProfileMenu({ name, onClick }) {
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col items-center text-dark-green gap-1.5">
        <div className="mt-16 mb-6 text-lg font-bold">Hi, {name}</div>
        <Link
          to="/edit-profile"
          className="flex bg-light-gray px-2 py-1 w-[21rem] items-center rounded"
        >
          <img src={edit} alt="edit" className="flex-none" />
          <div className="flex-grow ml-2">Edit Profile</div>
          <img src={enter} alt="enter" className="flex-none" />
        </Link>
        <Link
          to="/change-password"
          className="flex bg-light-gray px-2 py-1 w-[21rem] items-center rounded"
        >
          <img src={password} alt="password" className="flex-none" />
          <div className="flex-grow ml-2">Change Password</div>
          <img src={enter} alt="enter" className="flex-none" />
        </Link>
        <div
          className="flex bg-light-gray px-2 py-1 w-[21rem] items-center rounded cursor-pointer"
          onClick={onClick}
        >
          <img src={out} alt="out" className="flex-none" />
          <div className="flex-grow ml-2">Sign Out</div>
          <img src={enter} alt="enter" className="flex-none" />
        </div>
        <img src={banner} alt="banner" className="mt-10" />
      </div>
    </Layout>
  );
}
