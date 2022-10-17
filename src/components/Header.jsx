
import { Link } from "react-router-dom";
import { Eart } from "../../src/context/EartContext";

const Header = () => {
    const { user, logoutUser } = Eart();

    return ( 
        <header id="header" className="container">
            <div className="logo header-logo">
                <h1>eArtGallery</h1>
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to={'/collections'} className="nav-link">Collections</Link></li> 
                    { !user && <li className="nav-item"><Link to={'/login'} className="nav-link">Login</Link></li> }
                    { !user && <li className="nav-item"><Link to={'/signup'} className="nav-link">Sign Up</Link></li> }
                    { user && <li className="nav-item" onClick={() => logoutUser()}><Link to={'/'} className="nav-link">Logout</Link></li> }
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;