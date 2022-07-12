
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header id="header" className="container">
            <div className="logo header-logo">
                <h1>eArtGallery</h1>
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to={'/collections'} className="nav-link">Collections</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;