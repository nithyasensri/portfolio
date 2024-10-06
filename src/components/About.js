import React from 'react';
import ban3 from '../assets/ban5.jpg'


const About = () => {
    return (
        <section className='flex  justify-center item-center bg-customGray pt-20 pb-24 border-b border-#dee2e6' id="about" >
            <div className='md:w-10/12 '>
                <h2 className={`relative text-center pb-5 text-black  font-header sm:2xl md:3xl lg:text-4xl font-header
                after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[40px] 
                after:mt-2 after:mx-auto after:left-0 after:right-0`}>About Me</h2>
                <div class="flex flex-row">
                    <div className=' hidden sm:block sm:w-[100%] md:w-[40%] lg:w-[30%] relative mt-5  h-[400px] '>
                        <img className="p-4 left-0 right-0 absolute
                         mx-auto max-h-full w-11/12 shadow-3xl" src={ban3} />
                    </div>
                    <div className='w-[100%] sm:w-[100%] md:w-[60%] lg:w-[70%] mt-5 flex-col'>
                        <p className='leading-7 font-nav'>I am a passionate beginner React developer dedicated to creating dynamic and responsive web applications. Currently expanding my
                            skills in modern web development technologies to build innovative and user-friendly solutions.
                        </p>
                        <div className='skills'>
                            <div className='flex flex-col'>
                                <h2 className='text-center py-5 font-header text-2xl'>Skills</h2>
                                <div className='flex flex-row'>
                                    <div className='w-1/2 px-10'>
                                        <div className='skill  mb-5'>
                                            <h3>Javascript</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    85%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>React Js</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    85%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Redux</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    60%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Express Js</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    70%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Mongo DB</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    70%</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 px-10'>
                                        <div className='skill  mb-5'>
                                            <h3>Mysql</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    85%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Html</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    85%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Css</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    85%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Git</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    70%</span> */}
                                            </div>
                                        </div>
                                        <div className='skill  mb-5'>
                                            <h3>Jira</h3>
                                            <div className="relative block bg-slate-100 h-2 mt-1 ">
                                                <div className="absolute bg-pink-500 w-3/4 h-2">
                                                </div>
                                                {/* <span className="absolute text-xs px-1.5
                                                 block right-0 top-4 p-1 z-50">
                                                    70%</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;