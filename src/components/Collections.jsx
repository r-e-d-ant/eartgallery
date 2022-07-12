
import { useState } from "react";
import ArtInfo from "./ArtInfo";

const Collections = ({arts}) => {
    console.log(arts)
    const [artInfo, setArtInfo] = useState(false);
    const [artData, setArt] = useState(null)

    const handleShowImgInfoClick = (artData) => {
        setArtInfo(true)
        setArt(artData)
    }

    return (
        <>
        <div className="all-images container">
            {arts.map((art) => (
                <div key={art.artId} className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(art)}>
                    <img src={art.artImage} alt={art.name} className="art-image"></img>
                    <div className="artist-desc">
                        <h2 className="art-title">{art.name}</h2>
                        <h3 className="art-author">{art.author}</h3>
                        <h5 className="date-out">{ art.origin +", "+ art.dateOut }</h5>
                    </div>
                </div>
            ))}
        </div>
        {artInfo && artData ? <ArtInfo art={artData} /> : null}
        </>
    );
}
 
export default Collections;
