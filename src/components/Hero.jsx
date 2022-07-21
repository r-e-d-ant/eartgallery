
import { useState, useEffect } from "react";
import Header from "./Header"

const Hero = () => {
    const heroImgsInfo = {
        'heroArts': [
            {
                'id': 0,
                'imgPath': '/images/hero_img_1.jpg',
                'title': 'Husking Bee, Island of Nantucket',
                'author': 'Eastman Johnson',
                'date': 'American, 1824–1906'
            },
            {
                'id': 1,
                'imgPath': '/images/hero_img_2.jpg',
                'title': 'Landscape with Saint John on Patmos',
                'author': 'Nicolas Poussin',
                'date': 'French, 1594–1665'
            },
            {
                'id': 2,
                'imgPath': '/images/hero_img_3.jpg',
                'title': 'Purple Plums',
                'author': 'Cadurcis Plantagenet Ream',
                'date': 'American, 1838–1917'
            },
            {
                'id': 3,
                'imgPath': '/images/hero_img_4.jpg',
                'title': 'The Herring Net',
                'author': 'Winslow Homer',
                'date': 'American, 1836–1910'
            }
        ]}
    const [heroImg, setHeroImg] = useState(heroImgsInfo.heroArts[0]);

    useEffect(() => {
        const firstImg = document.querySelector('.firstImg');
        firstImg.classList.add('add-border');
    }, [])

    const handleNavImageClick = (e, imgUrl) => {
        setHeroImg(imgUrl)

        // set the active border on nav //

        /* remove the border on all the siblings and add it to the target nav */
        for (let i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
            const el = e.target.parentNode.parentNode.children[i];
            if(el.firstChild.classList.contains('add-border')) {
                el.firstChild.classList.remove('add-border');
                el.firstChild.classList.add('remove-border');
            }
        }
        if(e.target.classList.contains('remove-border')) {
            e.target.classList.remove('remove-border');
            e.target.classList.add('add-border');
        } e.target.classList.add('add-border');
    }
    return ( 
        <div id="hero">
            <section className="section hero-section" style={{ backgroundImage: "url("+heroImg.imgPath+")" }}>
                <Header />
                <div className="hero-art-info-container">
                    <div className="hero-art-info container">
                        <h1 className="hero-art-title">{ heroImg.title }</h1>
                        <h2 className="hero-art-author">{ heroImg.author }</h2>
                        <h3 className="hero-art-date-out">{ heroImg.date }</h3>
                    </div>
                    <div className="hero-art-nav-container container">
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_1.png" alt={ heroImg.title } className="firstImg" onClick={(e) => handleNavImageClick(e, heroImgsInfo.heroArts[0])}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_2.png" alt={ heroImg.title } className="remove-border" onClick={(e) => handleNavImageClick(e, heroImgsInfo.heroArts[1])}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_3.png" alt={ heroImg.title } className="remove-border" onClick={(e) => handleNavImageClick(e, heroImgsInfo.heroArts[2])}></img>
                        </div>
                        <div className="hero-art-nav">
                            <img src="/images/hero_art_navs/hero_nav_img_4.png" alt={ heroImg.title } className="remove-border" onClick={(e) => handleNavImageClick(e, heroImgsInfo.heroArts[3])}></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Hero;



// import { useState, useEffect } from "react";
// import Header from "./Header"

// const Hero = () => {
//     const heroImgsInfo = {
//         'heroArts': [
//             {
//                 'id': 0,
//                 'imgPath': '/images/hero_img_1.jpg',
//                 'title': 'Husking Bee, Island of Nantucket',
//                 'author': 'Eastman Johnson',
//                 'date': 'American, 1824–1906'
//             },
//             {
//                 'id': 1,
//                 'imgPath': '/images/hero_img_2.jpg',
//                 'title': 'Landscape with Saint John on Patmos',
//                 'author': 'Nicolas Poussin',
//                 'date': 'French, 1594–1665'
//             },
//             {
//                 'id': 2,
//                 'imgPath': '/images/hero_img_3.jpg',
//                 'title': 'Purple Plums',
//                 'author': 'Cadurcis Plantagenet Ream',
//                 'date': 'American, 1838–1917'
//             },
//             {
//                 'id': 3,
//                 'imgPath': '/images/hero_img_4.jpg',
//                 'title': 'The Herring Net',
//                 'author': 'Winslow Homer',
//                 'date': 'American, 1836–1910'
//             }
//         ]}
//     console.log(heroImgsInfo.heroArts[0]);
//     const [heroImg, setHeroImg] = useState('/images/hero_img_1.jpg');

//     useEffect(() => {
//         const firstImg = document.querySelector('.firstImg');
//         firstImg.classList.add('add-border');
//     }, [])

//     const handleNavImageClick = (e, imgUrl) => {
//         setHeroImg(imgUrl)

//         // set the active border on nav //

//         /* remove the border on all the siblings and add it to the target nav */
//         for (let i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
//             const el = e.target.parentNode.parentNode.children[i];
//             if(el.firstChild.classList.contains('add-border')) {
//                 el.firstChild.classList.remove('add-border');
//                 el.firstChild.classList.add('remove-border');
//             }
//         }
//         if(e.target.classList.contains('remove-border')) {
//             e.target.classList.remove('remove-border');
//             e.target.classList.add('add-border');
//         } e.target.classList.add('add-border');
//     }
//     return ( 
//         <div id="hero">
//             <section className="section hero-section" style={{ backgroundImage: "url("+heroImg+")" }}>
//                 <Header />
//                 <div className="hero-art-info-container">
//                     <div className="hero-art-info container">
//                         <h1 className="hero-art-title">A Sunday on La Grande Jatte — 1884</h1>
//                         <h2 className="hero-art-author">Georges Seurat</h2>
//                         <h3 className="hero-art-date-out">French, 1859-1891</h3>
//                     </div>
//                     <div className="hero-art-nav-container container">
//                         <div className="hero-art-nav">
//                             <img src="/images/hero_art_navs/hero_nav_img_1.png" alt="" className="firstImg" onClick={(e) => handleNavImageClick(e, '/images/hero_img_1.jpg')}></img>
//                         </div>
//                         <div className="hero-art-nav">
//                             <img src="/images/hero_art_navs/hero_nav_img_2.png" alt="" className="remove-border" onClick={(e) => handleNavImageClick(e, '/images/hero_img_2.jpg')}></img>
//                         </div>
//                         <div className="hero-art-nav">
//                             <img src="/images/hero_art_navs/hero_nav_img_3.png" alt="" className="remove-border" onClick={(e) => handleNavImageClick(e, '/images/hero_img_3.jpg')}></img>
//                         </div>
//                         <div className="hero-art-nav">
//                             <img src="/images/hero_art_navs/hero_nav_img_4.png" alt="" className="remove-border" onClick={(e) => handleNavImageClick(e, '/images/hero_img_4.jpg')}></img>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//      );
// }
 
// export default Hero;