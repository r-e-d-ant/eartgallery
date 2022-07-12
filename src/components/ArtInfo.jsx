
const ArtInfo = ({id, title, author, dateout, desc}) => {
    return ( 
        <>
        <div className="artinfo-container">
            <div className="artist-info">
                <h3 className="art-author">{ author }</h3>
                <h5 className="date-out">{ dateout }</h5>
            </div>
            <img src="/images/art_4.png" alt=""></img>
            <h2 className="art-title">{ title }</h2>
            <p className="art-description">{ desc }</p>
            <div className="actions-container">
                <a href="#">Share</a>
            </div>
        </div>
        </>
     );
}
 
export default ArtInfo;