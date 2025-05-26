import React, { useContext } from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import gmail from '../assets/gmail.svg'
import guthub_white from '../assets/icons8-github.svg'
import gmail_white from '../assets/icons8-gmail.svg'
import linkedin_white from '../assets/icons8-linkedin.svg'
import instagram_white from '../assets/icons8-instagram.svg'
import { ThemeContext } from '../ThemeContext'

const Footer = () => {
    const {darkMode} = useContext(ThemeContext);
  return (
    <>
    {!darkMode && 
        <hr style={{color: 'lightgrey'}}/>
    }
    <footer className={`${darkMode ? 'border-t shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff] border-[#0ff]' : ''} flex flex-col justify-center items-center p-6 ${darkMode ? 'bg-[#393939]' : ''}`}>
        <h1>You can also reach out to me on:</h1>
        <div className={`flex flex-row justify-center ${darkMode ? 'gap-1' : ''}`}>
            <a href='mailto:pachisahuzaifa@gmail.com' target='_blank'>
                <img src={darkMode ? gmail_white : gmail} alt='email' className={`${darkMode ? 'h-[34px]' : 'h-[37px]'} transition-transform duration-100 hover:scale-105 active:scale-105`}/>
            </a>
            <a href='https://github.com/huzaifa25a' target='_blank'>
                <img src={darkMode ? guthub_white : github} alt='github' className={`${darkMode ? 'h-[34px]' : 'h-[37px]'} transition-transform duration-100 hover:scale-105 active:scale-105`}/>
            </a>
            <a href='https://www.linkedin.com/in/huzaifa-pachisa-a0723a1b6/' target='_blank'>
                <img src={darkMode ? linkedin_white : linkedin} alt='Linkedin' className={`${darkMode ? 'h-[34px]' : 'h-[40px]'} transition-transform duration-100 hover:scale-105 active:scale-105`}/>
            </a>
            <a href='https://www.instagram.com/huzaifa_pachisa_/?next=%2F' target='_blank'>
                <img src={darkMode ? instagram_white : instagram} alt='Instagram' className={`${darkMode ? 'h-[34px]' : 'h-[40px]'} transition-transform duration-100 hover:scale-105 active:scale-105`}/>
            </a>
        </div>
        <p>Made by Huzaifa P &copy; 2025</p>
    </footer>
    </>
  )
}

export default Footer