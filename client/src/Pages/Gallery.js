import React from 'react';

import wedding1 from "./img/wedding1.jpeg";
import wedding2 from "./img/wedding2.png";
import deck from "./img/deck.jpeg";
import joykids from "./img/joykids.jpeg";
import joydelmexico from "./img/joydelmexico.png" ;
import joydelamywedding from "./img/joydelamywedding.png";
import joybabyella from "./img/joybabyella.jpeg";
import joyvacchers from "./img/joyvacchers.jpeg";
import joysandy from "./img/joysandy.jpeg";
import joymickey from "./img/joymickey.jpeg";
import joyhalloween from "./img/joyhalloween.jpeg";
import joychris from "./img/joychris.jpeg";
import joybrowns from "./img/joybrowns.jpeg";
import joyrafting from "./img/joyrafting.jpeg";
import joyyoungamy from "./img/joyyoungamy.jpeg";
import karen1 from "./img/Karen-Davidson-2.JPG";
import karen2 from "./img/Karen-Davidson-3.JPG";
import karen3 from "./img/Karen-Davidson-6.JPG";
import karen4 from "./img/Karen-Davidson-1.JPG";
import karen5 from "./img/Karen-Davidson-4.jpg";
import karen6 from "./img/Karen-Davidson-5.JPG";
import fayth1 from "./img/Fayth-2.JPG";
import fayth2 from "./img/Fayth-3.jpg";
import fayth3 from "./img/Fayth-4.JPG";
import fayth4 from "./img/Fayth-1.jpg";
import fayth5 from "./img/Fayth-5.jpg";
import fayth6 from "./img/Fayth-6.jpg";
import fayth7 from "./img/Fayth-7.JPG";
import fayth8 from "./img/Fayth-8.jpg";
import donna1 from "./img/Donna-Nibbelink-1.JPG";
import donna2 from "./img/Donna-Nibbelink-2.jpg";
import donna3 from "./img/Donna-Nibbelink-3.JPG";
import vicki1 from "./img/Vicki-Humphreys-1.JPG";
import vicki2 from "./img/Vicki-Humphreys-2.JPG";
import vicki3 from "./img/Vicki-Humphreys-4.JPG";
import michealle from "./img/Michealle-Hoag-1.jpg";
import barbara from "./img/Barbara-Bach-1.jpg";
import kathy1 from "./img/Kathy-Gerhold-1.jpg";
import kathy2 from "./img/Kathy-Gerhold-2.jpg";
import kathy3 from "./img/Kathy-Gerhold-3.jpg";


const Gallery = () => {


    const galleryStyles = {
        rowSpace: {
            marginTop: "2%",
            marginBottom: "2%",
        }
    }

    return (
        <div className="brick-container">
        <div>
            <h1 className="heading">Gallery</h1>
            <h3 className="subheading">To share photos, please email images to enlarkin@gmail.com</h3> 
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={fayth1} class="img-thumbnail rounded mx-auto d-block" alt="McConnell family 1"/>
            </div>
            <div className="col-md-3">
                <img src={fayth5} class="img-thumbnail rounded mx-auto d-block" alt="Joy Sherri and Fayth"/>
            </div>
            <div className="col-md-3">
                <img src={fayth2} class="img-thumbnail rounded mx-auto d-block" alt="McConnell family 3"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={fayth4} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Sherri"/>
            </div>
            <div className="col-md-3">
                <img src={barbara} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Ez"/>
            </div>
            <div className="col-md-3">
                <img src={fayth6} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Bill"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={fayth7} class="img-thumbnail rounded mx-auto d-block" alt="Joy Fayth and Bill"/>
            </div>
            <div className="col-md-3">
                <img src={fayth8} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Fayth"/>
            </div>
            <div className="col-md-3">
                <img src={fayth3} class="img-thumbnail rounded mx-auto d-block" alt="McConnell family 2"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={kathy1} class="img-thumbnail rounded mx-auto d-block" alt="Jim, horse, Young Joy"/>
            </div>
            <div className="col-md-3">
                <img src={kathy3} class="img-thumbnail rounded mx-auto d-block" alt="McConnell Family in Lancaster"/>
            </div>
            <div className="col-md-3">
                <img src={kathy2} class="img-thumbnail rounded mx-auto d-block" alt="young McConnell family"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={joykids} class="img-thumbnail rounded mx-auto d-block" alt="Joy with kids"/>
            </div>
            <div className="col-md-3">
                <img src={joyvacchers} class="img-thumbnail rounded mx-auto d-block" alt="Joy w/ Tami and Vaccher kids"/>
            </div>
            <div className="col-md-3">
                <img src={joyrafting} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Del rafting"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={deck} class="img-thumbnail rounded mx-auto d-block" alt="Aaron, Joy, Allie"/>
            </div>
            <div className="col-md-3">
                <img src={wedding1} class="img-thumbnail rounded mx-auto d-block" alt="Aaron Wedding"/>
            </div>
            <div className="col-md-3">
                <img src={wedding2} class="img-thumbnail rounded mx-auto d-block" alt="Aaron Wedding 2"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={joybabyella} class="img-thumbnail rounded mx-auto d-block" alt="Joy with baby Ella"/>
            </div>
            <div className="col-md-3">
                <img src={joydelmexico} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Del in Mexico"/>
            </div>
            <div className="col-md-3">
                <img src={joysandy} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Sandy"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={joymickey} class="img-thumbnail rounded mx-auto d-block" alt="Joy Del Mickey"/>
            </div>
            <div className="col-md-3">
            <img src={joybrowns} class="img-thumbnail rounded mx-auto d-block" alt="Joy with Browns"/>
            </div>
            <div className="col-md-3">
                <img src={joychris} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Chris"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        
        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={joydelamywedding} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Del Amy Wedding"/>
            </div>
            <div className="col-md-3">    
                <img src={joyhalloween} class="img-thumbnail rounded mx-auto d-block" alt="Halloween"/>
            </div>
            <div className="col-md-3">
                <img src={joyyoungamy} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Amy"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={karen1} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 1"/>
            </div>
            <div className="col-md-3">    
                <img src={karen2} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 2"/>
            </div>
            <div className="col-md-3">
                <img src={karen3} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 3"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={karen4} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 4"/>
            </div>
            <div className="col-md-3">    
                <img src={karen5} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 5"/>
            </div>
            <div className="col-md-3">
                <img src={karen6} class="img-thumbnail rounded mx-auto d-block" alt="Joy and girlfriends 6"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={donna1} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Donna 1"/>
            </div>
            <div className="col-md-3">    
                <img src={donna2} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Donna 2"/>
            </div>
            <div className="col-md-3">
                <img src={donna3} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Donna 3"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src={vicki1} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Vicki 1"/>
            </div>
            <div className="col-md-3">    
                <img src={vicki2} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Vicki 2"/>
            </div>
            <div className="col-md-3">
                <img src={vicki3} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Vicki 3"/>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row" style={galleryStyles.rowSpace}>
            <div className="col-md-1"></div>
            <div className="col-md-3">
            <img src={michealle} class="img-thumbnail rounded mx-auto d-block" alt="Joy Del and Hoags"/>
            </div>
            <div className="col-md-3">    
                {/* <img src={vicki2} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Vicki 2"/> */}
            </div>
            <div className="col-md-3">
                {/* <img src={vicki3} class="img-thumbnail rounded mx-auto d-block" alt="Joy and Vicki 3"/> */}
            </div>
            <div className="col-md-1"></div>
        </div>

        </div>
    )
}

export default Gallery
