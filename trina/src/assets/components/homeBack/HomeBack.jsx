import "./HomeBack.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Importação correta das imagens
import hero5 from "./../../../img/hero5.png";
import hero3 from "./../../../img/hero3.png";
import bg from "./../../../img/bg.jpg";

const HomeBack = () => {
  const slides = [
    { id: 1, image: hero3 },
    { id: 2, image: hero5 },
    { id: 3, image: bg },
    { id: 2, image: hero5 },
  ];

  return (
    <div className="w-full h-[500px] lg:h-[700px] mt-[80px] relative">
     <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      loop={true} // Garante que o loop funcione corretamente
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={700}
      navigation={true}
      pagination={{ clickable: true }}
      className="h-full w-full"
      onSwiper={(swiper) => swiper.slideTo(0)} // Garante que o primeiro slide seja carregado corretamente
      >
      {slides.map((slide, index) => (
  <SwiperSlide key={slide.id}>
    <div
      className="w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out opacity-100"
      style={{
        backgroundImage: `url(${slide.image})`,
        filter: "brightness(95%)",
      }}
    />
  </SwiperSlide>
))}

      </Swiper>

      {/* Estilizando as setas de navegação */}
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            color: rgba(255, 255, 255, 0.8);
            transition: color 0.3s ease-in-out, transform 0.2s;
            transform: scale(1);
          }
          .swiper-button-prev:hover, .swiper-button-next:hover {
            color: rgba(255, 255, 255, 1);
            transform: scale(1.1);
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.7);
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
