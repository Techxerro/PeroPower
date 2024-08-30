import React, { useEffect, useRef  } from "react";
import './style.scss';
import { image } from "../../Assets";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const KnowUs = () =>{
    const videoRef = useRef(null);

    useEffect(()=>{
        gsap.timeline({scrollTrigger:{
            trigger:".knowus-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".knowus-section .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".knowus-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".knowus-section .headingpointer .line",{width:0},{width:'55px',duration:0.5})

      
    });

    // const togglePlay = () => {
    //     console.log(videoRef)
    //     if (videoRef.current.paused) {
    //       document.querySelector('.video-section .play').style.display="block";
    //     } else {
    //       document.querySelector('.video-section .play').style.display="none";
    //     }
    // };


    return(
        <section className="knowus-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="title">
                            <div className="headingpointer">
                                <div className="line"></div>
                                <div className="ellipse"></div>
                            </div>
                            <h2 data-aos="fade-right">Get to know Us </h2>
                            <button className="btn-1" data-aos="fade-up">
                                <a href="/about">
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
                                    <span>Explore More</span>                                    
                                </a>
                            </button>  
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <p >
                            Pero Power Innovations (or PPI for short) is an Energy Management Services company located in Cleveland, Ohio, striving for innovations in the latest technologies in the 
                            energy sector.  From Solar Panels and Battery Backup Systems to the latest in Energy Monitoring hardware and software, PPI has always been on the cutting edge of the 
                            alternate energy industry.
                        </p>
                        <div className="call-section d-flex gap-3" data-aos="fade-up">
                            <div className="call-icon">
                                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_27_57)">
                                    <path d="M51.0579 12.8125C55.4043 13.979 59.3675 16.2682 62.5497 19.4504C65.7319 22.6325 68.0211 26.5957 69.1876 30.9422" stroke="#006B4E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M48.3992 22.7101C51.0133 23.4044 53.3974 24.7774 55.31 26.6899C57.2225 28.6025 58.5955 30.9866 59.2898 33.6008" stroke="#006B4E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M29.6289 39.975C32.2658 45.4203 36.669 49.8122 42.1211 52.4351C42.5233 52.6256 42.9681 52.708 43.4118 52.6743C43.8555 52.6406 44.2828 52.4919 44.6516 52.243L52.6594 46.8937C53.0132 46.6538 53.422 46.5074 53.8477 46.4681C54.2734 46.4289 54.7021 46.4982 55.0938 46.6695L70.0844 53.1078C70.5967 53.321 71.0248 53.6968 71.3026 54.1772C71.5804 54.6576 71.6926 55.216 71.6219 55.7664C71.1468 59.4748 69.3367 62.883 66.5303 65.3533C63.724 67.8235 60.1137 69.1866 56.375 69.1875C44.8215 69.1875 33.7412 64.5979 25.5717 56.4283C17.4021 48.2588 12.8125 37.1785 12.8125 25.625C12.8133 21.8863 14.1764 18.276 16.6467 15.4697C19.117 12.6633 22.5252 10.8532 26.2336 10.3781C26.784 10.3074 27.3424 10.4196 27.8228 10.6974C28.3032 10.9752 28.6789 11.4033 28.8922 11.9156L35.3305 26.9383C35.4979 27.3238 35.5679 27.7445 35.5344 28.1634C35.5009 28.5824 35.3649 28.9866 35.1383 29.3406L29.7891 37.4765C29.5509 37.8445 29.4111 38.2675 29.3831 38.7049C29.3551 39.1423 29.4397 39.5796 29.6289 39.975Z" stroke="#006B4E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_27_57">
                                    <rect width="82" height="82" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="call-content">
                                <h3>Have any question? Give us a call</h3>
                                <h3 className="greentxt"><a href="tel:+1-440-888-7991">+1-440-888-7991</a></h3>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="row video-section">
                    <div className="col-md-3 col-12 pos-rel">
                        <img src={image.ellipse1} alt="" id="ell1" data-aos="fade-down"/>
                        <img src={image.ellipse2} alt="" id="ell2"  data-aos="fade-up"/>
                    </div>
                    <div className="col-md-6 col-12 pos-rel d-flex align-items-center justify-content-center">
                        <video  controls poster={image.videocover} ref={videoRef} src={image.video} type="video/mov">
                            {/* <source src={image.video} type="video/mov"/> */}
                        </video>
                        {/* <div className="play" onClick={()=>togglePlay()}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="30" fill="#006B4E"/>
                            <path d="M39 30L26.25 40.3923L26.25 19.6077L39 30Z" fill="white"/>
                            </svg>
                        </div> */}
                        {/* <div className="pause">
                             <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="7" fill="white"/>
                            <rect x="4" width="2" height="7" fill="white"/>
                            </svg>
                        </div>  */}
                    </div>
                    <div className="col-md-3 col-12 pos-rel">
                        <img src={image.ellipse3} alt="" id="ell3" data-aos="fade-down" />
                        <img src={image.ellipse4} alt="" id="ell4"s data-aos="fade-up"/>
                    </div>
                </div>              
            </div>
        </section>
    )
}

export default KnowUs;