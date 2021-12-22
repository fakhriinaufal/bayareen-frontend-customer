import Layout from "../../components/Layout/Layout";
import Header2 from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import History from "./History";

export default function ListHistory(props) {
  return (
    <Layout head={<Header2 />} nav={<Navbar />}>
      <div className="flex flex-col">
        <div className="mt-16 text-dark-green font-bold font-main">
          Last Purchased
        </div>
        <div className="flex flex-col items-center gap-1 mt-5">
          {props.data.map((item) => (
            <History key={item.id} data={item} />
          ))}
        </div>
        <div className="mb-24"></div>
      </div>
    </Layout>
  );
}
