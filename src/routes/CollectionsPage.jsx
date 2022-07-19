
import useFetch from "../hooks/useFetch"
import Collections from "../components/Collections"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CollectionsPage = ({setDarkBg}) => {
    const [searchData, setSearchData] = useState(''); // to store search query
    const [searchError, setSearchError] = useState(false); // to store search error message

    // url to fetch data from
    const [currentUrl, setCurrentUrl] = useState('https://api.artic.edu/api/v1/artworks?page=1&limit=12&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display,copyright_notice,thumbnail');
    const {data: arts, isPending, error} = useFetch(`${currentUrl}`); // fetching the data

    const location = useLocation(); // to get current route informations

    // funtction to handle search queries
    const handleSearchData = () => {
        if(searchData === '') {
            setSearchError(true);
        } else {
            setSearchError(false);
            setCurrentUrl(`https://api.artic.edu/api/v1/artworks/search?q=${searchData}&page=1&limit=20&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display,copyright_notice,thumbnail`);
        }
    }

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

    // navigation buttons when we are not viewing searched data
    const nextPage = (next_url) => {
        // go to next url
        setCurrentUrl(next_url);
        goToGalleryTop();
    }
    const prevPage = (prev_url) => {
        // go to previous url
        setCurrentUrl(prev_url);
        goToGalleryTop();
    }

    // navigation buttons when we not viewing searched data
    const nextPageSearch = () => {
        // go to searched next page
        setCurrentUrl(`https://api.artic.edu/api/v1/artworks/search?q=${searchData}&page=${arts.pagination.current_page + 1}&limit=20&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display,copyright_notice,thumbnail`);
        goToGalleryTop();
    }

    const prevPageSearch = () => {
        // go to searched previous page
        setCurrentUrl(`https://api.artic.edu/api/v1/artworks/search?q=${searchData}&page=${arts.pagination.current_page - 1}&limit=20&fields=id,api_link,title,artist_title,image_id,publication_history,place_of_origin,date_display,copyright_notice,thumbnail`);
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
                        <input
                            type="search"
                            placeholder="Search by keyword, artist"
                            className={ "search-input " + (searchError ? 'error-input' : '') }
                            onChange={(e) => setSearchData(e.target.value)}
                            ></input>
                        <div className="icon-container search-btn" onClick={handleSearchData}>
                            <i className='bx bx-search-alt-2'></i>
                        </div>
                    </div>
                    {searchError && <p className="search-warning">Type keyword to search</p>}
                </form>
            </section>
            {/* section 3 */}
            <section className="section" id="this-loc">
                {error && <div className="error-message container"><h2>{ error }</h2></div>}
                {isPending && <div className="loading container">Loading...</div>}
                {arts && <Collections arts={arts.data} apiConfig={arts.config} pagination={arts.pagination} setDarkBg={setDarkBg} />}
            </section>

            {arts.pagination.prev_url ? (
                <div className="container nav-btns-container">
                    {arts && <button onClick={() => prevPage(arts.pagination.prev_url)} disabled={arts.pagination.current_page <= 1 ? true : false}>prev</button>}
                    {arts && <button onClick={() => nextPage(arts.pagination.next_url)} disabled={arts.pagination.current_page === arts.pagination.total_pages ? true : false }>next</button>}
                </div>
            ) :
            <div className="container nav-btns-container">
                {arts && <button onClick={prevPageSearch} disabled={arts.pagination.current_page <= 1 ? true : false}>prev</button>}
                {arts && <button onClick={nextPageSearch} disabled={arts.pagination.current_page === arts.pagination.total_pages ? true : false }>next</button>}
            </div>
            }
        </main>
     );
}
 
export default CollectionsPage;
