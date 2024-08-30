import React, { useEffect } from "react";
import './style.scss';
import { image } from "../../Assets";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Whychooseus = () =>{

    useEffect(()=>{
        gsap.timeline({scrollTrigger:{
            trigger:".whychooseus-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".whychooseus-section .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".whychooseus-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".whychooseus-section .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })

    return(
        <section className="whychooseus-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="title">
                            <div className="headingpointer">
                                <div className="line"></div>
                                <div className="ellipse"></div>
                            </div>
                            <h2 data-aos="fade-right">Why Choose Us</h2>                             
                        </div>

                        <div className="why-content">
                            <ul>
                                <li>
                                   <b>No Large Upfront Fees</b> 
                                   Many Energy “Consultants” focus their efforts on collecting large, exorbitant fees from their clients. We utilize a more balanced performance based approach with our clients.
                                </li>
                                <li>
                                   <b>No Cookie-Cutter Solutions</b> 
                                   Every business is different, as each has its own energy needs and requirements. As such, we offer a more complete, customized solution, not some “One Size Fits All” solution for your business.
                                </li>
                                <li>
                                   <b>Holistic Approach to Evaluate Your Energy Needs</b> 
                                   We take a more comprehensive look at all of the factors that may lead to higher energy bills, not just who your energy supplier may be.
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                       <img src={image.whyusimg} alt="" id="whyus" data-aos="fade-left"/>
                    </div>
                </div>                             
            </div>
        </section>
    )
}

export default Whychooseus;