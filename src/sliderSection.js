// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section className="container">
        <div className="row">
      <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          // disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
          <div className="col-md-6 col-xm-12">
            <SwiperSlide><img src="img/slider1.png" alt="" className="sliderImg" /></SwiperSlide>
            <SwiperSlide><img src="img/slider2.png" alt="" className="sliderImg" /></SwiperSlide>
            <SwiperSlide><img src="img/bohikoScore.png" alt="" className="sliderImg" /></SwiperSlide>
          </div>
      </Swiper>
      {/* <div className="col-md-6 col-xm-12 bg-dark">
            <h1> Hello There</h1>
          </div> */}
        </div>
    </section >

  );
}
