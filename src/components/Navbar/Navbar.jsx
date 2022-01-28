import React from "react";
import home from "../../assets/icon/Home.svg";
import transaction from "../../assets/icon/Transaction.svg";
import profile from "../../assets/icon/Profile.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-light-gray bottom-0 min-w-full h-16 absolute text-dark-green font-semibold flex justify-around items-center pt-2 shadow-navbar">
      <NavLink
        to="/"
        className={(param) =>
          param.isActive ? "font-bold border-b-2 border-dark-green" : ""
        }
      >
        <div className="flex flex-col justify-center items-center">
          <img className="w-5 mb-1" src={home} alt="home-icon" />
          <p className="text-sm">Home</p>
        </div>
      </NavLink>
      <NavLink
        to="/transaction"
        className={(param) =>
          param.isActive ? "font-bold border-b-2 border-dark-green" : ""
        }
      >
        <div className="flex flex-col justify-center items-center">
          <img className="w-5 mb-1" src={transaction} alt="transaction-icon" />
          <p className="text-sm">Transaction</p>
        </div>
      </NavLink>
      <NavLink
        to="/profile"
        className={(param) =>
          param.isActive ? "font-bold border-b-2 border-dark-green" : ""
        }
      >
        <div className="flex flex-col justify-center items-center">
          <img className="w-5 mb-1" src={profile} alt="profile-icon" />
          <p className="text-sm">Profile</p>
        </div>
      </NavLink>
    </div>
  );
}
