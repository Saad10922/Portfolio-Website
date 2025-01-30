import React from 'react'

const Contact = () => {
  return (
    <div className='flex gap-10 bg-black max-h-screen py-10'>
        <div className='message_section grid h-full justify-center items-center w-[50%]'>
    <span className='font-semibold text-3xl text-white mb-2'>Message</span>
    <div className="w-full"> 
        <textarea className='bg-white h-40 w-[90%] p-2 mb-4 rounded-[8px]' name="message_box" id="msg_box"></textarea>
        <input type="text" className='bg-white w-[90%] p-2 mb-4 rounded-[8px]' placeholder='Name' />
        <input type="text" className='bg-white w-[90%] p-2 rounded-[8px]' placeholder='Email Address' />
    </div>
   </div>       
        <div className='social_links'>
          <div>
          <span>Get in touch</span>
          <p>Devsinc, 1160 Battery St suite 1111, San Francisco, CA 94111, USA</p>
          <span>Hi@usmanasif.com</span>
          </div>
          <div>
            <span>Follow Us</span>
            <div></div>
          </div>

        </div>
    </div>
  )
}

export default Contact