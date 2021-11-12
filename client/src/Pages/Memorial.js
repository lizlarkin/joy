import React from 'react';
import plane from "./img/plane.png"
import lodging from "./img/lodging.png"

const Memorial = () => {

    const memorialStyles = {
       
        background: {
            backgroundImage: "url('https://media.istockphoto.com/videos/grey-abstract-technology-minimal-motion-background-video-id1001591664?b=1&k=20&m=1001591664&s=640x640&h=I_ehTa6dCqHLok4IEy3kFGhYL-BM7Y5ci0Dq1tpAkME=')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "80vh",
        },
        travelCards: {
            marginTop: "3%",
        }
    }
    return (
        <div style={memorialStyles.background}>

            <div>
                <h1 className="heading">Memorial</h1>
                <h3 className="subheading">The memorial can be streamed live using the following link: <a target="_blank" rel="noopener noreferrer" href="https://www.calvaryopenbible.org/media">Memorial Live Stream</a> <br />
                Select the frame labeled ‘Joy Brown Memorial’. The live stream will begin a few minutes before the service.
                </h3> 
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Memorial Service Information</h4>
                        <h6 className="card-text">Saturday November 13, 2021</h6>
                        <h6 className="card-text">10am PST</h6>
                        <h6 className="card-text">Calvary Open Bible Church</h6>
                        <h6 className="card-text">1116 Centennial Blvd.</h6>
                        <h6 className="card-text">Springfield, OR. 97477</h6>
                    </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.305308946072!2d-123.01248868426748!3d44.05640383428166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0e1adc5146913%3A0x422f762ef502a573!2sCalvary%20Open%20Bible!5e0!3m2!1sen!2sus!4v1634524776987!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row" style={memorialStyles.travelCards}>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <h4 className="card-title">Airports</h4>
                        <img src={plane} className="card-img-top" alt="airplane"/>
                        <div className="card-body">
                            <h6 className="card-text">Eugene/Mahlon Sweet Field (EUG) ~18 mi.</h6>
                            <h6 className="card-text">Portland International Airport (PDX) ~120 mi.</h6>
                            <h6 className="card-text">Bend Municipal Airport (BDN) ~127 mi.</h6>
                            <h6 className="card-text">Rogue Valley International–Medford Airport (MFR) ~164 mi.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <h4 className="card-title">Lodging</h4>
                        <img src={lodging} className="card-img-top" alt="hotel"/>
                        <div className="card-body">
                            <h6 className="card-text">Courtyard Eugene/Springfield ~3 mi.</h6>
                            <h6 className="card-text">Hilton Garden Inn Eugene/Springfield ~3 mi.</h6>
                            <h6 className="card-text">Holiday Inn Express Eugene/Springfield ~3 mi.</h6>
                            <h6 className="card-text">Candlewood Suites Eugene/Springfield ~3 mi.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
}

export default Memorial
