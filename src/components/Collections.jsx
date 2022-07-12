
import { useState } from "react";
import ArtInfo from "./ArtInfo";

const Collections = () => {
    const [artInfo, setArtInfo] = useState(false);
    const [artId, setArtId] = useState(null)
    const [artTitle, setArtTitle] = useState(null)
    const [artAuthor, setArtAuthor] = useState(null)
    const [artDateOut, setArtDateOut] = useState(null)
    const [artDesc, setArtDesc] = useState(null)

    const handleShowImgInfoClick = (artID, artTtl, artAthr, artDtout, artDsc) => {
        setArtInfo(true)
        setArtId(artID)
        setArtTitle(artTtl)
        setArtAuthor(artAthr)
        setArtDateOut(artDtout)
        setArtDesc(artDsc)
    }

    return (
        <>
        <div className="all-images container">
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(0, 'A Monday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_14.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Monday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(1, 'A Tuesday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_1.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Tuesday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(2, 'A Wednesday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_2.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Wednesday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(3, 'A Thursday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_3.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Thursday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(4, 'A Friday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_4.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Friday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(5, 'A Saturday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_6.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Saturday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
            <div className="art-image-container card-img-shadow" onClick={() => handleShowImgInfoClick(6, 'A Sunday on La Grande Jatte — 1884', 'Georges Seurat', 'French, 1840-1926', 'Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.')}>
                <img src="/images/art_5.png" alt="" className="art-image"></img>
                <div className="artist-desc">
                    <h2 className="art-title">A Sunday on La Grande Jatte — 1884</h2>
                    <h3 className="art-author">Georges Seurat</h3>
                    <h5 className="date-out">French, 1840-1926</h5>
                </div>
            </div>
        </div>
        {artInfo && artId && artTitle && artAuthor && artDateOut && artDesc ? <ArtInfo id={artId} title={artTitle} author={artAuthor} dateout={artDateOut} desc={artDesc} /> : null}
        </>
    );
}
 
export default Collections;
