import React from 'react';
import './News.css';
import poliisi from './images/poliisi.png';
import bookmark from './images/bookmark.png';

function News() {
    return (
        <div className="news">
            <div className="newsContainer">
                <div className="newsStory">
                    <h1>Poliisi</h1>
                    <img className="poliisi" src={poliisi} alt="Poliisi" />
                    <h2><b>Rikosepäilyt | </b>Olisiko poliisien pitänyt ymmärtää, ettei sumutinta saa käyttää, vaikka käsky tulikin? Professori pitää tätä ydinkysymyksenä Elokapinan tapauksessa</h2>
                    <div className="newsTime">
                        <h3>Kaupunki 14:58</h3>
                        <img className="bookmark" src={bookmark} alt="Bookmark" />
                    </div>
                </div>
            </div>
            <div className="newsSidebar">
                <h1 className="sidebarHeader">Luetuimmat</h1>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">1</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>Pääkirjoitus | </b>Brexitin hinta on valkenemassa briteille</p>
                    </div>
                </div>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">2</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>HS Vantaa | </b>Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</p>
                    </div>
                </div>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">3</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>Rokotukset | </b>Epäreilu kohtelu ihmetyttää: Koronataudin sairastanut ei saa toista rokotetta, eikä myöskään koronatodistusta</p>
                    </div>
                </div>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">4</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>Blank | </b>blank</p>
                    </div>
                </div>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">5</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>Blank | </b>blank</p>
                    </div>
                </div>
                <div className="sideNews">
                    <div className="numberBar">
                        <h1 className="newsNumber">6</h1>
                    </div>
                    <div className="sidebarStory">
                        <p><b>Blank | </b>blank</p>
                    </div>
                </div>
                <div className="moreNews">
                    <button className="moreBtn">Näytä lisää</button>
                </div>
            </div>
        </div>
    );
}

export default News