

import Hero from "../components/Hero";
import Collections from "../components/Collections"

const CollectionsPage = () => {
    return ( 
        <main className="main">
            {/* section 1 */}
            <Hero />

            {/* section 2 */}
            <section class="section container search-section">
                <div class="info">
                    <h2>The Collection</h2>
                    <p>Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known works from every corner of the globe.</p>
                </div>
                <form class="search-form">
                    <div class="form-control">
                        <input type="search" placeholder="Search by keyword, artist" class="search-input"></input>
                        <div class="icon-container search-btn">
                            <div>se</div>
                            <i class='bx bx-search-alt-2'></i>
                        </div>
                    </div>
                </form>
            </section>
            {/* section 3 */}
            <section className="section">
                <Collections />
            </section>
        </main>
     );
}
 
export default CollectionsPage;
