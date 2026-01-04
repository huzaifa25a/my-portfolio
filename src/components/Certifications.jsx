import React, { useContext, useState } from 'react'
import aws_ccp from '../assets/aws-certified-cloud-practitioner.png'
import az900 from '../assets/azure-fundamentals.png'
import { ThemeContext } from '../ThemeContext'
import '../App.css'

const Projects = () => {
    const {darkMode} = useContext(ThemeContext);
  const Certifications = [
    {
      image: aws_ccp,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/7c3f5589-b10b-495f-9b77-5339612c68d7/public_url'
    },
    {
      image: az900,
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      link: 'https://learn.microsoft.com/en-us/users/huzaifapachisa-0285/credentials/bbc8a14c32836a47'
    },
  ];

  return (
    <div id='Certifications' className='flex flex-col items-center justify-center flex-wrap'>
      <h1 className='text-[24px] mb-6'>My Certifications</h1>
      <div className='flex flex-row flex-wrap gap-10 justify-center'>
        {Certifications.map((certificate, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-[30px] w-[350px] h-[500px] transition-all duration-500 ease-in-out hover:scale-105 active:scale-105 border-[2px] ${darkMode ? 'shadow-[0_0_2px_#0ff,0_0_2px_#0ff,0_0_2px_#0ff] hover:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] border-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff]' : 'shadow-md hover:shadow-lg active:shadow-lg border-black '}`}
          >
            <img src={certificate.image} />
            <div className='mt-2 flex flex-col justify-around'>
              <span className = 'font-semibold text-center mb-2'>
                {certificate.name}
              </span>
              <div className={`flex flex-col items-center text-justify`}>
                <p className='font-medium text-sm mt-2 mb-6'>
                  Issuer: {certificate.issuer}
                </p>
                <a
                  href={certificate.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-block border-black border-[2px] px-1 py-0.5 rounded-md transition-transform duration-200 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ${darkMode ? 'hover:shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff]' : 'hover:shadow-lg active:shadow-lg'}`}
                >
                  credential link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
