import './Shop.css'
import Header from "../../assets/components/header/Header";
import TopHeader from "../../assets/components/topheader/TopHeader";
import Footer from "../../assets/components/footer/footer";
import calcaYour from '../../img/TRINA/calcaYour.jpg';
import oculos_sol2 from '../../img/TRINA/oculos_sol2.jpg';
import saltoAzalea from '../../img/TRINA/saltoAzalea.jpg';
import ShopDataCard from '../../assets/components/shopCard/ShopDataCard';
import { useState } from 'react';


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
      

  ];



const Shop = () => {

   // Estado para armazenar o tamanho selecionado
      const [selectedOption, setSelectedOption] = useState(""); 
      const options = ["Mais antigo", "Mais recente", "Mais vendidos", "Menor preço", "Novos produtos"];

    return(
        <>
        <TopHeader />
        <Header />

        <div className="flex justify-center mt-32">
            <div className="flex w-11/12 gap-2 mb-10 items-start">
                <div className="list-shop">
                  <h1 className='text-sm font-bold cursor-pointer'>Filtrar resultados por:</h1>

                  <div className='mt-5'>
                    <h1 className='text-sm font-semibold mb-2'>Categorias</h1> 
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Malhas</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Calças</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Calçados</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Camisas e Blusas</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Saias</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Vestidos</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />PRAIA</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Conjuntos e macacões</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Roupa desportiva</h1>
                    <h1 className='text-sm font-semibold cursor-pointer -ml-2'><input type="checkbox" className='w-8' name="" id="" />Acessórios</h1>
                  </div>

                  <div className='mt-3'>
                    <h1 className='text-sm font-semibold mb-2'>Tamanhos</h1>
                      <div>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />S</span>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />X</span>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />L</span>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />X</span>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />XL</span>
                        <span className='text-sm font-semibold mr-4'><input type="checkbox" className='mr-1' name="" id="" />2XL</span>
                      </div>
                  </div>

                  <div className='mt-3'>
                      {/* Seleção de Tamanhos */}
                      <div className="mt-1 w-[100%]flex-col">
                            <label className="font-semibold mr-52 text-sm">Ordenar por</label>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="order px-4 py-1 mt-2 text-sm rounded-sm
                                bg-white text-gray-800 w-[100%] h-8"
                            >
                                <option value="" disabled>Selecione...</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                  </div>
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