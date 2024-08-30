import React, {useEffect} from "react";
import './style.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { image } from "../../Assets";
gsap.registerPlugin(ScrollTrigger);

const Servicesection = () =>{

    useEffect(()=>{
        gsap.timeline({scrollTrigger:{
            trigger:".service-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".service-section .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".service-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".service-section .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })

    const services = [
        {
            id:1,
            service:'Total Utility Management Solutions',
            img:image.serviceimg1,
            info:'We first take a look at your utility bills to see how much energy you are using, and how much you are currently spending on your energy needs. This, in turn, helps us to develop a baseline to use when developing an Energy Strategy for your business.',
        },
        {
            id:2,
            service:'Energy Monitoring and Management Services',
            img:image.serviceimg2,
            info:'Almost 42% of the energy produced is being wasted.  Using our proprietary technology, we can help companies become more energy efficient and lower unnecessary costs.',
        },
        {
            id:3,
            service:'From Energy Waster to Energy Production',
            img:image.serviceimg3,
            info:'Transform your Company from being an “Energy Waster” to becoming an “Energy Producer”.  Use the cost savings generated from our Utilities and Energy Management Services toward developing your own power source(s) to meet your company needs.',
        },
    ]

    return(
        <section className="service-section">
            <div className="container">                
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="title">
                            <h2 className="d-flex gap-3 align-items-center">
                                <div className="headingpointer">
                                    <div className="line"></div>
                                    <div className="ellipse"></div>
                                </div>
                                Our Services 
                            </h2>
                        </div>
                    </div>
                    {services.map((obj)=>{
                        return(
                            <div className="col-lg-4 col-12" key={obj.id} style={{paddingBottom:'10px'}}>
                                <div className="service-wrapper" data-aos="fade-up" data-aos-duration={obj.id/0.5*100} >
                                    <div className="img">
                                        <img src={obj.img} alt="" />
                                    </div>
                                    <h3>{obj.service}</h3>
                                    <p> {obj.info} </p>
                                    <button className="d-flex gap-2 align-items-center">
                                        <a href="/services">
                                            Read more
                                            <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Servicesection;