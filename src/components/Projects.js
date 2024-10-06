import React, { useState } from 'react';
import ban3 from '../assets/ban5.jpg'
import Data from '../Mock'

const Projects = () => {
    const [project, setProj] = useState(Data)
    // console.log(project)

    return (
        <section className='flex  justify-center item-center bg-#f8f9fa pt-20 pb-24 border-b border-#dee2e6' id="project">
            <div className='w-10/12'>
                <h2 className={`relative text-center pb-5 text-black  font-header text-4xl font-header
                    after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[40px] 
                    after:mt-2 after:mx-auto after:left-0 after:right-0`}>
                    Projects</h2>
                <div className='justify-center flex flex-col'>
                    <p className='pb-5 font-header indent-5'>These are some of my best projects. I have built these with
                        React, redux-Toolkit, and Mern. Check them out. </p>
                </div>
                <div className='w-full flex flex-col gap-5 justify-center md:flex-row'>
                    {
                        project.map((data, index) => {
                            return (<div className="border relative  rounded-lg overflow-hidden shadow-lg" key={index}>
                                <img src={require("../assets/" + data.image)} alt="Image 1" class="w-full h-72 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{data.title}</h2>
                                    <p className="text-gray-600">This is a brief description for image 1.</p>
                                </div>
                                <div className='project-description justify-center py-10 pl-10'>
                                    <h3 className='pb-3 pl-5'>Technologies Used</h3>
                                    {
                                        data.skills.map((skill) => {
                                            return (<ul className="pl-5">
                                                <li>{skill}</li>
                                            </ul>)
                                        })
                                    }
                                    <div className='links flex flex-row mt-5 ml-5'>
                                        <a href={data.link} target="_blank"  class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-blue-500 mx-1">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </section >
    );
};

export default Projects;