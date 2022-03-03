import {Link} from "react-router-dom"

const PreLoader = () => {
    return(
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-5xl text-green-500 font-bold">CDS E-ATTENDANCE</h1>
            <div>
                <Link to={"/api/auth/admin/signup"}>
                    <button >Coordinator</button>
                </Link>
                <Link to={"/api/auth/signup"}>
                    <button>Corper</button>
                </Link>
            </div>
        </div>
        <div >
        <h1 >CDS E-ATTENDANCE</h1>
        <button 
        }
        onClick={() => {navigate('/api/auth/signup')}}>Get Started</button>
    </div>
    )
}
export default PreLoader;