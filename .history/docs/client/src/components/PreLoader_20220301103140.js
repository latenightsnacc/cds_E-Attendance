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
    )
}
export default PreLoader;