import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../assets/components/header/Header";
import TopHeader from "../../assets/components/topheader/TopHeader";
import Footer from "../../assets/components/footer/footer.jsx";
import OtherProductsData from "./OtherProductsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaExpand } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Imagens
import tenisMariela from '../../img/TRINA/tenisMariela.jpg';
import saltoAzalea from '../../img/TRINA/saltoAzalea.jpg';
import calcaYour from '../../img/TRINA/calcaYour.jpg';
import oculos_sol2 from '../../img/TRINA/oculos_sol2.jpg';

const Products = () => {
    const location = useLocation();
    const navigateCart = useNavigate();

    const { img, nomeProduto, percentagem, detalhesProduto2, precoAnterior, precoActual } = location.state || {};

    // Dados dos outros produtos
    const OtherData = [
        {
            img: saltoAzalea,
            nomeProduto: "Salto Azalea",
            detalhesProduto: "Salto grosso tone",
            percentagem: -24,
            precoAnterior: "25,050",
            precoActual : "15,000",
        },
        {
            img: calcaYour,
            nomeProduto: "Calça Your",
            detalhesProduto: "Your rules jeans two tone",
            percentagem: 0,
            precoAnterior: "35,050",
            precoActual : "25,030",
        },
        {
            img: oculos_sol2,
            nomeProduto: "Óculos de Sol",
            detalhesProduto: "Desert Rider",
            percentagem: -4,
            precoAnterior: "19,056",
            precoActual : "11,065",
        },
        {
            img: tenisMariela,
            nomeProduto: "Ténis Mariella Strass",
            detalhesProduto: "Mariella Strass",
            percentagem: -10,
            precoAnterior: "24,044",
            precoActual : "15,230",
        },
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    // Estado para armazenar o tamanho selecionado
    const [selectedOption, setSelectedOption] = useState(""); 
    const options = ["36", "37", "38", "39"];

    // Estado para quantidade do produto
    const [productCount, setProductCount] = useState(1);

    // Galeria de imagens
    const galleryImages = [tenisMariela, calcaYour, tenisMariela, calcaYour];
    const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

    // Estado e opções de cores
    const [selectedColor, setSelectedColor] = useState("black");
    const colors = [
        { name: "vermelho", colorCode: "#BB0320" },
        { name: "Lilás", colorCode: "#BB0390" },
        { name: "Marrom", colorCode: "#8B4513" },
        { name: "Rosa", colorCode: "#FF69B4" },
        { name: "Branco", colorCode: "#FFFFFF" },
    ];

    const handleCart = () => {
        navigateCart("/cart");
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <>
        <TopHeader />
        <Header />

            <div className="flex items-center mt-28 mb-10 h-5/6 p-2">
                <div className="w-[94%] grid grid-cols-1 md:grid-cols-2
                  lg:grid-cols-[60%_40%] gap-14 md:gap-8 lg:gap-2 p-2">
                                    
                    {/* Seção da imagem do produto */}
{/* Seção da imagem do produto */}
<div className="w-full h-full flex flex-row items-start">
    {/* Miniaturas - Sempre na vertical e ao lado */}
    <div className="flex flex-col gap-2 h-full max-h-[500px] w-20 sm:w-24 md:w-28 lg:w-32 p-2">
        {galleryImages.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-auto object-cover cursor-pointer rounded-md border-2 
                ${selectedImageIndex === index ? "border-blue-500" : "border-gray-300"}`}
                onClick={() => setSelectedImageIndex(index)}
            />
        ))}
    </div>

    {/* Imagem Principal - Com mesma altura das miniaturas */}
    <div className="relative flex-1 flex items-center justify-center h-full max-h-[500px]">
        <img 
            src={galleryImages[selectedImageIndex]} 
            alt="Produto" 
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[570px] 
            h-full object-cover rounded-lg shadow-lg"
        />
        <button className="absolute top-2 left-1 ml-6 bg-white p-2 rounded-full shadow" 
             onClick={() => setIsExpanded(true)}>
             <FaExpand className="text-gray-700" />
        </button>
    </div>
</div>



                  
                    <div className="w-full ml-2 md:ml-5 lg:ml-5 p-4">
                         {/* Seção de detalhes do produto */}
                        <h1 className="text-3xl font-semibold">
                            {nomeProduto}
                        </h1>
                        <span className="text-sm font-bold">Referência: 
                            <span className="text-sm font-normal ml-2">
                                3336HSAUJ7
                            </span>
                        </span>

                        <p className="text-xs mt-5 text-justify">{detalhesProduto2}</p>
                        <div className="mt-10">
                            <span className="text-xs font-semibold">
                                <FontAwesomeIcon className="mr-1" icon={faAngleRight} />
                                Recomendamos seu tamanho habitual
                            </span>
                        </div>

                         {/* Seleção de Tamanhos */}
                        <div className="mt-3 w-[28%] flex flex-col">
                            <label className="font-semibold mr-12 text-sm">Tamanhos</label>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="px-4 py-1 mt-2 border text-sm rounded-sm bg-zinc-100 text-gray-800 outline-none"
                            >
                                <option value="" disabled>Selecione...</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        {/* Seleção de Cores */}
                        <div className="">
                            <h1 className="text-sm font-semibold ml--1 mt-6">
                            Cores</h1> 
                            <div className="mt-2 gap-1 w-[50%] md:w-[34%] lg:w-[34%] flex -ml-1 mb-6">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        aria-label={`Cor ${color.name}`}
                                        className={`w-6 h-6 rounded-full float-left ml-1 flex justify-center items-center 
                                            ${selectedColor === color.name ? "border-2 border-black" : "border-2 border-transparent"}`}
                                        style={{ backgroundColor: color.colorCode }}
                                    >
                                        {selectedColor === color.name && (
                                            <span className="text-white text-xs font-normal">✔</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantidade */}
                        <div className="mt-6 bg-yellow-400 mb-6 w-[23%]">
                            <span className="text-sm  font-semibold">Quantidade</span>
                            <div className="flex items-center mt-2">
                                <button className="px-3 bg-black text-white rounded-sm"
                                    onClick={() => setProductCount(prev => Math.max(1, prev - 1))}>-</button>
                                <span className="px-4">{productCount}</span>
                                <button className="px-3 bg-black text-white rounded-sm"
                                    onClick={() => setProductCount(prev => prev + 1)}>+</button>
                            </div>
                        </div>

                        {/* Preços e botão */}
                        <h1 className="text-lg line-through text-red-900 font-bold">{precoAnterior} Akz</h1>
                        <div className="flex items-center justify-between mb-6 w-[68%] md:w-[45%] lg:w-[45%]">
                            <h1 className="text-2xl font-bold">{precoActual}Akz</h1>
                            <span className="text-sm bg-yellow-400
                              mr-4 md:mr-5lg:mr-4 px-1 rounded-sm">
                            {percentagem} %
                            </span>
                        </div>
                            <button
                                onClick={handleCart}
                                className="mt-4 py-2 px-4 bg-black
                                text-white rounded-sm">
                                Adicionar ao carrinho
                            </button>
                    </div>
                </div>    
            </div>

            <section className="w-full mt-20 mb-20">
                    <h1 className="font-semibold text-black text-xl text-center md:text-sm lg:text-2xl">Também podes comprar</h1>
                    <section className="flex items-center justify-center my-6">   
                        <div className=" w-[330px] md:w-11/12 lg:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-8 lg:gap-4">
                            {OtherData.map((item, index) =>(
                            <OtherProductsData 
                            key={index}
                            {...item} 
                            />
                            ))}
                        </div>
                    </section>
                 </section>

                 
                 {/* Secção para expandir as imagens do produto */}
                 {isExpanded && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={() => setIsExpanded(false)}>
                        <button onClick={prevImage} className="absolute left-10 text-white text-4xl"> <FaChevronLeft /> </button>
                        <img 
                            src={galleryImages[selectedImageIndex]} 
                            alt="Produto Expandido" 
                            className="max-w-[90%] max-h-[90%] object-cover rounded-lg shadow-lg"
                        />
                        <button onClick={nextImage} className="absolute right-10 text-white text-4xl"> <FaChevronRight /> </button>
                    </div>
                )} 

         <Footer />
        </>
    );
};

export default Products;
