import React from 'react';
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-fill">
                <div class="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to ="/memorial" className="nav-link regular">Memorial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/donate" className="nav-link regular">Correspondence</Link>
                            </li>
                            <li className="nav-item" id="nav-icon">
                                <Link to ="/" className="nav-link">JOY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/blog" className="nav-link regular">Share</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/gallery" className="nav-link regular">Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div className="container-fluid">
                <ul className="nav justify-content-center nav-fill">
                    <li className="nav-item">
                        <Link to ="/memorial" className="nav-link regular">Memorial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/donate" className="nav-link regular">Correspondence</Link>
                    </li>
                    <li className="nav-item" id="nav-icon">
                        <Link to ="/" className="nav-link">JOY</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/blog" className="nav-link regular">Share</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/gallery" className="nav-link regular">Gallery</Link>
                    </li>
                </ul>
            </div> */}

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to ="/" id="nav-icon">
                Joy
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to ="/memorial" className="nav-link">Memorial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/donate" className="nav-link">Donate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/blog" className="nav-link">Share</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/gallery" className="nav-link">Gallery</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navigation
