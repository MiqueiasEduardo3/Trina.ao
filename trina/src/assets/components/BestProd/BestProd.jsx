import calcaYour from '../../../img/TRINA/calcaYour.jpg';
import macacaoJamama from '../../../img/TRINA/macacaoJamama.jpg';
import saltoAzalea from '../../../img/TRINA/saltoAzalea.jpg';
import BestProdCard from './BestProdCards';

const BestData = [
  {
    img1: calcaYour,
    img2: macacaoJamama,
    img3: saltoAzalea,
    category: "CALÇAS",
    price: "15,540",
  },
  {
    img1: macacaoJamama,
    img2: saltoAzalea,
    img3: calcaYour,
    category: " Macacãos",
    price: "20,220",
  },
  {
    img1: saltoAzalea,
    img2: calcaYour,
    img3: macacaoJamama,
    category: "SALTOS",
    price: "29,066",
  },
  {
    img1: macacaoJamama,
    img2: saltoAzalea,
    img3: calcaYour,
    category: "CALÇAS",
    price: "15,540",
  },
  {
    img1: saltoAzalea,
    img2: calcaYour,
    img3: macacaoJamama,
    category: "Fatos",
    price: "20,220",
  },
  {
    img1: calcaYour,
    img2: macacaoJamama,
    img3: saltoAzalea,
    category: "SALTOS",
    price: "29,066",
  },
];


const BestProd = () =>{
    return(
     
        <div data-aos="fade-up" className='h-full bg-white items-center flex justify-center mt-10 mb-10'>
          <section  className= 'w-10/12 items-center flex-col justify-center'>
               <h1 className='text-sm md:text-lg lg:text-xl font-semibold mb-12 text-center'>CONHEÇA OS NOSSOS ESTILOS, E LIBERTE A ESSÊNCIA QUE HÁ EM TI</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-2 lg:gap-6">
                {BestData.map((item, index) =>(
                  <BestProdCard
                  key={index}
                  {...item} 
                  />
                ))}
              </div>
          </section>
        </div>
    )
}

export default BestProd;