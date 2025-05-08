import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import gmail from '../assets/gmail.svg'

const Footer = () => {
  return (
    <>
    <hr style={{color: 'lightgrey'}}/>
    <footer className='flex flex-col justify-center items-center p-6'>
        <h1>You can also reach out to me on:</h1>
        <div className='flex flex-row justify-center'>
            <a href='mailto:pachisahuzaifa@gmail.com' target='_blank'>
                <img src={gmail} alt='email' className='h-[37px] transition-transform duration-300 hover:scale-105 active:scale-105'/>
            </a>
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
        <p>Made by Huzaifa P &copy; 2025</p>
    </footer>
    </>
  )
}

export default Footer