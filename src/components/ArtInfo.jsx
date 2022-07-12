
const ArtInfo = ({art, setArtInfo}) => {
    return ( 
        <>
        <i className="bx bx-x" onClick={() => setArtInfo(false)}></i>
        <div className="artinfo-container">
            <div className="modal">
                <div className="artist-info container">
                    <h3 className="art-author">{ art.author }</h3>
                    <h5 className="date-out">{ art.origin +", "+ art.dateOut }</h5>
                </div>
                <div className="img-div">
                    <img src={art.artImage} alt={ art.name }></img>
                </div>
                <h2 className="art-title container">{ art.name }</h2>
                <p className="art-description container">{ art.description }</p>
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
