import React from "react";
import './style.scss';
import { image } from "../../../Assets";

const VideoSection = ()=>{
    return(
        <section className="videosection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <video controls style={{width:'100%'}}>
                            <source src={image.video}/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default VideoSection;