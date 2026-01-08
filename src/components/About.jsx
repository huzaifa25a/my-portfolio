import React from 'react'
import { ThemeContext } from '../ThemeContext'
import profile from '../assets/green-bg.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import guthub_white from '../assets/icons8-github.svg'
import linkedin_white from '../assets/icons8-linkedin.svg'
import instagram_white from '../assets/icons8-instagram.svg'
import { useContext } from 'react'

const About = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className='flex flex-col w-full'>
      <div id='aboutMe' className='flex flex-row w-full justify-center gap-[150px] flex-wrap'> 
        <div className='flex flex-col justify-center'>
          <img src={profile} alt='Huzaifa Pachisa' className={`rounded-[100%] h-[200px] w-[200px] mb-[10px] border ${darkMode ? 'shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff]' : 'border-[rgba(0,0,0,0.2)]'}`}/>
          <span className='flex flex-col justify-center items-center'>
            <h3 className='text-center'>Huzaifa Pachisa</h3>
            <h3 className='text-center'>Full-stack developer</h3>
            <div className={`flex flex-row ${darkMode ? 'gap-1' : ''}`}>
              <a href='https://github.com/huzaifa25a' target='_blank'>
                  <img src={darkMode ? guthub_white : github} alt='github' className={`${darkMode ? 'h-[34px]' : 'h-[37px]'} transition-transform duration-300 hover:scale-105 active:scale-105`}/>
              </a>
              <a href='https://www.linkedin.com/in/huzaifa-pachisa-a0723a1b6/' target='_blank'>
                  <img src={darkMode ? linkedin_white : linkedin} alt='Linkedin' className={`${darkMode ? 'h-[34px]' : 'h-[40px]'} transition-transform duration-300 hover:scale-105 active:scale-105`}/>
              </a>
              <a href='https://www.instagram.com/huzaifa_pachisa_/?next=%2F' target='_blank'>
                  <img src={darkMode ? instagram_white : instagram} alt='Instagram' className={`${darkMode ? 'h-[34px]' : 'h-[40px]'} transition-transform duration-300 hover:scale-105 active:scale-105`}/>
              </a>
            </div>
          </span>
        </div>
        <div className='flex flex-col w-[540px] gap-[10px]'>
          <div className='flex flex-col'>
            <h1 className='text-[24px] mb-4 text-center'>About Me</h1>
            <p className='text-justify'>I’m a full-stack developer with a Master’s in Computer Applications. I specialize in building web applications using the MERN stack — React, Node.js, MongoDB, and Express. I’m passionate about creating sleek, functional, and user-friendly interfaces while ensuring high performance. When I'm not coding, you’ll find me gaming or planning my next adventure.</p>
          </div> <br/>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row gap-[20px] items-center'>
              <a
                href="/Huzaifa P - Resume.pdf"
                download="cv.pdf"
                className={`inline-block border-black border-[2px] px-1 py-0.5 rounded-md transition-transform duration-200 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-105 ${darkMode ? 'hover:shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff]' : 'hover:shadow-lg active:shadow-lg'}`}
              >
                Download CV
              </a>
            </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default About