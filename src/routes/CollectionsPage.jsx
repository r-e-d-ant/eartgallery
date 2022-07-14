
import useFetch from "../hooks/useFetch"
import Collections from "../components/Collections"
import { useState } from "react";

const CollectionsPage = () => {
    const [page, setPage] = useState(1);
    const {data: arts, isPending, error} = useFetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=20&fields=id,api_link,title,artist_title,image_id,artist_display,publication_history,place_of_origin,date_display`);

    const goToTop = () => {
        // function to scroll at the top
        window.scroll({
            top: 700, 
            left: 0, 
            behavior: 'smooth' 
        })
    }
    const nextPage = () => {
        // go to next page
        goToTop();
        setPage(page + 1);
    }

    const prevPage = () => {
        // go to previous page
        goToTop();
        setPage(page - 1);
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
                {error && <div className="error-message container"><h2>{ error }</h2></div>}
                {isPending && <div className="loading container">Loading...</div>}
                {arts && <Collections arts={arts.data} apiConfig={arts.config} />}
            </section>

            <div className="container nav-btns-container">
                <button onClick={prevPage} disabled={page <= 1 ? true : false}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
        </main>
     );
}
 
export default CollectionsPage;
