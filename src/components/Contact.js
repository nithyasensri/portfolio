import React from 'react';
import ban1 from '../assets/ban3.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
    return (
        <section className='justify-center item-center bg-customGray pt-20 pb-24 border-b border-#dee2e6' id='contact'>
                <h2 className={`relative text-center pb-5 text-black  font-header text-4xl font-header
                after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[40px] 
                after:mt-2 after:mx-auto after:left-0 after:right-0`}>Contact</h2>
            <div className='flex flex-col chat-notification shadow-contact'>
                <p>For discuss more in detail please contact me</p>
                <div className='flex flex-col mt-5'>
                    <div className='flex flex-row text-center justify-center font-nav'>
                        <span className='font-bold  pt-1 pr-2 mb-2'><FaMapMarkerAlt /></span>
                        <span className=''>93,Tamarin Gardens </span>
                    </div>
                    <p className='text-center justify-center'>Cherry hinton</p>
                    <p className='flex flex-row text-center justify-center mt-5'><span className='font-bold pt-1 pr-2 mb-2'><LuPhone /></span>98438523</p>
                    <p className='flex flex-row text-center justify-center mt-5'><span className='font-bold pt-1 pr-2 mb-2'><MdOutlineEmail /></span>shrishivani18052018@gmail.com</p>
                </div>
            </div>
        </section >
    );
};

export default Contact;