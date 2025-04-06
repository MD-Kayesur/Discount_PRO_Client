 
 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useBannerData from '../../Hooks/usebannerData';
 
 
const Banner_Data = () => {



    const {disCountbanner}=useBannerData()
    console.log(disCountbanner)

const datas = [1,2,4,5,6]


    return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Image slides */}
 
{ disCountbanner?.map((banner, index) => (
        <SwiperSlide key={index}>
         <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner.image})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{banner.title} </h1>
      <p className="mb-5">
      { banner.description}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner_Data;