import React from "react";
import './style.scss';
import HeroSection from "../../../Components/HeroSection/HeroSection";
import KnowUs from "../../../Components/KnowUs/KnowUs";
import Servicesection from "../../../Components/Servicesection/Servicesection";
import Whychooseus from "../../../Components/WhyChooseUs/Whychooseus";
import ContactForm from "../../../Components/ContactForm/ContactForm";
import Partners from "../../../Components/Partners/Partners";

const Home = ()=>{
    return(
        <>
            <HeroSection/>
            <KnowUs/>
            <Servicesection/>
            <Whychooseus/>
            <Partners/>
            <ContactForm/>
        </>
    )
}

export default Home;