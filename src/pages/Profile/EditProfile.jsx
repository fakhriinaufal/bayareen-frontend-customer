import Layout from "../../components/Layout/Layout";
import HeaderSecond from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function EditProfile() {
  const data = useSelector((state) => state.user.data);

  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === data.name && phone === data.phone && email === data.email) {
      setError("Nothing changes");
      return;
    }
    if (name === "" || phone === 0 || email === "") {
      setError("Required field must be filled");
      return;
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      setName(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <Layout head={<HeaderSecond />} nav={<Navbar />}>
      <div className="pt-14"></div>
      <form onSubmit={submitHandler}>
        <Input
          name={"name"}
          text={"Name"}
          onChange={changeHandler}
          value={name}
        />
        <Input
          name={"phone"}
          text={"Phone Number"}
          type={"number"}
          onChange={changeHandler}
          value={phone}
        />

        <Input
          name={"email"}
          text={"Email"}
          type={"email"}
          onChange={changeHandler}
          value={email}
          containerClassName={"mb-4"}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button text={"Submit"} className={"mt-5"} />
      </form>
    </Layout>
  );
}
