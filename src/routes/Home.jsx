
import { Link } from "react-router-dom"

import useFetch from "../hooks/useFetch"
import Hero from "../components/Hero";
import Collections from "../components/Collections"
import { Eart } from "../context/EartContext";

const Home = () => {
    const {data: arts, isPending, error} = useFetch('https://api.artic.edu/api/v1/artworks?page=1&limit=12&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display,copyright_notice,thumbnail');
    const { darkBg } = Eart();

    return (
        <main className={"main " + (darkBg ? 'dark-bg' : '')}>
            {/* section 1 */}
            {/* {arts && <Hero arts={arts} />} */}
            <Hero />
            {/* section 2 */}
            <section className="section teaser-section">
                <div className="left-attire-img attire-img-container card-img-shadow">
                    <div className="artist-desc">
                        <h2 className="art-title">Cupid Chastised</h2>
                        <h3 className="art-author">Bartolomeo Manfredi</h3>
                        <h5 className="date-out">Italian, 1582-1622</h5>
                    </div>
                </div>
                <div className="credit-container container">
                    <h2 className="credit-title">[From Art Institute Chicago]:</h2>
                    <h3 className="credit-desc">Home to a collection of art that spans centuries and the globe</h3>
                </div>
                <div className="right-attire-img attire-img-container card-img-shadow">
                    <div className="artist-desc">
                        <h2 className="art-title">Mountain Brook</h2>
                        <h3 className="art-author">Albert Bierstadt</h3>
                        <h5 className="date-out">American, born Germany, 1830–1902</h5>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className="section top-art-section">
                <div className="top-art-showoff">
                    <div className="top-img"></div>
                    <div className="top-img-desc-container">
                        <div className="top-info">
                            <h2 className="top-img-title">The Wedding at Cana</h2>
                            <h3 className="top-img-desc">Giuseppe Maria Crespi filled this depiction of the wedding feast where Jesus performed his first miracle with luxurious accessories and smaller interactions between characters within the larger narrative. On the left, Jesus converses with his mother; on the right, the wedding’s astonished host and his servant taste the water Jesus has miraculously turned into wine. The painting brings together the Venetian tradition of color and grandeur with the close observation of figures characteristic of the artist’s native Bologna.</h3>
                            <h4 className="top-img-author">Giuseppe Maria Crespi</h4>
                        </div>
                        <h5 className="date-out">Italian, 1665-1747</h5>
                    </div>
                </div>
            </section>
            {/* section 4 */}
            <section className="section hero-allimages-container">
                {error && <div className="error-message container"><h2>{ error }</h2></div>}
                {isPending && <div className="loading container">Loading...</div>}
                {arts && <Collections arts={arts.data} apiConfig={arts.config}/>}

                <div className="call-to-see-collections-container">
                    <div className="container call-to-see-collections">
                        <h3 className="call-txt">Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known works from every corner of the globe</h3>
                        <Link to={'/collections'} className="btn btn-call-collections">See all of the Collections</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Home;
