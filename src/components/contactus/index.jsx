import React, { useState, useEffect } from 'react'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'
import github from "../../assets/images/github.png";
import medium from "../../assets/images/medium.png";

const Contact = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')
  const [canSend, setCanSend] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    generateNewQuestion()
  }, [])

  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * 10))
    setNum2(Math.floor(Math.random() * 10))
    setAnswer('')
    setCanSend(false)
  }

  const checkAnswer = (value) => {
    setAnswer(value)
    setCanSend(parseInt(value) === (num1 + num2))
  }

  const handleSubmit = () => {
    const newErrors = {}
    if (!message.trim()) {
      newErrors.message = 'Please enter your message'
    }
    if (!name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const mailtoLink = `mailto:musman@sprintsynergy.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`
      window.location.href = mailtoLink
      setMessage('')
      setName('')
      setEmail('')
      setAnswer('')
      generateNewQuestion()
    }
  }

  return (
    <div
    id="contact" className='flex flex-col lg:flex-row gap-10 bg-black min-h-auto py-10 px-4 lg:px-8'>
    <div className='message_section grid h-full justify-center items-center mx-auto lg:mx-16 w-full lg:w-[50%]'>
    <span className='font-semibold text-2xl lg:text-3xl text-white mb-2'>Message</span>
    <div className="w-full"> 
        <textarea 
          className='bg-white h-40 w-full lg:w-[90%] p-2 mb-2 rounded-[8px]' 
          placeholder='Message' 
          name="message_box" 
          id="msg_box"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <div className='text-red-500 mb-1'>{errors.message}</div>}
        <input 
          type="text" 
          className='bg-white w-full lg:w-[90%] p-2 mb-2 rounded-[8px]' 
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className='text-red-500 mb-1'>{errors.name}</div>}
        <input 
          type="text" 
          className='bg-white w-full lg:w-[90%] p-2 mb-2 rounded-[8px]' 
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className='text-red-500 mb-2'>{errors.email}</div>}
        <div className='flex items-center gap-4 w-full lg:w-[90%] my-4 '>
          <span className='text-white whitespace-nowrap'>What is {num1} + {num2}?</span>
          <input 
            type="text" 
            className='bg-white p-2 rounded-[8px] w-16' 
            value={answer}
            onChange={(e) => checkAnswer(e.target.value)}
          />
          <button 
            className={`text-black rounded-[8px] w-20 h-10 ${canSend ? 'bg-white' : 'bg-gray-400'}`} 
            type='submit'
            disabled={!canSend}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
    </div>   
    </div>       
        <div className='social_links text-white pt-2 px-4 lg:px-0 w-full lg:w-auto'>
          <div className='flex flex-col gap-y-3'>
          <span className='font-bold text-xl lg:text-2xl'>Get in touch</span>
                  <div className='flex items-center gap-2 text-sm lg:text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+92-305-7444101</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm lg:text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+971-56-3117690</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm lg:text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>muhammad.usman101@hotmail.com</span>
                  </div>
                  </div>
          <div className='py-6 lg:py-10'>
            <span className='text-xl lg:text-2xl font-bold'>Follow Me</span>
            <div className='flex gap-x-2.5 mt-6 lg:mt-10'>
                <div className='facebook_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://www.facebook.com/muhammadusmansqa"><img src={facebook} alt="" /></a>
                </div>
                <div className='twitter_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://x.com/musmansqa?s=21&t=NodGaNT6fw8ocUb9Y-1fhw"><img src={twitter} alt="" /></a>
                </div>
                <div className='linked_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://www.linkedin.com/in/sdet-muhammadusman/" target='_blank'><img src={linkedin} alt="" /></a>
                </div>
                <div className='instagram_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://www.instagram.com/muhammadusmansqa/"><img src={instagram} alt="" /></a>
                </div>
                <div className='github_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://github.com/sardar-usman"><img src={github} alt="" /></a>
                </div>
                <div className='medium_icon bg-white rounded-[6px] p-1.5 lg:p-2 w-8 lg:w-9'>
                  <a href="https://medium.com/@link2muhammadusman"><img src={medium} alt="" /></a>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact