import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEnvelope, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import google from '../../../src/img/google.png';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigateLogin = useNavigate()
    const handleLogin = ()=>{
      navigateLogin("/login");
    };
  
      
    return(
        <>
            <div className='bg w-full h-screen
             items-center justify-center flex'>
                 <div className='bg-white w-[30%] h-[75%]
                  flex-col items-center justify-center rounded-md'>

                    <h1 className='flex items-center justify-center
                     p-3 text-lg font-extrabold'>Cadastra-se</h1>
                     <div className='w-[80px] h-[8px] bg-red-700 rounded-lg items-center justify-center ml-40'></div>

                    <div className="flex flex-col mt-10 gap-6">
                    <div className="flex items-center w-[300px] h-[60px] rounded-md bg-zinc-300">
                            <FontAwesomeIcon icon={faUserLarge} className='p-4' />
                            <input className='w-[250px] h-[60px] bg-transparent border-none outline-none
                             text-zinc-900 text-sm' 
                             type="text"
                             name="" 
                             id="" 
                             placeholder='Nome'/>
                        </div>
                        
                        <div className="flex items-center w-[300px] h-[60px] rounded-md bg-zinc-300">
                            <FontAwesomeIcon icon={faEnvelope} className='p-4' />
                            <input className='w-[250px] h-[60px] bg-transparent border-none outline-none
                             text-zinc-900 text-sm' 
                             type="email"
                             name="" 
                             id="" 
                             placeholder='Email'/>
                        </div>

                        <div className="flex items-center w-[300px] h-[60px] rounded-md bg-zinc-300">
                            <FontAwesomeIcon icon={faLock} className='p-4' />
                            <input className='w-[250px] h-[60px] bg-transparent border-none
                             outline-none text-zinc-900 text-sm' 
                             type="password" 
                             name="" 
                             id="" 
                             placeholder='Senha'/>
                        </div>

                            <button type="submit" className='w-[300px] h-[50px] bg-red-800 
                            hover:bg-red-900 text-zinc-100 text-sm rounded-md '>
                             Registar
                            </button>

                        <div className="-mt-2 flex flex-col gap-1">
                            <span onClick={handleLogin} className='text-sm cursor-pointer'>Já tens uma conta?
                                <span className='font-bold'>Iniciar sessão</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;