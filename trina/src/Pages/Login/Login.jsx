import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import google from '../../../src/img/google.png';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
    const navigateRegister = useNavigate()
      const handleRegister = ()=>{
        navigateRegister("/register");
      };
    return(
        <>
            <div className='bg w-full h-screen
             items-center justify-center flex'>
                 <div className='bg-white w-[95%] sm:w-[50%] md:w-[30%] h-max 
                  flex-col items-center justify-center rounded-md'>

                    <h1 className='flex items-center justify-center
                     p-3 mt-3 text-lg font-extrabold'>Conecta-se</h1>
                     <div className='flex items-center justify-center'>
                       <div className='w-[80px] h-[8px] bg-red-700 rounded-lg'></div>
                     </div>

                    <div className="flex flex-col mt-10 gap-6">
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
                            Iniciar sessão
                            </button>

                        <div className="-mt-2 flex flex-col gap-1">
                            <span onClick={handleRegister} className='text-sm cursor-pointer'>Não tens uma conta?
                                <span className='font-bold'>Cadastre-se</span>
                            </span>
                            <span className='text-sm cursor-pointer'>Esqueceu a senha? 
                              <span className='font-bold'>Redefinir senha</span>
                            </span>
                        </div>

                        <span className="flex items-center w-[300px] h-[50px] rounded-md bg-zinc-300
                         hover:bg-zinc-400 duration-300 text-sm cursor-pointer gap-2 mb-7">
                         <img className='w-[22px] rounded-md' src={google}/>
                         Iniciar sessão com o google
                         </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;