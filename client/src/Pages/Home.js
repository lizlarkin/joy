import React from 'react';
import joyhome from "./img/joyhome5.png"
import homebg from "./img/homebg3.jpeg"

const Home = () => {

    const homeStyles = {
        backgroundImage: `url(${homebg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "80vh",
        homeHead: {
            fontFamily: '"Dancing Script", cursive',
            fontSize: "550%",
            color: "whitesmoke", 
            fontWeight: "bold",
            paddingTop: "4%"
        },
        homeSubHead: {
            color: "white", 
            fontWeight: "bold",  
            fontSize: "400%",
            fontFamily: "'Open Sans', sans-serif",
            marginBottom: "15%"
        },
    }

    return (
        <div style={homeStyles}>

        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <h1 style={homeStyles.homeHead}>In Loving Memory of</h1>
                <h1 style={homeStyles.homeHead}>Joy Brown</h1>
            </div>
            <div className="col-md-7"></div>
        </div>

            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <img src={joyhome} class="rounded mx-auto d-block" alt="Joy Brown"/>
                </div>
            </div>

        </div>
    )
}

export default Home
