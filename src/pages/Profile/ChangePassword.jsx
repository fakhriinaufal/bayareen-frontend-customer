import HeaderSecond from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      setError("Required field must be filled");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "old-password") {
      setOldPassword(value);
    }
    if (name === "new-password") {
      setNewPassword(value);
    }
    if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };
  return (
    <Layout head={<HeaderSecond />} nav={<Navbar />}>
      <div className="pt-14"></div>
      <form onSubmit={submitHandler}>
        <Input
          text={"Password"}
          type={"password"}
          name={"old-password"}
          value={oldPassword}
          onChange={onChange}
        />
        <Input
          text={"New Password"}
          type={"password"}
          name={"new-password"}
          value={newPassword}
          onChange={onChange}
        />
        <Input
          text={"Re-enter New Password"}
          type={"password"}
          name={"confirm-password"}
          value={confirmPassword}
          onChange={onChange}
          containerClassName={"mb-4"}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button text={"Submit"} className={"mt-5"} />
      </form>
    </Layout>
  );
}
