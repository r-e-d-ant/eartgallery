
import { useState } from "react";
import Header from "./Header"

const Hero = () => {
    const [heroImg, setHeroImg] = useState('/images/hero_img_1.png');

    const handleNavImageClick = (imgUrl) => {
        setHeroImg(imgUrl)
    }
    return ( 
        <div>
            <section className="section hero-section" style={{ backgroundImage: "url("+heroImg+")" }}>
                <Header />
                <div className="hero-art-info-container">
                    <div className="hero-art-info container">
                        <h1 className="hero-art-title">A Sunday on La Grande Jatte — 1884</h1>
                        <h2 className="hero-art-author">Georges Seurat</h2>
                        <h3 className="hero-art-date-out">French, 1859-1891</h3>
                    </div>
                    <div className="hero-art-nav-container container">
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_1.png" alt="" onClick={() => handleNavImageClick('/images/hero_img_1.png')}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_2.png" alt="" onClick={() => handleNavImageClick('/images/hero_img_2.png')}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_3.png" alt="" onClick={() => handleNavImageClick('/images/hero_img_3.png')}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_4.png" alt="" onClick={() => handleNavImageClick('/images/hero_img_4.png')}></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Hero;
