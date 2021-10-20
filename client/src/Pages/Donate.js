import React from 'react';
import envelope from "./img/envelope.png";

const Donate = () => {

    const donateStyles = {
        background: {
            backgroundImage: "url('https://media.istockphoto.com/videos/grey-abstract-technology-minimal-motion-background-video-id1001591664?b=1&k=20&m=1001591664&s=640x640&h=I_ehTa6dCqHLok4IEy3kFGhYL-BM7Y5ci0Dq1tpAkME=')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "80vh",
        },
        envelope: {
            paddingBottom: "5%"
        }
    }
    

    return (
        <div style={donateStyles.background}>
            <h1 className="heading">Correspondence</h1>
            <h3 className="subheading">In lieu of flowers, please consider making a donation to help offset funeral and medical expenses.</h3> 

            <div className="row" style={donateStyles.envelope}>
                <div className="col-md-4"></div>

                <div className="col-md-4">
                        <img src={envelope} className="card-img-top" alt="envelope"/>
                </div>

                <div className="col-md-4"></div>
            </div>

        </div>
    )
}

export default Donate
