
import Hero from "../components/Hero";
import Collections from "../components/Collections"

const Home = () => {
    return (
        <main className="main">
            {/* section 1 */}
            <Hero />
            {/* section 2 */}
            <section className="section teaser-section">
                <div className="left-attire-img attire-img-container card-img-shadow">
                    <div className="artist-desc">
                        <h2 className="art-title">A Sunday on La Grande Jatte — 1884</h2>
                        <h3 className="art-author">Georges Seurat</h3>
                        <h5 className="date-out">French, 1840-1926</h5>
                    </div>
                </div>
                <div className="credit-container container">
                    <h2 className="credit-title">[From Art Institute Chicago]:</h2>
                    <h3 className="credit-desc">Home to a collection of art that spans centuries and the globe</h3>
                </div>
                <div className="right-attire-img attire-img-container card-img-shadow">
                    <div className="artist-desc">
                        <h2 className="art-title">A Sunday on La Grande Jatte — 1884</h2>
                        <h3 className="art-author">Georges Seurat</h3>
                        <h5 className="date-out">French, 1840-1926</h5>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className="section top-art-section">
                <div className="top-art-showoff">
                    <div className="top-img"></div>
                    <div className="top-img-desc-container">
                        <div className="top-info">
                            <h2 className="top-img-title">Arrival of the Normandy Train, Gare Saint-Lazare</h2>
                            <h3 className="top-img-desc">Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.</h3>
                            <h4 className="top-img-author">Claude Monet</h4>
                        </div>
                        <h5 className="date-out">French, 1840-1926</h5>
                    </div>
                </div>
            </section>
            {/* section 4 */}
            <section className="section hero-allimages-container">
                <Collections />
                <div className="call-to-see-collections-container">
                    <div className="container call-to-see-collections">
                        <h3 className="call-txt">Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known works from every corner of the globe</h3>
                        <a href="collections.html" className="btn btn-call-collections">See all of the Collections</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Home;