import size1 from '../../../img/size1.jpg';
import size2 from '../../../img/size2.jpg';
import size3 from '../../../img/size3.jpg';


const Banner = () =>{
    return(
        <>
        <section className="flex items-center justify-center h-full mt-10 mb-10">
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-1 lg:gap-1">

                <div className="w-full">
                    <img src={size1} className='h-[570px] w-[447px] md:h-[450px] md:w-[320px] lg:h-[570px] lg:w-[447px] brightness-75' alt="" />

                    <div className="absolute -mt-44 ml-16 md:-mt-44 md:ml-3 lg:-mt-44 lg:ml-16">
                        <h1 className='mb-14 text-white text-xl md:text-sm lg:text-xl'>NÃO PROCURE MAIS, VOCÊ ACABA
                        <br /> DE ENCONTRAR <span className='font-bold'>O LUGAR CERTO</span></h1>
                        <span className="px-12 py-2 text-sm border-black border-solid 
                        border-2 font-bold bg-white ml-16 md:ml-7 lg:ml-14 cursor-pointer transition duration-75 hover:bg-zinc-300">LIBERTA-TE</span>
                    </div>
                </div>

                <div className="w-full">
                     <img src={size2} className='h-[570px] w-[448px] md:h-[450px] md:w-[300px]
                       lg:h-[570px] lg:w-[447px] brightness-75' alt="" />

                     <div className="absolute -mt-44 ml-28 md:-mt-44 md:ml-12 lg:-mt-44 lg:ml-28">
                        <h1 className='mb-14 text-white text-xl md:text-sm lg:text-xl'>FAÇA A SUA ENCOMENDA
                        <br /> ATRAVÉS DO <span className='font-bold'>WHATSAPP</span></h1>
                        <span className="px-8 py-2 text-sm border-black border-solid 
                        border-2 font-bold bg-white ml-3 md:-ml-1 lg:ml-8  cursor-pointer transition duration-75 hover:bg-zinc-300">ESTAMOS AQUI</span>
                    </div>
                </div>

                <div className="w-full">
                     <img src={size3} className='h-[570px] w-[445px] md:h-[450px] md:w-[300px] 
                      lg:h-[570px] lg:w-[447px] brightness-75' alt="" />

                     <div className="absolute -mt-44 ml-24 md:ml-8 lg:-mt-44 lg:ml-20">
                        <h1 className='mb-14 text-white text-xl md:text-sm lg:text-xl'><span className='font-bold'>JUNTE-SE Á NOS, GANHA E</span> E
                        <br />RECEBA OFERTAS EXCLUSIVAS</h1>
                        <span className="px-8 py-2 text-sm border-black border-solid 
                        border-2 font-bold bg-white ml-12 md:ml-3 lg:ml-14 cursor-pointer transition duration-75 hover:bg-zinc-300">SUBSCREVER</span>
                    </div>
                </div>

            </section>
        </section>
        </>
    )
}


export default Banner;