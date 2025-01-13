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

  ];



const Shop = () => {
    return(
        <>
        <TopHeader />
        <Header />

        <div className="flex content-center w-full h-full mt-24">
            <div className="flex w-11/12 bg-yellow-400 p-4">
                <div className="list-shop">

                    
                </div>


                <div className="list-shop-result">
                {ShopData.map((item, index) =>(
                  <ShopDataCard
                  key={index}
                  {...item} 
                  />
                ))}                    
                </div>

            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Shop;