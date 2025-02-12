import { useState, useEffect } from "react";

const BestProdCard = ({
  img1,
  img2,
  img3,
  category,
  price, 
}) => {
  const [currentImg, setCurrentImg] = useState(img1);
  const images = [img1, img2, img3];
  let imageIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      imageIndex = (imageIndex + 1) % images.length;
      setCurrentImg(images[imageIndex]);
    }, 2000); // Troca a imagem a cada 2 segundos

    return () => clearInterval(interval); // Limpeza do intervalo ao desmontar o componente
  }, [images]);

  return (
    <div className="transition-all flex flex-col items-center justify-center duration-500 dark:text-white mb-10 md:mb-16 lg:md:mb-16">
      <div className="overflow-hidden">
        <img
          src={currentImg}
          alt="No image"
          className="mx-auto h-[360px] w-[340px] md:h-[220px] md:w-[210px] lg:h-[350px] lg:w-[400px] 
          cursor-pointer rounded-sm sm:transition sm:duration-700 sm:hover:skew-x-2 sm:hover:scale-110"
        />
      </div>

      <div className="flex gap-2 md:gap-1 lg:gap-2 py-4">
        <h1 className="line-clamp-1 font-extrabold text-xs md:text-xs lg:text-sm">{category}</h1>
        <h1 className="line-clamp-1 text-xs md:text-xs lg:text-sm">a partir de</h1>
        <h1 className="line-clamp-1 font-extrabold text-xs md:text-xs lg:text-sm">{price} Akz</h1>
      </div>
       <span className="cursor-pointer py-2 px-7 md:py-2 mg:px-5 lg:py-2 lg:px-7 rounded-sm  text-xs
       md:text-xs lg:text-sm items-center justify-center flex bg-black text-white">
       Confira
       </span>
    </div>  
  );
};

export default BestProdCard;
