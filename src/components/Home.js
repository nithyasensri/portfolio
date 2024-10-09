import React from 'react';
import ban1 from '../assets/ban3.jpg'
import Resume from '../assets/Nithya.pdf'


const Home = () => {
    return (
        <section className='flex items-center justify-center relative z-0' id="home">
            <div className='relative '>
                <img className='w-full h-auto' src={ban1} />
                <div className='absolute flex-col flex top-16 sm:top-20 md:top-32 lg:top-64 right-0  pr-20 '>
                    <h1 className='text-shadow-red sm:text-4xl  md:text-5xl lg:text-6xl text-white font-header '>I am Nithya  <br />
                        <p className='text-shadow-red sm:text-4xl  md:text-5xl lg:text-6xl text-white font-header'>I am React Developer</p>
                    </h1>
                    <div className='flex flex-row mt-4'>
                        <a href={Resume} target="_blank" download="My_File.pdf">
                            <button className="bg-yellow-500 text-white font-bold  sm:px-2 sm:py-1 sm:px-2 md:py-2 md:px-4 rounded hover:bg-blue-500 mr-5 font-nav">Download Resume</button>
                        </a>
                        <a href="#project" className="bg-yellow-500 text-white font-bold sm:px-2 sm:py-1 sm:px-2 md:py-2 md:px-4 rounded hover:bg-blue-500 font-nav">
                            Projects
                        </a>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Home;