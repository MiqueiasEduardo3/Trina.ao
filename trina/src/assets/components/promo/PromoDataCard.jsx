import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const PromoDataCard = ({ img, nomeProduto, percentagem, detalhesProduto1, 
  detalhesProduto2, tamanhos, precoAnterior, precoActual }) => {
  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products", {
      state: { img, nomeProduto, percentagem, detalhesProduto2, tamanhos, precoAnterior, precoActual },
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="shadow-lg rounded-lg dark:bg-slate-950 dark:text-white
     bg-white cursor-pointer relative mb-10 md:mb-2">
      <FontAwesomeIcon
        className="bg-white text-neutral-900 p-3 rounded-3xl absolute top-5
         right-4 transition duration-300 hover:bg-yellow-400 z-10"
        icon={faHeart}
      />
      <div className="overflow-hidden flex-col relative">
        <img
          src={img}
          alt="No image"
          className="mx-auto h-[320px] w-[360px] md:h-[220px] md:w-[290px] lg:h-[320px]
           lg:w-[320px] sm:transition sm:duration-700 sm:hover:skew-x-2 sm:hover:scale-110"
        />
        <span className="text-sm absolute top-5 flex items-center gap-2 text-red-700
         rounded-sm pr-1 pl-1 bg-white">
          SUPER<span className="font-bold">PREÇO</span>
        </span>
        <span className="text-xs absolute top-12 flex items-center gap-2 text-black
         rounded-sm p-1 pl-3 pr-2 bg-yellow-400">
          {percentagem}%
        </span>
        <span className="text-xs absolute top-20 flex items-center gap-2 text-white rounded-sm p-1 bg-black">
          NEW IN
        </span>
      </div>

      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-sm">{nomeProduto}</h1>
        <h1 className="line-clamp-1 text-xs">{detalhesProduto1}</h1>
        <div className="flex items-center justify-between border-t-2 py-3 mt-3">
          <div>
            <p className="text-xs line-through text-red-900 font-bold">{precoAnterior} Akz</p>
            <p className="text-base font-bold">{precoActual} Akz</p>
          </div>
          <span
            onClick={handleProducts}
            className="cursor-pointer py-2 px-7 md:py-2 mg:px-5 lg:py-2 lg:px-8 bg-black text-xs
             md:text-sm lg:text-sm text-white rounded-sm transition duration-75 hover:bg-zinc-800" >
            Confira
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromoDataCard;
