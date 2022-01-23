import Layout from "../../components/Layout/Layout";
import Header2 from "../../components/Header/HeaderSecond";
import Navbar from "../../components/Navbar/Navbar";
import History from "./History";
import HistoryEmpty from "./HistoryEmpty";
import useGetTransactions from "../../hooks/useGetTransactions";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function ListHistory() {
  const userId = useSelector((state) => state.user.data.id);
  const { convertData, loading, error } = useGetTransactions(userId);

  if (error) {
    return <p className="text-red-500">{error.message} </p>;
  }
  if (!loading && convertData.length === 0) {
    return <HistoryEmpty />;
  }

  return (
    <Layout head={<Header2 />} nav={<Navbar />}>
      <div className="flex flex-col">
        <div className="pt-16 text-dark-green text-2xl font-semibold">
          Last Purchased
        </div>
        {loading ? (
          <ReactLoading
            type={"spokes"}
            color={"#83C5BE"}
            height={175}
            width={175}
            className="mx-auto mt-32"
          />
        ) : (
          <div className="flex flex-col items-center gap-1 mt-5">
            {convertData?.map((item) => (
              <History key={item.id} data={item} id={item.id} />
            ))}
          </div>
        )}

        <div className="mb-24"></div>
      </div>
    </Layout>
  );
}
