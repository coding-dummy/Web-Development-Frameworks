import React from 'react';
import './Headlines.css';

function Headlines() {
    return (
        <div className="headlineContainer">
            <button className="headlineBtn"><b>PÄIVÄN TIMANTTI: </b>Tutkija kertoo: Näin sota näkky meissä edelleen</button>
            <button className="headlineBtn"><b>HUOM! </b>Ihminen menettää tahdon elää</button>
            <button className="adBtn"><b>MAINOS: </b>Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!</button>
        </div>
    );
}

export default Headlines