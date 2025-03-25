import './Shop.css'
import Header from "../../assets/components/header/Header";
import TopHeader from "../../assets/components/topheader/TopHeader";
import Footer from "../../assets/components/footer/footer";
import calcaYour from '../../img/TRINA/calcaYour.jpg';
import oculos_sol2 from '../../img/TRINA/oculos_sol2.jpg';
import saltoAzalea from '../../img/TRINA/saltoAzalea.jpg';
import ShopDataCard from '../../assets/components/shopCard/ShopDataCard';


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
    return(
        <>
        <TopHeader />
        <Header />

        <div className="flex justify-center mt-32">
            <div className="flex w-11/12 gap-2 mb-10 items-start">
                <div className="list-shop">
                    <h1 className='text-sm font-bold cursor-pointer '>Filtrar resultados por:</h1>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Malhas</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Casacos</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Coletes</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Blazzers</h1>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Calças</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Calças de gangas</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Calções</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Bermudas</h1>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Calçados</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Ténis</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Chinelos</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Saltos</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Sapatília</h1>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Camisas e Blusas</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />T-shirts</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Camisolas</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Blusas</h1>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Saias</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Curtas</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Midi</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Comprido</h1>
                  </div>

                  <div className='mb-3'>
                    <h1 className='text-sm font-semibold'>Vestidos</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Curtos</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Midi</h1>
                    <h1 className='text-sm cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Compridos</h1>
                  </div>

                    <h1 className='text-sm font-bold cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />PRAIA</h1>
                    <h1 className='text-sm font-bold cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Conjuntos e macacões</h1>
                    <h1 className='text-sm font-bold cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Roupa desportiva</h1>
                    <h1 className='text-sm font-bold cursor-pointer'><input type="checkbox" className='w-8' name="" id="" />Acessórios</h1>
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