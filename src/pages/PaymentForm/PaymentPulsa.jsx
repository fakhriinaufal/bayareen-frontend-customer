import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/HeaderSecond"
import Navbar from "../../components/Navbar/Navbar"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function PaymentPulsa() {
    return (
        <Layout head={<Header />} nav={<Navbar />}>
            <h3 className="mt-16 text-dark-green text-2xl font-semibold">Payment</h3>
            <form action="">
                <Input value={"081297149324"} text={"Nomor"} disabled={true} />
                <Input value={"Telkomsel"} text={"Provider"} disabled={true} />
                <Input value={"Rp100.000"} text={"Nominal"} disabled={true} />
                <Input value={"Rp102.500"} text={"Total Price"} disabled={true} />
                <Button text={"Pay"} className={"mt-10"} />
            </form>
        </Layout>
    )
}
