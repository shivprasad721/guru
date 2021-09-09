import React from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

return(
    <>
        <div className="cotainer-fluid nav-bg ">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light float-right">
                        <NavLink className="navbar-brand" to="/">Guru Lodge</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact className="nav-link "  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/Services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/gallery">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
);
}

export default Navbar;