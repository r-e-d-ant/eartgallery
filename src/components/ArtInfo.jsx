
const ArtInfo = ({art, setArtInfo, apiConfig, setDarkBg}) => {
    const closeArtInfo = () => {
        setArtInfo(false);
        setDarkBg(false);
    }
    return ( 
        <>
        <i className="bx bx-x" onClick={closeArtInfo}></i>
        <div className="artinfo-container">
            <div className="modal">
                <div className="artist-info container">
                    <h3 className="art-author">{ art.artist_title }</h3>
                    <h5 className="date-out">{ art.place_of_origin +", "+ art.date_display }</h5>
                </div>
                <div className="img-div">
                <img src={`${apiConfig.iiif_url}/${art.image_id}/full/843,/0/default.jpg`} alt={art.artist_title} className="art-image"></img>
                </div>
                <h2 className="art-title container">{ art.title }</h2>
                {art.publication_history ? <p className="art-description container">{ art.publication_history.replace(/<[^>]+>/g, '') }</p> : <p className="art-description container">No publication history for this art</p>}
                <div className="actions-container container">
                <button className="share-btn">
                    <i className="bx bx-share-alt inShareBtn"></i>
                    <span className="inShareBtn">Share</span>
                </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ArtInfo;
