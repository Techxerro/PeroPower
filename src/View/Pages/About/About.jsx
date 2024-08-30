import React from "react";
import './style.scss';
import Banner from '../../../Utils/Banner/Banner';
import { image } from "../../../Assets";
import AboutCompany from "../../../Components/AboutPage/AboutCompany/About";
import ContactForm from "../../../Components/ContactForm/ContactForm";
import VideoSection from "../../../Components/AboutPage/VideoSection/VideoSection";
import Teamslider from "../../../Components/AboutPage/TeamSlider/TeamSlider";
import HowWeWork from "../../../Components/AboutPage/HowWeWork/HowWeWork";
import Partners from "../../../Components/Partners/Partners";

const About = ()=>{
    return(
        <>
        <Banner bannerimg={image.aboutbanner} heading="Who Are" headingYellow="We?"/>
        <AboutCompany/>
        <VideoSection/>
        <Teamslider/>
        <HowWeWork/>
        <Partners/>
        <ContactForm/>        
        </>
    )
}

export default About;