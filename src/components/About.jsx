import React from 'react'
import profile from '../assets/green-bg.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const About = () => {
  return (
    <div className='flex flex-col w-full'>
      <div id='aboutMe' className='flex flex-row w-full justify-center gap-[150px] flex-wrap'> 
        <div className='flex flex-col justify-center'>
          <img src={profile} alt='Huzaifa Pachisa' className='rounded-[100%] h-[200px] w-[200px] mb-[10px] border border-[rgba(0,0,0,0.2)]'/>
          <span className='flex flex-col justify-center items-center'>
            <h3 className='text-center'>Huzaifa Pachisa</h3>
            <h3 className='text-center'>Full-stack developer</h3>
            <div className='flex flex-row'>
              <a href='https://github.com/huzaifa25a' target='_blank'>
                  <img src={github} alt='github' className='h-[37px] transition-transform duration-300 hover:scale-105 active:scale-105'/>
              </a>
              <a href='https://www.linkedin.com/in/huzaifa-pachisa-a0723a1b6/' target='_blank'>
                  <img src={linkedin} alt='Linkedin' className='h-[40px] transition-transform duration-300 hover:scale-105 active:scale-105'/>
              </a>
              <a href='https://www.instagram.com/huzaifa_pachisa_/?next=%2F' target='_blank'>
                  <img src={instagram} alt='Instagram' className='h-[40px] transition-transform duration-300 hover:scale-105 active:scale-105'/>
              </a>
            </div>
          </span>
        </div>
        <div className='flex flex-col w-[540px] gap-[10px]'>
          <div className='flex flex-col'>
            <h1 className='text-[24px] mb-4 text-center'>About Me</h1>
            <p className='text-justify'>I’m a full-stack developer with a Master’s in Computer Applications. I specialize in building web applications using the MERN stack — React, Node.js, MongoDB, and Express. I’m passionate about creating sleek, functional, and user-friendly interfaces while ensuring high performance. When I'm not coding, you’ll find me gaming or planning my next adventure.</p>
          </div> <br/>
          {/* <div className='flex flex-col items-center'>
            <h1>What I do?</h1>
            <p>I build web apps using the MERN stack — React, Node.js, MongoDB, and Express. My focus is on creating user-friendly interfaces, writing clean code, and ensuring performance is top-notch.</p>
          </div> <br/> */}
          <div className='flex flex-col items-center'>
            {/* <h1 className='mb-2 font-medium text-[18px]'>Freelance Life</h1> */}
            {/* <p className='text-justify'>I also freelance on Fiverr, where I’ve earned a Level 2 Seller badge. I enjoy working with clients around the world and delivering work that exceeds expectations.</p> <br/><br/> */}
            <div className='flex flex-row gap-[20px] items-center'>
              <a
                href="/Huzaifa_Pachisa-resume.pdf"
                download="cv.pdf"
                className="inline-block border-black border-[2px] px-1 py-0.5 rounded-md transition-transform duration-200 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg"
              >
                Download CV
              </a>
              {/* <a href='https://www.fiverr.com/huzaifa25' target='_blank' className='text-[#5a5a5a] hover:text-[#393939] transition-transform duration-200 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] hover:scale-105 hover:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3) active:text-[#393939] active:scale-105 active:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]'>Checkout my gig on Fiverr</a> */}
            </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default About