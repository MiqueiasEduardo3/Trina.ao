import './Footer.css'
import wise from '../../../img/wise.png';
import paypal from '../../../img/paypal.png';
import paypay from '../../../img/paypay.jpeg';
import express from '../../../img/express.jpeg';
import visa from '../../../img/visa.png';
import bai from '../../../img/bai.png';


const Footer = () =>{
    return(
        <>
        <section className='footer w-full h-max justify-center flex items-center  bg-zinc-300 '>
            <div className="w-11/12 items-center flex-col justify-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 h-[45vh] mt-5 md:h-[25vh] lg:h-[35vh] p-12">
                    
                    <ul className='h-full mb-14 sm:mb-0 text-center text-black'>
                        <li className="font-bold mb-2 text-sm ">Políticas de uso</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Políticas de privacidade</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Políticas de cancelamento</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Políticas de envios</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Segurança e privacidade</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Termos de conduções</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Cookies</li>
                    </ul>

                    <ul className='h-full mb-14 sm:mb-0 text-center text-black'>
                        <li className="font-bold mb-2 text-sm ">Trina.ao</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Marketplace</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Ofertas</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Sobre nós</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Conttacte-nos</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>#novidades</li>
                    </ul>

                    <ul className='h-full mb-14 sm:mb-0 text-center text-black'>
                        <li className="font-bold mb-2 text-sm">Ajuda</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Trocas e devoluções</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Entregas rápidas</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Cancelamentos</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Meus pedidos</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Minha conta</li>
                    </ul>

                    <ul className='h-full mb-14 sm:mb-0 text-center text-black'>
                        <li className="font-bold mb-2 text-sm">Redes socias</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Facebook</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Instagram</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Whatsapp</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Tik Tok</li>
                        <li className='text-sm md:text-xs lg:text-sm cursor-pointer'>Twitter</li>
                    </ul>
                </div>
                
                <div className="w-full h-[20vh] md:h-[6vh] lg:h-[20vh] mt-[435px] md:mt-0 lg:mt-0 flex-col items-center justify-center gap-4">
                    <h1 className='my-8 text-center font-bold text-sm'>Pagamentos seguros</h1>
                    <div className=" ml-12 grid grid-cols-3 sm:grid-cols-11 sm:ml-96 gap-3">
                        <img src={wise}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px] rounded-sm"/>
                        <img src={paypal}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px]  rounded-sm"/>
                        <img src={visa}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px]  rounded-sm"/>
                        <img src={paypay}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px]  rounded-sm"/>
                        <img src={express}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px]  rounded-sm"/>
                        <img src={bai}  alt="No image" className="h-[30px] w-[50px] md:h-[35px] md:w-[65px] lg:h-[40px] lg:w-[80px]  rounded-sm"/>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-black w-full h-[8vh] flex justify-center items-center">
            <h1 className='text-center text-xs text-zinc-400'>Copyright © 2024 Todos os direitos reservados.</h1>
        </div>
        </>
    )
}


export default Footer;