import React from "react";
import './style.scss';
import Banner from "../../../Utils/Banner/Banner";
import ContactForm from "../../../Components/ContactForm/ContactForm";
import { image } from "../../../Assets";
import ServicesList from "../../../Components/ServicePage/ServicesList/ServicesList";

const Services = ()=>{
    return(
        <>
        <Banner bannerimg={image.serviceBanner} heading="What We" headingYellow="Do"/>
        <ServicesList/>
        <ContactForm/>
        </>
    )
}

export default Services