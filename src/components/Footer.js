import React from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {

    const scrollToTop = () => {
        const scrollDuration = 2000; // duration in milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15); // in
    };

    return (
        <div className='flex flex-col items-center justify-center relative'>
            <div className='heading py-5'>
                <h2 className='text-3xl font-header'>Follow us</h2>
            </div> 
             <div className='footer flex pb-5'>
                <a href="" className='hover:rounded-3xl transition duration-300 delay-150'><SlSocialLinkedin size={30} /></a>
                <a href="" className='hover:rounded-3xl transition duration-300 delay-150'><FiFacebook size={30} /></a>
                <a href="" className='hover:rounded-3xl transition duration-300 delay-150'><SlSocialTwitter size={30} /></a>
            </div>
            <button onClick={scrollToTop}
                className="bg-blue-500 absolute right-0 text-white p-4 rounded-full right-3 hover:bg-blue-700 transition-colors">
                <FaArrowUpLong />
            </button>
        </div>
    );
};

export default Footer;