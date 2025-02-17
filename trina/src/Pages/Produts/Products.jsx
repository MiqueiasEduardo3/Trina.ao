import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../assets/components/header/Header";
import TopHeader from "../../assets/components/topheader/TopHeader";
import tenisMariela from '../../img/TRINA/tenisMariela.jpg';
import saltoAzalea from '../../img/TRINA/saltoAzalea.jpg';
import calcaYour from '../../img/TRINA/calcaYour.jpg';
import oculos_sol2 from '../../img/TRINA/oculos_sol2.jpg';
import { useState } from "react";
import Footer from "../../assets/components/footer/footer";
import OtherProductsData from "./OtherProductsData";


const Products = () => {

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
            nomeProduto: "Óculos Sol",
            detalhesProduto: "Desert Rider",
            percentagem: -4,
            precoAnterior: "19,056",
            precoActual : "11,065",
          },
          {
            img: tenisMariela,
            nomeProduto: "Ténis Mariella Strass",
            detalhesProduto: "Mariella Strass",
            title: "Calça Your",
            percentagem: -10,
            precoAnterior: "24,044",
            precoActual : "15,230",
          },
      ];

    // Estado para armazenar o tamanho selecionad0
    const [selectedOption, setSelectedOption] = useState(""); 
    const options = [
        "36", 
        "37", 
        "38",
        "39"]; 


    const location = useLocation();
    const { img, nomeProduto, percentagem, detalhesProduto2, tamanhos, precoAnterior, precoActual } = location.state || {};
    const [productCount, setProductCount] = useState(0);

    const [selectedColor, setSelectedColor] = useState("black"); // Define a cor selecionada inicial
    const colors = [
      { name: "brown", colorCode: "#8B4513" },
      { name: "black", colorCode: "#000000" },
      { name: "blue", colorCode: "#000320" },
    ];

    const navigateCart = useNavigate()
    const handleCart = ()=>{
      navigateCart("/cart");
    };

    return(
        <>
        <TopHeader />
        <Header />
        <div className="flex items-center mt-28 mb-10 h-5/6 p-2 ">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 bg-yellow-600 lg:grid-cols-2 gap-14 md:gap-8 lg:gap-2">

                 <div className="w-full h-full items-center justify-center gap-4 flex p-0">
                     <img className="h-[330px] w-[320px] md:h-[220px] md:w-[290px] lg:h-[500px] lg:w-[600px]" src={img} alt="" />
                </div>


                    <div className="w-full bg-zinc-100 ml-2 md:ml-5 lg:ml-5 p-4 items-center h-full justify-center flex-col rounded-sm">
                        <h1 className="text-3xl -ml-1 font-bold">
                            {nomeProduto}
                        </h1>

                        <div className="w-full mt-5">
                             <p className="text-sm">{detalhesProduto2}</p>
                        </div>

                        <div className="mt-6 h-max">
                            <div className="flex flex-col gap-2 p-2 bg-yellow-400 w-[40%]">
                                <label htmlFor="dropdown" className="font-semibold mr-16 text-sm">
                                    Escolha o tamanho:
                                </label>
                                <select
                                    id="dropdown"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    className="px-5 py-1 border mr-16 text-sm rounded-sm bg-white text-gray-800"
                                >
                                <option value="" disabled>Selecione...</option>
                                    {options.map((option, index) => (
                                    <option key={index} value={option}>
                                    {option}
                                    </option>
                                    ))}
                                </select>
                            </div>

                            <h1 className="text-lg font-bold">Cores : 
                                <div className="w-2/5 flex gap-2 ml-12 md:-ml-12 lg:ml-1 -mt-6 mb-6">
                                    {colors.map((color) => (
                                        <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        aria-label={`Cor ${color.name}`}
                                        className={`w-5 h-5 rounded-full flex items-center justify-center 
                                        ${selectedColor === color.name ? "border-2 border-black" : "border-2 border-transparent"}`}
                                        style={{ backgroundColor: color.colorCode }}
                                        >
                                        {selectedColor === color.name && (
                                            <span className="text-white text-lg">✔</span>
                                        )}
                                        </button>
                                    ))}
                                    </div>
                            </h1>

                            <h1 className="text-lg line-through text-red-900 font-bold">{precoAnterior}Akz</h1>
                            <div className="flex items-center justify-between mb-4 w-4/6 md:w-2/6 lg:w-2/6">
                                <h1 className="text-2xl font-bold">{precoActual}Akz</h1>
                                <span className="text-sm bg-yellow-400 mr-7 md:mr-5 lg:mr-1 px-1 rounded-sm">{percentagem} %</span>
                            </div>

                            <div className="w-2/12 flex items-center ml-24 md:ml-0 lg:ml-0 justify-center mb-6">
                                <span className="cursor-pointer px-3 bg-black text-white rounded-sm" onClick={()=>setProductCount(prev=>prev-1)}>-</span>
                                <p className="bg-white text-base px-2">{productCount}</p>
                                <span className="cursor-pointer px-3 bg-black text-white rounded-sm" onClick={()=>setProductCount(prev=>prev+1)}>+</span>
                            </div>  
        
                            <span onClick={handleCart} className="cursor-pointer py-4 px-5 text-sm rounded-sm bg-black text-white">Adicionar ao carrinho</span>

                          
                            
                        </div>
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
        <Footer />
        </>
    )
}

export default Products;