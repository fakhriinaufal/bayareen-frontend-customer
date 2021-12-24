import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/HeaderMain";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../assets/img/MainBanner.png";
import simpati from "../../assets/img/simpati.png";
import xl from "../../assets/img/xl.png";

import Category from "./Category";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Home(props) {
  return (
    <Layout head={<Header />} nav={<Navbar />}>
      <div className="flex flex-col">
        <img src={Banner} alt="banner" className="mt-16 rounded-lg h-36" />
        <div className="mt-6 mb-2 text-dark-green font-bold">Categories</div>
        <div className="bg-light-gray flex flex-wrap rounded-lg items-center">
          {props.data.map((item) => (
            <Category key={item.id} data={item} />
          ))}
        </div>
        <div className="mt-6 mb-2 text-dark-green font-bold">New Products</div>

        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <div className="bg-light-gray flex rounded-lg items-center px-3 py-2 w-56">
              <div className="inline-flex items-center">
                <img src={simpati} alt="simpati" />
                <div>Pulsa 50.000</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light-gray flex rounded-lg items-center px-3 py-2 w-56">
              <div className="inline-flex items-center">
                <img src={xl} alt="xl" className=" mr-4" />
                <div>Pulsa 50.000</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mb-28"></div>
      </div>
    </Layout>
  );
}
