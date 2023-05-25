import React from 'react';
import logo from '../../../../assets/images/logo/logo.jfif'
import background from '../../../../assets/images/login/login.jpg'
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookMessenger, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" p-10 bg-white">
                <div className='md:flex justify-between border-b-2 py-5'>
                    <div>
                        <div>
                            <Link className='mx-3 ' to='/'>
                                <div className="flex items-center space-x-4">
                                    <img className='w-28' src={logo} alt="" />
                                    <span className='font-bold text-2xl text-orange-600 inline'>Toy <span className='text-black'>Cars</span> </span>
                                </div>
                            </Link>
                            <div>
                                <input className=' p-4 border-b-2 border-orange-700 w-full' type="text" placeholder='Ener Your Email' />
                                <button className='btn btn-primary mt-5'>Subscribe</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-end'>
                        <p className="font-bold mb-5">Contuct With Us :</p>
                        <p>Phone : 01957119777</p>
                        <p>Email : juwel2463@gmail.com</p>
                        <p>87, New Eskaton road, Home Town Complex,<br /> Banglamotor Dhaka 1000, Bangladesh</p>
                        <p>Copyright © 2023 - All right reserved</p>
                        <div className='mt-5'>
                           <button className='btn btn-circle btn-outline  border-orange-700 text-2xl'><FaFacebook></FaFacebook></button>
                           <button className='btn btn-circle btn-outline mx-4 border-orange-700 text-2xl'><FaFacebookMessenger></FaFacebookMessenger></button>
                           <button className='btn btn-circle btn-outline border-orange-700 text-2xl'><FaInstagramSquare></FaInstagramSquare></button>
                           <button className='btn btn-circle btn-outline ms-4 border-orange-700 text-2xl'><FaTwitter></FaTwitter></button>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className="font-bold mb-5">Recent News :</p>
                       <div className='font-semibold'>
                       <Link>About Us</Link> <br />
                        <Link>Service</Link> <br />
                        <Link>Get In Touch</Link>

                       </div>
                    </div>
                </div>
                <p className='text-center py-5'>Copyright © 2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;