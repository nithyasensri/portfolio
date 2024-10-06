import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { useEffect } from 'react';

const Headers = () => {
    const [toggle, setToggle] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const smoothScrollTo = (targetId) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const scrollDuration = 2000; // duration in milliseconds
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, scrollDuration);
            window.scrollTo(0, run);
            if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const icon = document.getElementById('myIcon');
            if (scrollTop > 100) {
                console.log('aa')
                setIsScrolled(true);
                icon.classList.remove('text-white');
                icon.classList.add('text-red-500');
            } else {
                console.log('bb')
                setIsScrolled(false);
                icon.classList.remove('text-red-500');
                icon.classList.add('text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed w-full flex justify-between px-5 py-3  z-10 ${isScrolled ? 'shadow-nav bg-white' : 'bg-primary'} 
        transition-colors duration-300`}>
            <a className={`font-bold font-nav  ${isScrolled ? 'text-black' : 'text-white'}`} href="#">Develop
                <span className="font-bold text-orange-300" >er</span></a>
            <nav className='hidden md:block '>
                <ul className={`flex  font-nav ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <li>
                        <button href="/" onClick={() => smoothScrollTo('home')}
                            className={`relative  w-fit block 
                            after:block after:content-[''] after:absolute after:h-[3px] ${isScrolled ? ' after:bg-black' : 'after:bg-white'}
                             after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>
                            Home</button>
                    </li>
                    <li><a href="#about" onClick={() => smoothScrollTo('about')}
                        className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        About us</a></li>
                    <li><a href="#project" onClick={() => smoothScrollTo('project')}
                        className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        Portfolio</a></li>
                    <li><a href="#contact" onClick={() => smoothScrollTo('contact')}
                        className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        Contact us</a></li>
                </ul>
            </nav>
            {
                toggle && <nav className='block md:hidden fixed top-0 right-0 '>
                    <ul className={`flex flex-col text-white mob-nav `}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#project">Portfolio</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </nav>
            }
            <button id="myIcon" className='block md:hidden'  onClick={() => setToggle(!toggle)}><Bars3Icon className={`h-5 ${isScrolled ? ' text-black' : 'text-white'}`} /></button>
        </header >
    );
};

export default Headers;