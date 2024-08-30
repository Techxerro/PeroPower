import React from "react";
import './style.scss';

const Banner = (props) =>{
    return(
        <section className="banner" style={{background:`url(${props.bannerimg})`}}>
            <div className="container">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <h2>{props.heading} <span>{props.headingYellow}</span></h2>
                </div>
            </div>
        </section>
    )
}

export default Banner;