import React, {useEffect} from "react";
import './style.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { image } from "../../Assets";
gsap.registerPlugin(ScrollTrigger);

const Partners = () =>{

    useEffect(()=>{
        gsap.timeline({scrollTrigger:{
            trigger:".partners-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".partners-section .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".partners-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".partners-section .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })

    const partners = [
        {
            id:1,
            img:image.partnerlogo3,
            link:"https://www.umgenergy.com/",
        },
        {
            id:2,
            img:image.partnerlogo1,
            link:"https://castlenrg.com/",
        },
        {
            id:3,
            img:image.partnerlogo2,
            link:"https://questenergy.tech/",
        },
    ]

    return(
        <section className="partners-section">
            <div className="container">                
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="title text-center">
                            <h2 className="d-flex gap-3 align-items-center justify-content-center">
                                <div className="headingpointer">
                                    <div className="line"></div>
                                    <div className="ellipse"></div>
                                </div>
                                Partners                                
                            </h2>
                            <p>Powering partnerships for a sustainable future.</p> 
                        </div>
                    </div>
                    {partners.map((obj)=>{
                        return(
                            <div className="col-lg-4 col-12" key={obj.id}>
                                <div className="partner-wrapper" data-aos="fade-up" data-aos-duration={obj.id/0.5*100} >
                                   <a href={obj.link} target="_blank"><img src={obj.img} alt="" /></a> 
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Partners;