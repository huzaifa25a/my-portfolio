import React from 'react'
import {useState, useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [visible, setVisible] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        const email = form.current.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setStatus('invalidEmail');
            setVisible(true);
            setTimeout(() => {
              setVisible(false);
              setTimeout(() => setStatus(null), 500);
            }, 3000);
            return;
          }

        const res = await emailjs.sendForm('service_nd6i27d', 'template_1ic4xat', form.current, 'v8cHHk5-5tvOavAX5');
        try{
            if(res){
                setStatus('success');
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    setTimeout(() => setStatus(null), 500);
                }, 3000);
                console.log('Email sent successfully');
            }
            else{
                setStatus('error');
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    setTimeout(() => setStatus(null), 500);
                  }, 3000);
                console.log('There is some error sending email')
            }
        }
        catch(error){
            setStatus('error');
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                setTimeout(() => setStatus(null), 500);
              }, 3000);    
            console.log('Error sending email:', error);
        }
    }
  return (
    <div className='flex justify-center'>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col items-center'>
                <h1 className='text-[24px] mb-4'>Contact Me</h1>
                <p>Feel free to reach out to me via email or through my social media accounts.</p>
            </div>
            <label htmlFor="name">Enter Name:</label>
            <input 
                className='rounded-sm border-black border-[2px] flex flex-row px-[6px] hover:bg-[#ededed]'
                type = 'text'
                name='name'
                placeholder='Name'
                required
            /><br/>
            <label htmlFor="email">Enter Email:</label>
            <input
                className='rounded-sm border-black border-[2px] flex flex-row px-[6px] hover:bg-[#ededed]' 
                type = 'text'
                placeholder='email'
                name='email'
                required
            /><br/>
            <label htmlFor="subject">Enter subject:</label>
            <input 
                className='rounded-sm border-black border-[2px] flex flex-row px-[6px] hover:bg-[#ededed]'
                type = 'subject'
                placeholder='subject'
                name='subject'
            /><br/>
            <label htmlFor="message">Enter Message:</label>
            <textarea 
                className='rounded-sm border-black border-[2px] p-[6px] leading-[2em] min-h-[90px] h-auto hover:bg-[#ededed]'
                placeholder='Type your message...'
                required
                name='message'
            /><br/>
            <div className='flex justify-center'>
                <input 
                    className='w-[78px] rounded-sm border-black border-[2px] px-[6px] hover:bg-[#ededed] cursor-pointer'
                    type = 'submit'
                />
            </div>
            {status && (
                <div className={`mt-[20px] flex justify-center transition-all duration-500 ease-in-out transform ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <div className={`text-[#000000] p-[10px] rounded-md w-[300px] text-center ${
                    status === 'success'
                        ? 'bg-[rgb(159,221,146)] drop-shadow-[0_6px_6px_rgba(159,221,146,0.8)]'
                        : 'bg-[rgb(221,146,146)] drop-shadow-[0_6px_6px_rgba(221,146,146,0.8)]'
                    }`}>
                    <p>
                        {status === 'success'
                        ? 'Your message was sent Successfully!'
                        : status === 'error'
                        ? 'Your message was not sent! Please try again.'
                        : 'Please enter a valid email address.'}
                    </p>
                    </div>
                </div>
            )}
        </form>
    </div>
  )
}

export default Contact