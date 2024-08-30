import React, {useEffect, useState, useRef} from "react";
import './style.scss';
import { image } from "../../../Assets";
import emailjs from 'emailjs-com';

const Header = ()=>{

    const [openMenu, setopenMenu] = useState();
    const [openPopup, setopenPopup] = useState();

    const OpenMenu = () => {
        setopenMenu(!openMenu);
    };

    useEffect(()=>{
        const menulist = document.querySelectorAll('.menu ul li a');        
        for(let x = 0; x<menulist.length; x++){
            if(window.location.href==menulist[x].href){
                menulist[x].parentElement.classList.add('active');
            }
            else if(window.location.href=="#contact"){
                //do nothing
            }
        }
    },[window.location.pathname])

    const form = useRef();
    const sendEmail = (event) =>{
        console.log('button presses');
        event.preventDefault();
        emailjs.sendForm('service_lw33xgg', 'template_p5ho0aq', form.current, 'TuoZfleP67ouRXDbJ')
        .then((result) => {
            
            console.log(result.text);
            alert('Your mail has been sent successfully');
            
            window.location.reload(true);

            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    
    } 

    return(
        <>
        <header>
            <div className="container">
                <div className="row header-info">
                    <div className="col-sm-6 col-12 d-flex align-items-center">
                        <div className="contact-info align-items-center d-flex gap-3">
                            <div className="d-flex align-items-center gap-1">
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <   path d="M10.5 0H2.5C1.12 0 0 1.12 0 2.5V19.5C0 20.88 1.12 22 2.5 22H10.5C11.88 22 13 20.88 13 19.5V2.5C13 1.12 11.88 0 10.5 0ZM6.5 21C5.67 21 5 20.33 5 19.5C5 18.67 5.67 18 6.5 18C7.33 18 8 18.67 8 19.5C8 20.33 7.33 21 6.5 21ZM11 17H2V3H11V17Z" fill="#F0E40B"/>
                                </svg>
                                <a href="tel:+1-440-888-7991">+1-440-888-7991</a>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 0H4C1.8 0 0 1.8 0 4V14C0 16.2 1.8 18 4 18H20C22.2 18 24 16.2 24 14V4C24 1.8 22.2 0 20 0ZM21.6 5.8L13.7 11.1C13.2 11.4 12.6 11.6 12 11.6C11.4 11.6 10.8 11.4 10.3 11.1L2.4 5.8C2 5.5 1.9 4.9 2.2 4.4C2.5 4 3.1 3.9 3.6 4.2L11.5 9.5C11.8 9.7 12.3 9.7 12.6 9.5L20.5 4.2C21 3.9 21.6 4 21.9 4.5C22.1 4.9 22 5.5 21.6 5.8Z" fill="#F0E40B"/>
                                </svg>
                                <a href="mailto:joseph@powersquared.tech">joseph@powersquared.tech</a>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-sm-6 col-12 social-media-icons d-flex gap-3 align-items-center justify-content-end">

                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/company/pero-power-innovations/" target="_blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_27_44)">
                                <path d="M24 4C26.2092 4 28 5.79087 28 8V24C28 26.2092 26.2092 28 24 28H8C5.79087 28 4 26.2092 4 24V8C4 5.79087 5.79087 4 8 4H24ZM24 6.66667H8C7.26363 6.66667 6.66667 7.26363 6.66667 8V24C6.66667 24.7364 7.26363 25.3333 8 25.3333H24C24.7364 25.3333 25.3333 24.7364 25.3333 24V8C25.3333 7.26363 24.7364 6.66667 24 6.66667ZM10.6667 13.3333C11.3504 13.3333 11.914 13.848 11.991 14.5112L12 14.6667V21.3333C12 22.0697 11.403 22.6667 10.6667 22.6667C9.98289 22.6667 9.41932 22.152 9.3423 21.4888L9.33333 21.3333V14.6667C9.33333 13.9303 9.93029 13.3333 10.6667 13.3333ZM14.6667 12C15.3217 12 15.8664 12.4724 15.9788 13.095C16.2484 12.9391 16.5267 12.7986 16.8089 12.6778C17.6985 12.2973 19.0309 12.0879 20.2332 12.466C20.8635 12.6641 21.4976 13.0388 21.9677 13.6741C22.3873 14.2414 22.6132 14.9312 22.6582 15.7057L22.6667 16V21.3333C22.6667 22.0696 22.0697 22.6667 21.3333 22.6667C20.6495 22.6667 20.086 22.1518 20.009 21.4888L20 21.3333V16C20 15.5609 19.8935 15.3543 19.824 15.2601C19.7524 15.1635 19.6365 15.0737 19.4335 15.0099C18.9691 14.8639 18.3015 14.9397 17.8577 15.1296C17.1897 15.4153 16.5796 15.8628 16.1652 16.2778L16 16.4531V21.3333C16 22.0697 15.4031 22.6667 14.6667 22.6667C13.9829 22.6667 13.4193 22.152 13.3423 21.4888L13.3333 21.3333V13.3333C13.3333 12.597 13.9303 12 14.6667 12ZM10.6667 9.33333C11.403 9.33333 12 9.93029 12 10.6667C12 11.403 11.403 12 10.6667 12C9.93029 12 9.33333 11.403 9.33333 10.6667C9.33333 9.93029 9.93029 9.33333 10.6667 9.33333Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_27_44">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.facebook.com/profile.php?id=100048109194377" target="_blank">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2001_6)">
                            <path d="M17.1378 16.9237H18.6715L19.285 14.4697H17.1378V13.2427C17.1378 12.6108 17.1378 12.0157 18.3648 12.0157H19.285V9.95433C19.085 9.92795 18.3298 9.86844 17.5322 9.86844C15.8666 9.86844 14.6838 10.885 14.6838 12.7519V14.4697H12.8433V16.9237H14.6838V22.1384H17.1378V16.9237Z" fill="white"/>
                            </g>
                            <rect x="5.25" y="5.25" width="21.5" height="21.5" rx="4.75" stroke="white" stroke-width="2.5"/>
                            <defs>
                            <clipPath id="clip0_2001_6">
                            <rect x="4" y="4" width="24" height="24" rx="6" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>

                    </div>
                </div>
                <div className="row header-main">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 ">
                        <div className="d-flex align-items-center gap-2 logo">
                            <a href="/"><img src={image.logo} alt="" id="logoimg" /></a>
                            <a href="/"><img src={image.logotext} alt=""  id="logotext"/></a>
                        </div>
                    </div>
                    <div className="col-sm-6 menu-wrapper d-flex align-items-center">
                        <div className="menu">
                            <ul className="d-flex gap-5 align-items-center justify-content-center">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About us</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                        <div className="consultancybtn">
                            <button onClick={()=>setopenPopup(!openMenu)}>
                               Get free Consultancy
                            </button>
                        </div>
                        <div className="mobile-menu">
                            <button onClick={()=>OpenMenu()}>
                                Menu
                            </button>
                        </div>
                        <div className="mobile-menu-list" style={{display:`${openMenu ? 'block' : 'none'}`, paddingTop:'20px'}}>
                            <div className="row" style={{padding:'0 30px 40px',width:'100%'}}>
                                <div className="col-5"> 
                                    <a href="/"><img src={image.logotext} alt="" style={{width:'100%'}}/></a>
                                </div>
                                <div className="col-4"></div>
                                <div className="col-3">
                                    <span onClick={()=>OpenMenu()}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L29 29" stroke="black" stroke-width="2"/>
                                            <path d="M29 1L1 29" stroke="black" stroke-width="2"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About us</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>    
                                    <a href="tel:+1-440-888-7991" className="callbtn">Call Now</a>
                                </li>
                            </ul>
                            <div className="d-flex gap-2 align-items-center" style={{paddingLeft:'30px'}}> 
                                
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/company/pero-power-innovations/" target="_blank">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_27_44)">
                                        <path d="M24 4C26.2092 4 28 5.79087 28 8V24C28 26.2092 26.2092 28 24 28H8C5.79087 28 4 26.2092 4 24V8C4 5.79087 5.79087 4 8 4H24ZM24 6.66667H8C7.26363 6.66667 6.66667 7.26363 6.66667 8V24C6.66667 24.7364 7.26363 25.3333 8 25.3333H24C24.7364 25.3333 25.3333 24.7364 25.3333 24V8C25.3333 7.26363 24.7364 6.66667 24 6.66667ZM10.6667 13.3333C11.3504 13.3333 11.914 13.848 11.991 14.5112L12 14.6667V21.3333C12 22.0697 11.403 22.6667 10.6667 22.6667C9.98289 22.6667 9.41932 22.152 9.3423 21.4888L9.33333 21.3333V14.6667C9.33333 13.9303 9.93029 13.3333 10.6667 13.3333ZM14.6667 12C15.3217 12 15.8664 12.4724 15.9788 13.095C16.2484 12.9391 16.5267 12.7986 16.8089 12.6778C17.6985 12.2973 19.0309 12.0879 20.2332 12.466C20.8635 12.6641 21.4976 13.0388 21.9677 13.6741C22.3873 14.2414 22.6132 14.9312 22.6582 15.7057L22.6667 16V21.3333C22.6667 22.0696 22.0697 22.6667 21.3333 22.6667C20.6495 22.6667 20.086 22.1518 20.009 21.4888L20 21.3333V16C20 15.5609 19.8935 15.3543 19.824 15.2601C19.7524 15.1635 19.6365 15.0737 19.4335 15.0099C18.9691 14.8639 18.3015 14.9397 17.8577 15.1296C17.1897 15.4153 16.5796 15.8628 16.1652 16.2778L16 16.4531V21.3333C16 22.0697 15.4031 22.6667 14.6667 22.6667C13.9829 22.6667 13.4193 22.152 13.3423 21.4888L13.3333 21.3333V13.3333C13.3333 12.597 13.9303 12 14.6667 12ZM10.6667 9.33333C11.403 9.33333 12 9.93029 12 10.6667C12 11.403 11.403 12 10.6667 12C9.93029 12 9.33333 11.403 9.33333 10.6667C9.33333 9.93029 9.93029 9.33333 10.6667 9.33333Z" fill="#006B4E"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_27_44">
                                        <rect width="32" height="32" fill="#006B4E"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.facebook.com/profile.php?id=100048109194377" target="_blank">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2001_6)">
                                    <path d="M17.1378 16.9237H18.6715L19.285 14.4697H17.1378V13.2427C17.1378 12.6108 17.1378 12.0157 18.3648 12.0157H19.285V9.95433C19.085 9.92795 18.3298 9.86844 17.5322 9.86844C15.8666 9.86844 14.6838 10.885 14.6838 12.7519V14.4697H12.8433V16.9237H14.6838V22.1384H17.1378V16.9237Z" fill="#006B4E"/>
                                    </g>
                                    <rect x="5.25" y="5.25" width="21.5" height="21.5" rx="4.75" stroke="#006B4E" stroke-width="2.5"/>
                                    <defs>
                                    <clipPath id="clip0_2001_6">
                                    <rect x="4" y="4" width="24" height="24" rx="6" fill="#006B4E"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="overlay-popup" style={{display: openPopup ? 'block': 'none' }} onClick={()=>setopenPopup(!openPopup)}></div>

        <div className="consult-popup" style={{display: openPopup ? 'block': 'none' }}>
            <form ref={form} onSubmit={sendEmail}>
                <div className="close-popup" onClick={()=>setopenPopup(!openPopup)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L29 29" stroke="black" stroke-width="2"/>
                        <path d="M29 1L1 29" stroke="black" stroke-width="2"/>
                    </svg>
                </div>
                <h4>GET A FREE<br/> CONSULTATION</h4>
                <div className="d-flex gap-3">
                    <label>
                        <input type="text" placeholder="Name" name="name" required/>
                    </label>
                    <label>
                        <input type="telephone" placeholder="Phone Number" name="Phone" required />
                    </label>
                </div>                            
                <label>
                    <input type="email" placeholder="Email Address" name="Email" required/>
                </label>                         
                <label>
                    <input type="date" placeholder="Preferred Date" name="Date" required/>
                </label>
                <label>
                    <select name="Service" required>
                        <option value="">What Do You Prefer</option>
                        <option value="Total Utility Management Solutions">Total Utility Management Solutions</option>
                        <option value="Energy Monitoring and Managemen">Energy Monitoring and Management</option>
                        <option value="Energy Production">Energy Production</option>
                        <option value="Commercial Solar Projects">Commercial Solar Projects</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    )
}

export default Header;