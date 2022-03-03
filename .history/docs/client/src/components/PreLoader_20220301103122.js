import {Link} from "react-router-dom"

const PreLoader = () => {
    return(
        <div>
            <h1>CDS E-ATTENDANCE</h1>
            <div>
                <Link to={"/api/auth/admin/signin"}>
                    <button>Coordinator</button>
                </Link>
                <Link to={"/api/auth/admin/signin"}>
                    <button>Corper</button>
                </Link>
            </div>
        </div>
    )
}
export default PreLoader;