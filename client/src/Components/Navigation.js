import React from 'react';
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-fill" id="navbarSupportedContent">
                        <ul className="nav nav-fill">
                            <li className="nav-item" id="nav-icon">
                                <Link to ="/" className="nav-link">JOY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/memorial" className="nav-link regular">Memorial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/donate" className="nav-link regular">Correspondence</Link>
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
        </div>
    )
}

export default Navigation
