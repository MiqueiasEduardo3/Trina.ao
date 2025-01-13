
const UserDataLogin = ({imgUser, nameUser, typeUser}) =>{
    return(
        <div className="flex items-center justify-start gap-3">
        <img src={imgUser} alt="" 
        className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full bg-cover bg-center"/>
        <div>
          <h1 className="sm:text-xl">{nameUser}</h1>
          <h1 className="text-sm sm:text-lg text-slate-500">{typeUser}</h1>
        </div>
        </div>
    )
}

export default UserDataLogin;