
import useFetch from "../hooks/useFetch"
import Collections from "../components/Collections"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CollectionsPage = () => {
    const [currentUrl, setCurrentUrl] = useState('https://api.artic.edu/api/v1/artworks?page=1&limit=10&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display');
    const {data: arts, isPending, error} = useFetch(`${currentUrl}`);

    const location = useLocation();

    // go to the top of the page everytime when going on this route
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behaviour: 'smooth'
        })
    }, [])

    const goToGalleryTop = () => {
        // function to scroll at the top
        window.location = `${location.pathname}#this-loc`;
    }
    const nextPage = (next_url) => {
        // go to next page
        setCurrentUrl(next_url);
        goToGalleryTop();
    }

    const prevPage = (prev_url) => {
        // go to previous page
        setCurrentUrl(prev_url);
        goToGalleryTop();
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
            <section className="section" id="this-loc">
                {error && <div className="error-message container"><h2>{ error }</h2></div>}
                {isPending && <div className="loading container">Loading...</div>}
                {arts && <Collections arts={arts.data} apiConfig={arts.config} pagination={arts.pagination} />}
            </section>

            <div className="container nav-btns-container">
                {arts && <button onClick={() => prevPage(arts.pagination.prev_url)} disabled={arts.pagination.current_page <= 1 ? true : false}>prev</button>}
                {arts && <button onClick={() => nextPage(arts.pagination.next_url)} disabled={arts.pagination.current_page === arts.pagination.total_pages ? true : false }>next</button>}
            </div>
        </main>
     );
}
 
export default CollectionsPage;
