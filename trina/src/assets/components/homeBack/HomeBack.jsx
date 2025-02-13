import "./HomeBack.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import hero from "./../../../img/hero.png";
import hero3 from "./../../../img/hero3.png";
import size4 from "./../../../img/size4.png";

const HomeBack = () => {
  const slides = [
    { id: 1, image: hero3 },
    { id: 2, image: hero },
  ];

  return (
    <div className="w-full h-[600px] lg:h-[570px] mt-[80px] relative">
      {/* Verifica se a tela é menor que md (dispositivo móvel) */}
      <div className="block md:hidden w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${size4})`,
          filter: "brightness(90%)",
        }}>
      </div>
      
      {/* Exibe o Swiper apenas em telas maiores que md */}
      <div className="hidden md:block h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={900}
          navigation={true}
          pagination={{ clickable: true }}
          className="h-full w-full"
          onSwiper={(swiper) => swiper.slideTo(0)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center transition-opacity duration-800 ease-in-out opacity-100"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  filter: "brightness(95%)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Estilizando as setas de navegação */}
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            color: rgba(255, 255, 255, 0.9);
            transition: color 0.3s ease-in-out, transform 0.2s;
            transform: scale(1);
          }
          .swiper-button-prev:hover, .swiper-button-next:hover {
            color: rgba(255, 255, 255, 1);
            transform: scale(1.1);
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.8);
            width: 10px;
            height: 10px;
            opacity: 0.7;
            transition: opacity 0.3s;
          }
          .swiper-pagination-bullet-active {
            background: rgba(255, 255, 255, 1);
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default HomeBack;
