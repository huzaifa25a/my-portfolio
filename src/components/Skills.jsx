import React from 'react';
import '../App.css'
import { useInView } from 'react-intersection-observer';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/node-js.svg';
import mongo from '../assets/mongodb.svg';
import bootstrap from '../assets/bootstrap.svg';
import tailwind from '../assets/tailwindcss.svg';
import css from '../assets/css3.png';

const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const skills = [
        {name: 'JavaScript', icon: javascript, level: 84},
        {name: 'ReactJs', icon: react, level: 78},
        {name: 'NodeJs', icon: nodejs, level: 60},
        {name: 'MongoDB', icon: mongo, level: 50},
        {name: 'Bootstrap', icon: bootstrap, level: 80},
        {name: 'Tailwind', icon: tailwind, level: 90},
        {name: 'CSS3', icon: css, level: 90},
    ]
    return(
        <div ref={ref} className='flex flex-col'>
            <h1 className='flex justify-center text-[24px] mb-4'>Skills</h1>
            {skills.map((skill, index) => (
                <div id='skillSection'>
                    <div id='skillName' key={index} className='flex justify-start items-center mb-2'>
                        <div className='flex flex-row min-w-[150px] items-center'>
                            <span className='mr-[7px]'>{skill.name}</span>
                            <span className='mr-[15px]'>
                                <img src={skill.icon} alt={skill.name} className='h-[40px]'/>
                            </span>
                        </div>
                        <div id='skillBar' className='w-full bg-gray-300 rounded-full h-4'>
                        <div 
                            className='bg-[#1d8cb5ea] h-4 rounded-full transition-all duration-1500 ease-in-out'
                            style={{ width: inView? `${skill.level}%` : '0%' }}
                        ></div>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default Skills;