
import { useState } from "react";
import ArtInfo from "./ArtInfo";

const Collections = ({arts, apiConfig}) => {
    const [artInfo, setArtInfo] = useState(true);
    const [artData, setArt] = useState(null)

    const handleShowImgInfoClick = (artData) => {
        setArtInfo(true)
        setArt(artData)
    }

    return (
        <>
        <div className="all-images container">
            {arts.map((art) => (
                <div key={art.id} className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(art)}>
                    <img src={`${apiConfig.iiif_url}/${art.image_id}/full/843,/0/default.jpg`} alt={art.title} className="art-image"></img>
                    <div className="artist-desc">
                        <h2 className="art-title">{art.title}</h2>
                        <h3 className="art-author">{art.artist_title}</h3>
                        <h5 className="date-out">{ art.place_of_origin +", "+ art.date_display }</h5>
                    </div>
                </div>
            ))}
        </div>
        {artInfo && artData ? <ArtInfo art={artData} setArtInfo={setArtInfo} apiConfig={apiConfig} /> : null}
        </>
    );
}
 
export default Collections;
