import React from "react";
import './style.scss';
import { image } from "../../../Assets";

const ServicesList=()=>{
    return(
        <>
        <section className="service-section bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <img src={image.servicePage1} alt="" />
                    </div>
                    <div className="col-lg-7 col-12 d-flex align-items-center">
                        <div>
                            <h3>Total Utility Management Solutions</h3>
                            <p>We first take a look at your utility bills to see how much energy you are using, and how much you are currently spending on
                            your energy needs. This, in turn, helps us to develop a baseline to use when
                            developing an Energy Strategy for your business.</p>
                            
                            <button className="btn-1" data-aos="fade-up">
                                <a href="#contact">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_612)">
                                            <g clip-path="url(#clip1_121_612)">
                                                <path d="M13.9719 10.1669H0V8.57312H13.9719L7.38438 1.98562L8.5 0.869995L17 9.37L8.5 17.87L7.38438 16.7544L13.9719 10.1669Z" fill="white"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                            <clipPath id="clip1_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Book Now</span>
                                </a>
                            </button>                             
                        </div>
                        <img src={image.windmill} alt="" className="windmill" data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-section">
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-7 col-12 d-flex align-items-center order-lg-1 order-2">
                        <div>
                            <h3>Energy Monitoring and Management</h3>
                            <p>Almost 42% of the energy produced is being wasted. Using our proprietary technology, we can help
                            companies become more energy efficient and lower unnecessary costs.</p>
                            
                            <button className="btn-1" data-aos="fade-up">
                                <a href="#contact">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_612)">
                                            <g clip-path="url(#clip1_121_612)">
                                                <path d="M13.9719 10.1669H0V8.57312H13.9719L7.38438 1.98562L8.5 0.869995L17 9.37L8.5 17.87L7.38438 16.7544L13.9719 10.1669Z" fill="white"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                            <clipPath id="clip1_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Book Now</span>
                                </a>
                            </button>                             
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 order-1 order-lg-2">
                        <img src={image.servicePage2} alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="service-section bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <img src={image.servicePage3} alt="" />
                    </div>
                    <div className="col-lg-7 col-12 d-flex align-items-center">
                        <div>
                            <h3>Energy Production</h3>
                            <p>Transform your Company from being an “Energy Waster”
                            to becoming an “Energy Producer”. Use the cost savings generated from our
                            Utilities and Energy Management Services toward developing your own power
                            source(s) to meet your company needs.</p>
                            
                            <button className="btn-1" data-aos="fade-up">
                                <a href="#contact">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_612)">
                                            <g clip-path="url(#clip1_121_612)">
                                                <path d="M13.9719 10.1669H0V8.57312H13.9719L7.38438 1.98562L8.5 0.869995L17 9.37L8.5 17.87L7.38438 16.7544L13.9719 10.1669Z" fill="white"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                            <clipPath id="clip1_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Book Now</span>
                                </a>
                            </button>                             
                        </div>
                        <img src={image.windmill} alt="" className="windmill" data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-section">
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-7 col-12 d-flex align-items-center order-lg-1 order-2">
                        <div>
                            <h3>Commercial Solar Projects </h3>
                            <p>If you are considering doing a small to large scale Commercial Solar Project, PPI can help you every step of the way.  From initial planning to project coordination to the final installation of your project, PPI’s team of experts can help walk you through every phase of the development.  Let us assist you with your energy needs.
                            </p>
                            
                            <button className="btn-1" data-aos="fade-up">
                                <a href="https://solar.fundwise.com/?ref=zwm0ntgj" target="_blank">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_612)">
                                            <g clip-path="url(#clip1_121_612)">
                                                <path d="M13.9719 10.1669H0V8.57312H13.9719L7.38438 1.98562L8.5 0.869995L17 9.37L8.5 17.87L7.38438 16.7544L13.9719 10.1669Z" fill="white"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                            <clipPath id="clip1_121_612">
                                                <rect width="17" height="17" fill="white" transform="translate(0 0.869995)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Book Now</span>
                                </a>
                            </button>                             
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 order-1 order-lg-2">
                        <img src={image.servicePage4} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ServicesList;