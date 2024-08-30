import React,{ useEffect, useRef } from "react";
import './style.scss';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () =>{

    const form = useRef();
    const sendEmail = (event) =>{
        event.preventDefault();
        emailjs.sendForm('service_lw33xgg', 'template_jxdnivf', form.current, 'TuoZfleP67ouRXDbJ')
        .then((result) => {
            
            console.log(result.text);
            alert('Your mail has been sent successfully');
            
            window.location.reload(true);

            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    
    } 

    useEffect(()=>{
        gsap.timeline({scrollTrigger:{
            trigger:".contactform-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".contactform-section .headingpointer",{width:0},{width:'55px',duration:0.5},
        )
        gsap.timeline({scrollTrigger:{
            trigger:".contactform-section .headingpointer",
            start:"top 60%",
            toggleActions: "play none none reverse"
        }})
        .fromTo(".contactform-section .headingpointer .line",{width:0},{width:'55px',duration:0.5})
    })

    return(
        <section className="contactform-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-wrapper" data-aos="fade-up">
                            <div className="title">                            
                                <div className="headingpointer">
                                    <div className="line"></div>
                                    <div className="ellipse"></div>
                                </div>
                                <h3>Why Choose Us</h3> 
                                <h2>Book an appointment with us today! </h2>                            
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="d-flex gap-3">
                                    <label>
                                        <input type="text" name="name" placeholder="Name" />
                                    </label>
                                    <label>
                                        <input type="telephone" name="phone" placeholder="Phone Number" />
                                    </label>
                                </div>                            
                                <label>
                                    <input type="email" name="email" placeholder="Email Address" />
                                </label>
                                <label>
                                    <input type="message" name="message"placeholder="Message" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center ">
                        <div className="newsletter" >
                            <h2>Stay informed</h2>
                            <form action="">                     
                                <label>
                                    <input type="email" placeholder="Email Address" />
                                </label>
                                <input type="submit" value="Subscribe Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;