import './HomeBack.css'

const HomeBack = () =>{
    return(
        <section className='hero h-screen lg:h-screen md:h-[90vh] flex items-center justify-center'>

            <div className='md:w-4/ lg:w-3/6 h-80 flex-col items-center justify-center ml-10 mt-44 absolute'>
                <h1 className='title text-6xl text-white font-extrabold'>TRINA</h1>
                <h1 className='text-xl font-bold p-2 text-white'>
                  <span className='p-1 bg-yellow-500 text-black'>Compras
                  </span> que você <br />
                </h1>

                <h1 className='text-xl font-bold ml-24 -mt-2 text-white'>não vai querer 
                    <span className='p-1 bg-yellow-500 text-black'>perder</span>
                </h1>

                <h1 className='text-lg lg:text-2xl md:text-2xl font-bold p-2 text-white mb-16'>....VOCÊ
                     <span className='p-1 bg-yellow-500 text-black'>
                    ESCOLHE</span> & NÓS LEVÁMOS ATÉ VOCÊ</h1>

                <span className='lg:p-6 md:p-4 p-4 bg-white font-bold border-black border-solid lg:ml-52
                 md:ml-44 ml-[7.9rem] transition duration-300
                 hover:bg-zinc-300 z-10 cursor-pointer '>
                 APROVEITE JÁ
                 </span>
            </div>   
        </section>
    ) 
}

export default HomeBack;