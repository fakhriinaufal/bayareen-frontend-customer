import HeaderSecond from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import useUpdatePassword from "../../hooks/useUpdatePassword";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const userId = useSelector((state) => state.user.data.id);

  const {
    updatePassword,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useUpdatePassword();

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
    setError("");
    updatePassword(
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      userId
    );
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
        {errorUpdate && <p className="text-sm text-red-500">{errorUpdate.message}</p>}
        {!loadingUpdate ? (
          <Button text={"Submit"} className="mt-5" />
        ) : (
          <ReactLoading
            type={"spokes"}
            color={"#83C5BE"}
            height={50}
            width={50}
            className="mx-auto mt-10"
          />
        )}
      </form>
    </Layout>
  );
}
