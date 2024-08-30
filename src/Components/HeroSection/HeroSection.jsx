import React, {useEffect, useRef} from "react";
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import { image } from "../../Assets";
import { gsap } from "gsap";

const HeroSection = () =>{
    
    const swiperRef = useRef(); 

    useEffect(()=>{
        let tl = gsap.timeline({duration:0.2})
        tl.fromTo('.content',{x:'-100%',y:'-50%',opacity:0,},{x:'-5%',y:'-50%',opacity:1})
    });

    const animation = () =>{                
        let tl = gsap.timeline({duration:0.2})
        tl.fromTo('.content',{x:'-100%',y:'-50%',opacity:0,},{x:'-5%',y:'-50%',opacity:1})
    }

    const sliders = [
        {
            id:1,
            image:image.banner1,
            title:'Creating a New Energy ',
            titlespan:'Paradigm'
        },
        {
            id:2,
            image:image.banner2,
            title:'Managing Your Company’s',
            titlespan:'Energy Needs',
        },
        {
            id:3,
            image:image.banner3,
            title:'Controlling Your Company’s',
            titlespan:'Energy Costs',
        },
        {
            id:4,
            image:image.banner4,
            title:'Mastering and Commanding Your Company’s',
            titlespan:'Sustainability Goals',
        }
    ]

    return(
    <Swiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index,className) {
                return ('<span class="' + className + '">'+'</span>');
            }
        }} 
        onSlideChange={()=>animation()}               
        className="hero-slider-wrapper"        
        autoplay={{delay:4000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
        modules={[Navigation,Autoplay,Pagination]}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
        }}
    >
        {sliders.map((obj)=>{
            return(
                <SwiperSlide>
                    <section className="hero" key={obj.id}> 
                        <div className="container" style={{position:'relative',height:'100%'}}>
                            <div className="content">
                                <h2>{obj.title} <span>{obj.titlespan}</span></h2>       
                                <button className="btn">
                                    <a href="#contact">
                                        Request a demo today!
                                        <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="29.5" cy="29.5" r="29.5" fill="#006B4E"/>
                                        <path d="M42.7071 30.7071C43.0976 30.3166 43.0976 29.6834 42.7071 29.2929L36.3431 22.9289C35.9526 22.5384 35.3195 22.5384 34.9289 22.9289C34.5384 23.3195 34.5384 23.9526 34.9289 24.3431L40.5858 30L34.9289 35.6569C34.5384 36.0474 34.5384 36.6805 34.9289 37.0711C35.3195 37.4616 35.9526 37.4616 36.3431 37.0711L42.7071 30.7071ZM20 31H42V29H20V31Z" fill="white"/>
                                        </svg>
                                    </a>
                                </button>       
                            </div>  
                        </div>
                                   
                        <img src={obj.image} alt="" />                        
                    </section>        
                </SwiperSlide>
            )
        })} 

        <div className="swiper-pagination"></div>

        </Swiper>
    )
}

export default HeroSection;