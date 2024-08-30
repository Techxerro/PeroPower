import React from "react";
import './style.scss';
import { image } from "../../../Assets";

const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="logo d-flex gap-3 align-items-end">
                            <img src={image.whitelogo} alt="" id="whitelogo"/>
                            <img src={image.whitelogotext} alt="" id="whitelogotext"/>
                        </div>
                        <p>From Solar Panels and Battery Backup Systems to the latest in Energy Monitoring hardware and software, PPI has always been on the cutting edge of the alternate energy industry.</p>
                    </div> 
                    <div className="col-lg-3 col-12"></div>
                    <div className="col-lg-5 col-12">
                        <div>
                            <div className="footer-content-wrapper d-flex footermenu">
                                <div className="footer-head-title">
                                    Quick Link
                                </div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-content-wrapper d-flex">                                
                                <div className="footer-head-title">
                                    Social Media
                                </div>
                                <div className="d-flex gap-3 ">
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
                            <div className="d-flex footer-content-wrapper" style={{borderBottom:'0'}}>                                
                                <div className="footer-head-title">
                                    Contact
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <ul className="footer-contact-info">
                                        <li>
                                            <a href="mailto:joseph@powersquared.tech">joseph@powersquared.tech</a>
                                        </li>
                                        <li>
                                            <a href="tel:+1-440-888-7991.">+1-440-888-7991.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="row copyright">
                    <div className="col-lg-6 col-12">
                        <p>©peropower 2024. All rights reserved. Designed by <a href="https://www.techqilla.com" target="_blank" style={{color:'#F0E40B'}}> Techqilla </a></p>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-end">
                        {/* <p> <a href="">Privacy policy</a> </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;