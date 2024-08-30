import React ,{useEffect} from "react";
import './style.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { image } from "../../../Assets";


const AboutCompany =() =>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({scrollTrigger:{
            trigger:".companyinfo .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".companyinfo .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".companyinfo .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".companyinfo .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })

    return(
        <section className="companyinfo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="company-image-wrapper d-flex gap-lg-5 gap-sm-3 gap-1 align-items-center justify-content-center">
                            <img src={image.infoimg} alt="" id="company-img-1"/>
                            <img src={image.whyusimg} alt="" id="company-img-2"/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="title">
                            <div className="headingpointer">
                                <div className="line"></div>
                                <div className="ellipse"></div>
                            </div>
                            <h2 data-aos="fade-right">About Us</h2>                             
                        </div>
                        <p>
                        Pero Power Innovations (or PPI for short) is an Energy Management Services company located in Cleveland, Ohio, striving for innovations in the latest technologies in the energy sector.  From Solar Panels and Battery Backup Systems to the latest in Energy Monitoring hardware and software, PPI has always been on the cutting edge of the alternate energy industry.  <br/>
                        Joseph Pero, our Chief Energy Officer, started PPI in 2019.  Prior to this, he has been involved in the field of home improvement for over a decade, offering residential homeowners the best in energy saving products and services.  PPI now offers a full range on Energy Management Services that will help a company reduce its energy costs, maximize energy efficiency, and convert it from an energy waster into an energy producer.  While there are scores of Energy Consultants out there offering a small range of services while charging exorbitant fees, PPI takes a more holistic approach to energy management without any upfront costs to the end user.  Our careful, deliberate, and diagnostic approach to the company’s energy usage separates us from the rest of the pack.
                        </p>
                        <button className="btn-1" data-aos="fade-up">
                            <a href="#contact">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_27_71)">
                                    <g clip-path="url(#clip1_27_71)">
                                    <g clip-path="url(#clip2_27_71)">
                                    <path d="M13.9719 10.1669H0V8.57312H13.9719L7.38438 1.98562L8.5 0.869995L17 9.37L8.5 17.87L7.38438 16.7544L13.9719 10.1669Z" fill="white"/>
                                    </g>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_27_71">
                                    <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                    </clipPath>
                                    <clipPath id="clip1_27_71">
                                    <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                    </clipPath>
                                    <clipPath id="clip2_27_71">
                                    <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <span>Let's Chat</span>
                            </a>
                        </button>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany;