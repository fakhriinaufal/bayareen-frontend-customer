import Layout from "../../components/Layout/Layout"
import HeaderSecond from "../../components/Header/HeaderSecond"
import Navbar from "../../components/Navbar/Navbar"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function EditProfile() {
    return (
        <Layout head={<HeaderSecond />} nav={<Navbar />}>
            <form action="" className="mt-14">
                <Input text={"Name"} />
                <Input text={"Phone Number"} type={"number"} />
                <Input text={"Email"} />
                <Button text={"Submit"} className={"mt-10"} />
            </form>
        </Layout>
    )
}
