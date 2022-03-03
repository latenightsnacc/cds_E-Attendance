import {Link} from "react-router-dom"

const PreLoader = () => {
    return(
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">welcome</h2>
              <h1 className="text-5xl text-green-500 font-bold">CDS E-ATTENDANCE</h1>
            </div>
            
            <div className="my-3">
                <Link to={"/api/auth/admin/signup"}>
                    <button 
                    className="focus:outline-0 hover:shadow border-1 border-green-400 rounded py-2 px-5 text-lg text-black font-medium leading-loose hover:bg-green-500 hover:text-white hover:shadow-none">
                    Coordinator</button>
                </Link>
                <Link to={"/api/auth/signup"}>
                    <button>Corper</button>
                </Link>
            </div>
        </div>
        
    )
}
export default PreLoader;