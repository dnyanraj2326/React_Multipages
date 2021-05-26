import React from 'react';
import { NavLink } from 'react-router-dom';



const Common = (props) => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
            <div className="row">
             <div className="col-10 mx-auto">
             <div className="row">
            <div className=" hed_text col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1> {props.name} <span className="color_change">Optimized </span></h1>
                    <h2 className="my-3">
                        Search for the keywords to learn more about each warning devloper
                    </h2>
                    <div className="hed_button mt-4">
                        <NavLink to={props.visit} className="btn_started">{props.btn}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header_img">
                <img src={props.img} className="img-fluid animated" alt="sample" />

                </div>
                </div>

                </div>
                </div>
                </div>

        </section>
        </>
    );
};


export default Common;