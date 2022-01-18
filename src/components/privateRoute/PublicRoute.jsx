import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const isLogin = useSelector((state) => state.user.data.isLogin);
  console.log(isLogin, "islogin");
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
