import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import Category from "./Category";
import Banner from "../../assets/img/MainBanner.png";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import Swiper core and required modules
import SwiperCore, { FreeMode } from "swiper";
import { mockHomeNew } from "../../mockdata";

SwiperCore.use([FreeMode]);
export default function Home(props) {
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col">
        <img src={Banner} alt="banner" className="mt-16 rounded-lg h-36" />
        <div className="mt-6 mb-2 text-dark-green font-bold">Categories</div>
        <div className="bg-light-gray flex flex-wrap rounded-lg items-center p-2">
          {props.data.map((item) => (
            <Category key={item.id} data={item} />
          ))}
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
