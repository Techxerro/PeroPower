import React,{useEffect} from "react";
import './style.scss';
import { image } from "../../../Assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Teamslider=()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({scrollTrigger:{
            trigger:".teamsection",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".teamsection .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".teamsection .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".teamsection .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })
    const TeamMember = [
        {
            id:1,
            name:'Joseph A.Pero ',
            title:'Founder',
            img:image.team1,
            teamlinkedinlink:'https://www.linkedin.com/in/joseph-pero-485b3631/',
        },
        // {
        //     id:2,
        //     name:'Erik Oberholtzer',
        //     title:'Advisor',
        //     img:image.team2,
        // },
        // {
        //     id:3,
        //     name:'Antoinette Marie Johnson  ',
        //     title:'Advisor',
        //     img:image.team3,
        // },
        {
            id:4,
            name:'Scott Schaffer',
            title:'Solar Sales Representative',
            img:image.team4,
            teamlinkedinlink:'https://www.linkedin.com/in/jscottschaffer/',
        },
        {
            id:5,
            name:'Jon Lewis ',
            title:'Project Manager/ Energy Management Services ',
            img:image.team5,
            teamlinkedinlink:'https://www.linkedin.com/in/jonathan-lewis-a505aaa0/',
        },
        {
            id:6,
            name:'Dave Walters',
            title:'Project Manager / Solar and Wind Power',
            img:image.team6,
            teamlinkedinlink:'https://www.linkedin.com/in/dave-walters-38154340/',
        },
    ]
    
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return(

        <section className="teamsection">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex ">
                        <div className="title">
                            <div className="headingpointer">
                                <div className="line"></div>
                                <div className="ellipse"></div>
                            </div>
                            <h2 data-aos="fade-right">Our Team</h2> 
                            <svg width="205" height="244" viewBox="0 0 205 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M204.024 242.602C124.318 239.546 -27.0919 186.897 4.92397 0.749974" stroke="black"/>
                            </svg>
                          
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            mousewheel={true}
                            keyboard={true}
                            breakpoints= {{                               
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },                                       
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },                              
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                2524: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            autoplay={{delay:4000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            className="myteamSwiper"
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                                onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                        > 
                            {TeamMember.map((team)=>{
                                return(
                                    <SwiperSlide key={team.id}>
                                        <div className="team-wrapper">
                                            <img src={team.img} alt="" />
                                            <h4>{team.name}</h4>
                                            <p>{team.title}</p>
                                            <div className="d-flex gap-3">
                                                <a href={team.teamlinkedinlink} target="_blank">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 4C26.2092 4 28 5.79087 28 8V24C28 26.2092 26.2092 28 24 28H8C5.79087 28 4 26.2092 4 24V8C4 5.79087 5.79087 4 8 4H24ZM24 6.66667H8C7.26363 6.66667 6.66667 7.26363 6.66667 8V24C6.66667 24.7364 7.26363 25.3333 8 25.3333H24C24.7364 25.3333 25.3333 24.7364 25.3333 24V8C25.3333 7.26363 24.7364 6.66667 24 6.66667ZM10.6667 13.3333C11.3504 13.3333 11.914 13.848 11.991 14.5112L12 14.6667V21.3333C12 22.0697 11.403 22.6667 10.6667 22.6667C9.98289 22.6667 9.41932 22.152 9.3423 21.4888L9.33333 21.3333V14.6667C9.33333 13.9303 9.93029 13.3333 10.6667 13.3333ZM14.6667 12C15.3217 12 15.8664 12.4724 15.9788 13.095C16.2484 12.9391 16.5267 12.7986 16.8089 12.6778C17.6985 12.2973 19.0309 12.0879 20.2332 12.466C20.8635 12.6641 21.4976 13.0388 21.9677 13.6741C22.3873 14.2414 22.6132 14.9312 22.6582 15.7057L22.6667 16V21.3333C22.6667 22.0696 22.0697 22.6667 21.3333 22.6667C20.6495 22.6667 20.086 22.1518 20.009 21.4888L20 21.3333V16C20 15.5609 19.8935 15.3543 19.824 15.2601C19.7524 15.1635 19.6365 15.0737 19.4335 15.0099C18.9691 14.8639 18.3015 14.9397 17.8577 15.1296C17.1897 15.4153 16.5796 15.8628 16.1652 16.2778L16 16.4531V21.3333C16 22.0697 15.4031 22.6667 14.6667 22.6667C13.9829 22.6667 13.4193 22.152 13.3423 21.4888L13.3333 21.3333V13.3333C13.3333 12.597 13.9303 12 14.6667 12ZM10.6667 9.33333C11.403 9.33333 12 9.93029 12 10.6667C12 11.403 11.403 12 10.6667 12C9.93029 12 9.33333 11.403 9.33333 10.6667C9.33333 9.93029 9.93029 9.33333 10.6667 9.33333Z" fill="#006B4E"/>
                                                </svg>
                                                </a>
                                                {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_120_293)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 4C25.0152 4 28 6.98477 28 10.6667V21.3333C28 25.0152 25.0152 28 21.3333 28H10.6667C6.98477 28 4 25.0152 4 21.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333ZM21.3333 6.66667H10.6667C8.45753 6.66667 6.66667 8.45753 6.66667 10.6667V21.3333C6.66667 23.5425 8.45753 25.3333 10.6667 25.3333H21.3333C23.5425 25.3333 25.3333 23.5425 25.3333 21.3333V10.6667C25.3333 8.45753 23.5425 6.66667 21.3333 6.66667ZM16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667ZM16 13.3333C14.5272 13.3333 13.3333 14.5272 13.3333 16C13.3333 17.4728 14.5272 18.6667 16 18.6667C17.4728 18.6667 18.6667 17.4728 18.6667 16C18.6667 14.5272 17.4728 13.3333 16 13.3333ZM22 8.66667C22.7364 8.66667 23.3333 9.26363 23.3333 10C23.3333 10.7364 22.7364 11.3333 22 11.3333C21.2636 11.3333 20.6667 10.7364 20.6667 10C20.6667 9.26363 21.2636 8.66667 22 8.66667Z" fill="#006B4E"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_120_293">
                                                    <rect width="32" height="32" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg> */}

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })} 
                            <div className="nav">
                                <div ref={navigationPrevRef} className="prevbtn">
                                    <svg width="75" height="35" viewBox="0 0 75 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="75" y="35" width="75" height="35" rx="17.5" transform="rotate(-180 75 35)" fill="#006B4E"/>
                                        <g clip-path="url(#clip0_120_337)">
                                        <g clip-path="url(#clip1_120_337)">
                                        <g clip-path="url(#clip2_120_337)">
                                        <path d="M32.0281 16.7031L46 16.7031L46 18.2969L32.0281 18.2969L38.6156 24.8844L37.5 26L29 17.5L37.5 9L38.6156 10.1156L32.0281 16.7031Z" fill="white"/>
                                        </g>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_120_337">
                                        <rect width="17" height="17" fill="white" transform="translate(46 26) rotate(-180)"/>
                                        </clipPath>
                                        <clipPath id="clip1_120_337">
                                        <rect width="17" height="17" fill="white" transform="translate(46 26) rotate(-180)"/>
                                        </clipPath>
                                        <clipPath id="clip2_120_337">
                                        <rect width="17" height="17" fill="white" transform="translate(46 26) rotate(-180)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>   
                                <div ref={navigationNextRef} className="nextbtn">
                                    <svg width="75" height="35" viewBox="0 0 75 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="75" height="35" rx="17.5" fill="#006B4E"/>
                                        <g clip-path="url(#clip0_120_331)">
                                        <g clip-path="url(#clip1_120_331)">
                                        <g clip-path="url(#clip2_120_331)">
                                        <path d="M42.9719 18.2969H29V16.7031H42.9719L36.3844 10.1156L37.5 9L46 17.5L37.5 26L36.3844 24.8844L42.9719 18.2969Z" fill="white"/>
                                        </g>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_120_331">
                                        <rect width="17" height="17" fill="white" transform="translate(29 9)"/>
                                        </clipPath>
                                        <clipPath id="clip1_120_331">
                                        <rect width="17" height="17" fill="white" transform="translate(29 9)"/>
                                        </clipPath>
                                        <clipPath id="clip2_120_331">
                                        <rect width="17" height="17" fill="white" transform="translate(29 9)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>                                 
                            </div>
                        </Swiper>                    
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Teamslider;