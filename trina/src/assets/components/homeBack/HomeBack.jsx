import "./HomeBack.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Importação correta das imagens
import hero2 from "./../../../img/hero2.png";
import hero3 from "./../../../img/hero3.png";
import bg from "./../../../img/bg.jpg";

const HomeBack = () => {
  const slides = [
    { id: 1, image: hero2 },
    { id: 2, image: hero3 },
    { id: 3, image: bg },
  ];

  return (
    <div className="w-full h-[500px] lg:h-[700px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBack;
