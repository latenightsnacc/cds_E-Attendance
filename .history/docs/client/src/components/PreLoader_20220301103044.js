import {Link} from "react-router-dom"

const PreLoader = () => {
    return(
        <div>
            <h1>CDS E-ATTENDANCE</h1>
            <div>
                <Link to={"/api/auth/admin/s"}
                <button>Coordinator</button>
                <button>Corper</button>
            </div>
        </div>
    )
}
export default PreLoader;