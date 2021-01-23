import React from 'react';
import { NavLink } from 'react-router-dom';

const Commom = (props) => {
    return(    
        <section id="Header" className="d-flex align-items-center">
            <div className="cotainer-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h2>{props.name}
                                    <strong className="text-primary"><br/>Guru Student Lodge</strong>
                                </h2>
                                <h4 className="my-3 text-secondary">
                                    {props.paragraph}
                                </h4>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center header-img">
                                <img src={props.imgsrc} className="img-fluid house "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ); 
}
export default Commom;


