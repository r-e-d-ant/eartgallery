
const Header = () => {
    return ( 
        <header id="header" className="container">
            <div className="logo header-logo">
                <h1>eArtGallery</h1>
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Collections</a></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;