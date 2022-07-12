
import { Link } from "react-router-dom"

const ArtInfo = ({art}) => {
    return ( 
        <>
        <div className="artinfo-container">
            <div className="modal">
                <div className="artist-info">
                    <h3 className="art-author">{ art.author }</h3>
                    <h5 className="date-out">{ art.origin +", "+ art.dateOut }</h5>
                </div>
                <div className="img-div">
                    <img src={art.artImage} alt={ art.name }></img>
                </div>
                <h2 className="art-title">{ art.name }</h2>
                <p className="art-description">{ art.description }</p>
                <div className="actions-container">
                <Link to="#">Share</Link>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ArtInfo;
