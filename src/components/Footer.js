import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className='py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="images/newsletter.png" alt="" />
                                <h3 className='mb-0 text-white'>Sign Up for NewsLetter</h3>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" className="form-control py-1" placeholder='Your Email Address' aria-label='Your Email Address' aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6s '>
                                    Hno: 11a Nguyen Quang Bich, <br />Tan Binh District, HCM.City
                                    <br />Pincode: 6000
                                </address>
                                <a className='text-white mt-2 d-block mb-1' href="tel:+84 933385376 ">+84 933 385 376 </a>
                                <div className="social-icons d-flex align-iten-center gap-15 mb-4">
                                    <a href="#" className='text-white fs-5'>
                                        <BsLinkedin />
                                    </a>
                                    <a href="#" className='text-white fs-5'>
                                        <BsGithub />
                                    </a>
                                    <a href="#" className='text-white fs-5'>
                                        <BsFacebook />
                                    </a>
                                    <a href="#" className='text-white fs-5'>
                                        <BsInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptop</Link>
                                <Link className='text-white py-2 mb-1'>Headphone</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}    </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer