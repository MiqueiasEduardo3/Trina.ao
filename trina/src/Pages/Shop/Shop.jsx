import './Shop.css'
import Header from "../../assets/components/header/Header";
import TopHeader from "../../assets/components/topheader/TopHeader";
import Footer from "../../assets/components/footer/footer";
import calcaYour from '../../img/TRINA/calcaYour.jpg';
import oculos_sol2 from '../../img/TRINA/oculos_sol2.jpg';
import saltoAzalea from '../../img/TRINA/saltoAzalea.jpg';
import ShopDataCard from '../../assets/components/shopCard/ShopDataCard';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons/faSortAmountUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';


const ShopData = [
    {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
      {
        img: saltoAzalea,
        nomeProduto: "Salto Azalea",
        detalhesProduto1: "Salto grosso tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "36, 38, 39",
        percentagem: -24,
        precoAnterior: "25,050",
        precoActual : "15,000",
      },    
      {
        img: calcaYour,
        nomeProduto: "Calça Your",
        detalhesProduto1: "Your rules jeans two tone",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "35, 36, 37, 38, 39",
        percentagem: 0,
        precoAnterior: "35,050",
        precoActual : "25,030",
      },
      {
        img: oculos_sol2,
        nomeProduto: "Óculos Sol",
        detalhesProduto1: "Desert Rider",
        detalhesProduto2: "Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante. Camisola de manga comprida com estampado leopardo para senhora. Camisola de manga comprida com decote redondo em fios luréx para efeito brilhante.",
        tamanhos: "",
        percentagem: -4,
        precoAnterior: "19,056",
        precoActual : "11,065",
      },
  ];



const Shop = () => {  

  const [isOrder, setIsOrder] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

   // Estado para armazenar a ordem seleconada
      const [selectedOption, setSelectedOption] = useState(""); 
      const options = ["Mais antigo", "Mais recente", "Mais vendido", "Menor preço", "Novos produtos"];

       const navigate = useNavigate();
      const handleFiltrer = () => {
        navigate("/shop", {
          state: {},
        });
      };

    return(
        <>
        <TopHeader />
        <Header />

        {/*Mobile view*/}
        <div className="block sm:hidden mt-28">
          <div className="section-filter flex justify-center items-center h-14 p-4">
              <div className="container-filtrer">
                <span
                  className="cursor-pointer py-2 px-12 mr-1 bg-black text-xs md:text-sm lg:text-sm
                  text-white rounded-sm transition duration-75 hover:bg-zinc-800 relative"
                  onClick={() => setIsOrder(!isOrder)}
                  >
                  <FontAwesomeIcon className='mr-2' icon={faSortAmountUp}
                  />
                  Ordenar
                </span>
                 {/* ordenar por */}
                  {isOrder && (
                    <div
                     className="w-[43%] h-[20%] bg-zinc-300 fixed left-7 top-[159px] flex flex-col
                     shadow-[0_0_15px_rgba(0,0,6,2.9)] transition-opacity duration-300 z-50 space-y-2"
                    >
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="w-8" id="acessorios" />
                          <h1 className="text-sm font-semibold cursor-pointer">
                            Mais recente
                          </h1>
                        </label>

                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="w-8" id="acessorios" />
                          <h1 className="text-sm font-semibold cursor-pointer">
                            Mais antigo
                          </h1>
                        </label>

                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="w-8" id="acessorios" />
                          <h1 className="text-sm font-semibold cursor-pointer">
                            Mais vendido
                          </h1>
                        </label>

                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="w-8" id="acessorios" />
                          <h1 className="text-sm font-semibold cursor-pointer">
                            Menor preço
                          </h1>
                        </label>
                   </div>
                  )}
                  
                <span
                  className="cursor-pointer py-2 px-14 bg-black text-xs md:text-sm lg:text-sm
                  text-white rounded-sm transition duration-75 hover:bg-zinc-800"
                  onClick={() => setIsFilter(!isFilter)}
                >
                  <FontAwesomeIcon className="mr-2" icon={faSlidersH} />
                  Filtrar
                </span>

                {/* Filtrar */}
                {isFilter && (
                  <div
                    className="w-[75%] h-[70%] bg-zinc-300 fixed right-6 top-[158px] flex 
                    shadow-[0_-4px_10px_rgba(0,0,0,0.9)] transition-opacity duration-300 z-50"
                  >
                    <h2>Filtrar</h2>
                  </div>
                )}
              </div>
          </div>      
        </div>
        
        
        {/*Desktop view, filtrar*/}
        <div className="flex justify-center mt-10">
            <div className="flex w-11/12 gap-2 mb-10 items-start">
                <div className="list-shop hidden sm:block">
                  <h1 className='text-sm
                   font-bold cursor-pointer'>
                    Filtrar resultados por:
                  </h1>

                  <div className='mt-5 bg-yellow-400'>
                    <h1 className='text-sm
                     font-semibold mb-2'>Categorias</h1> 
                     
                    <label className="flex cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Todos os produtos
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer ">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Malhas
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Calças
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Calçados
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Camisas e Blusas
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Saias
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Vestidos
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        PRAIA
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Conjuntos e macacões
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Roupa desportiva
                      </h1>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-8" id="acessorios" />
                      <h1 className="text-sm font-semibold cursor-pointer">
                        Acessórios
                      </h1>
                    </label>
                  </div>

                  <div className='mt-3'>
                    <h1 className='text-sm font-semibold mb-2'>Tamanhos</h1>
                      <div>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />S</span>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />X</span>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />L</span>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />X</span>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />XL</span>
                        <span className='cursor-pointer text-sm font-semibold mr-4'><input type="checkbox" className='mr-1 cursor-pointer' name="" id="" />2XL</span>
                      </div>
                  </div>

                  <div className='mt-3 mb-3'>
                      {/* Seleção de Tamanhos */}
                      <div className="mt-1 w-[100%]flex-col">
                            <label className="font-semibold lg:mr-52 md:mr-52
                             mr-5 text-sm">Ordenar por</label>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="order px-4 py-1 mt-2 text-sm rounded-sm
                                bg-white outline-none text-gray-800 w-[100%] h-8"
                            >
                                <option value="" disabled>Selecione...</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                  </div>

                  <span
                    onClick={handleFiltrer}
                    className=" cursor-pointer py-2 px-32 bg-black text-xs md:text-sm lg:text-sm
                     text-white rounded-sm transition duration-75 hover:bg-zinc-900">
                     Filtrar
                  </span>
            </div>


                <div className="list-shop-result">
                  <div className="grid grid-cols-1
                   md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-4">
                    {ShopData.map((item, index) =>(
                      <ShopDataCard
                      key={index}
                      {...item} 
                      />
                    ))} 
                  </div>                   
                </div>

            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Shop;