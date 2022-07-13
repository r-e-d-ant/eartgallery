
import useFetch from "../hooks/useFetch"
import Collections from "../components/Collections"
import { useState } from "react";

const CollectionsPage = () => {
    const [page, setPage] = useState(1);
    const {data: arts, isPending, error} = useFetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=20&fields=id,api_link,title,artist_title,image_id,artist_display,publication_history,place_of_origin,date_display,copyright_notice`);

    const nextPage = () => {
        window.scroll({
            top: 700, 
            left: 0, 
            behavior: 'smooth' 
        })
        setPage(page + 1)
    }

    return ( 
        <main className="main">
            {/* section 2 */}
            <section className="section container search-section">
                <div className="info">
                    <h2>The Collection</h2>
                    <p>Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known works from every corner of the globe.</p>
                </div>
                <form className="search-form">
                    <div className="form-control">
                        <input type="search" placeholder="Search by keyword, artist" className="search-input"></input>
                        <div className="icon-container search-btn">
                            <i className='bx bx-search-alt-2'></i>
                        </div>
                    </div>
                </form>
            </section>
            {/* section 3 */}
            <section className="section">
                {error && <div>{ error }</div>}
                {isPending && <div>Loading...</div>}
                {arts && <Collections arts={arts.data} apiConfig={arts.config} />}
            </section>

            <div>
                <button onClick={nextPage} style={{color: 'red'}}>next</button>
            </div>
        </main>
     );
}
 
export default CollectionsPage;
