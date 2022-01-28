import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import Category from "./Category";
import Banner from "../../assets/img/MainBanner.png";
import useGetCategories from "../../hooks/useGetCategories";
import ReactLoading from "react-loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { FreeMode } from "swiper";
import { mockHomeNew } from "../../mockdata";
import useCapitalize from "../../hooks/useCapitalize";

SwiperCore.use([FreeMode]);
export default function Home() {
  const { categories, loading, error } = useGetCategories();

  if (error) {
    return <p className="text-red-500">{useCapitalize(error.message)}</p>;
  }

  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col">
        <img src={Banner} alt="banner" className="mt-16 rounded-lg h-36" />
        <div className="mt-6 mb-2 text-dark-green font-bold">Categories</div>
        <div className="bg-light-gray flex flex-wrap rounded-lg items-center p-2">
          {!loading ? (
            categories?.map((item) => <Category key={item.val} data={item} />)
          ) : (
            <ReactLoading
              type={"spokes"}
              color={"#83C5BE"}
              height={50}
              width={50}
              className="mx-auto"
            />
          )}
        </div>
        <div className="mt-6 mb-2 text-dark-green font-bold">New Products</div>

        <Swiper
          freeMode={true}
          className="mySwiper w-full"
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{ clickable: true }}
        >
          {mockHomeNew.map((data) => (
            <SwiperSlide key={data.id} style={{ width: "14rem" }}>
              <div className="bg-light-gray flex rounded-lg items-center px-3 py-2 w-56">
                <div className="inline-flex gap-2 items-center">
                  <img src={data.src} alt={data.alt} />
                  <div>{data.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mb-28"></div>
      </div>
    </Layout>
  );
}
