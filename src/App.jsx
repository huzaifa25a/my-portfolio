import React from 'react';
import './App.css';
import Header from './components/Header'
import telegram from './assets/telegram.svg'
import profile from './assets/profile-2.png'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Header/>
        <div id='main-container' className='p-16 bg-[#f8f8f8]'>
          <div id="Hero-section" className='flex flex-row justify-center gap-[100px] shadow-md rounded-lg bg-[#fbfbfb] mt-[25px]'>
            <div className='flex flex-col font-kufam font-normal justify-evenly'>
              <div id='hello-section' className='flex flex-col'>
                <h1 className='text-[24px]'>Hello!</h1>
                <h3 className='text-[34px] ml-[25px]'>I am <span className='font-bold text-[42px]'>Huzaifa,</span></h3>
                <h3 className='text-[34px]'>A full-stack developer.</h3>
              </div>
              <div id='hire-me' className='flex flex-row justify-start items-center'>
                <a href='#Contact'>
                <button className='p-[4px] mt-[12px] rounded-sm border-black border-[2px] flex flex-row items-center cursor-pointer text-[16px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg'>
                  Hire me
                  <img src={telegram} alt='contact me' height={20} width={20} className='ml-[4px]' />
                </button>
                </a>
              </div>
            </div>
            <div>
              <img src={profile} alt='Huzaifa Pachisa' className='h-[420px]'/>
            </div>
          </div>
          <div id='About' className='pt-12 mt-[-48px] my-8'>
            <div className='p-8 my-8 w-full bg-[#fbfbfb] shadow-md rounded-lg'>
              <div className=''>
                <About/>
              </div>
            </div>
          </div>
          <div id='Skills' className='pt-12 mt-[-48px] my-8'>
            <div className='p-8 w-full flex justify-center items-center bg-[#fbfbfb] shadow-md rounded-lg'>
              <div className='w-[540px]'>
                <Skills/>
              </div>
            </div>
          </div>
          <div id='Services' className='pt-12 mt-[-48px] my-8'>
            <div className='p-8 w-full flex justify-center items-center bg-[#fbfbfb] shadow-md rounded-lg'>
              <div className=''>
                <Services/>
              </div>
            </div>
          </div>
          <div id='Projects' className='pt-12 mt-[-48px] my-8'>
            <div className='p-8 w-full flex justify-center items-center bg-[#fbfbfb] shadow-md rounded-lg'>
              <div className=''>
                <Projects/>
              </div>
            </div>
          </div>
          <div id="Contact" className='pt-12 mt-[-48px] my-8'>
            <div className='p-8 w-full mb-[-32px] flex justify-center items-center bg-[#fbfbfb] shadow-md rounded-lg'>
              <div className=''>
                <Contact/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default App;