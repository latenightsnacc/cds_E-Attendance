import {Link} from "react-router-dom"

const PreLoader = () => {
    return(
        <div>
            <h1>CDS E-ATTENDANCE</h1>
            <div>
                <Link to={"/api/auth/admin/signup"}>
                    <button>Coordinator</button>
                </Link>
                <Link to={"/api/auth/signup"}>
                    <button>Corper</button>
                </Link>
            </div>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-5xl text-green-500 font-bold">CDS E-ATTENDANCE</h1>
        <button 
        className={"mt-3 focus:outline-0 shadow-sm border-1 border-green-400 rounded py-3 px-5 text-lg text-green-500 hover:bg-green-500 hover:text-white hover:shadow-none"}
        onClick={() => {navigate('/api/auth/signup')}}>Get Started</button>
    </div>
    )
}
export default PreLoader;