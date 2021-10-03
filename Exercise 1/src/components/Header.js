import React from 'react';
import './Header.css';
import logo from './images/hslogo.png';
import profile from './images/profile.png';
import search from './images/search.png';
import menu from './images/menu.png';

function Header() {
    return (
        <div className="header">
            <div className="headerContainer">
                <img className="headerLogo" src={logo} alt="Logo" />;
                <button>Uutiset</button>
                <button>Lehdet</button>
                <button className="tilaaBtn">Tilaa</button>
                <button>Kirjaudu <img className="profile" src={profile} alt="Profile"/></button>
                <button>Hae <img className="search" src={search} alt="Search"/></button>
                <button>Valikko <img className="menu" src={menu} alt="Menu"/></button>
            </div>
        </div>
    );
}

export default Header
