import React, { useState, useEffect } from 'react'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'

const Contact = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')
  const [canSend, setCanSend] = useState(false)

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

  return (
    <div className='flex gap-10 bg-black max-h-screen py-10'>
    <div className='message_section grid h-full justify-center items-center mx-16 w-[50%]'>
    <span className='font-semibold text-3xl text-white mb-2'>Message</span>
    <div className="w-full"> 
        <textarea className='bg-white h-40 w-[90%] p-2 mb-4 rounded-[8px]' placeholder='Message' name="message_box" id="msg_box"></textarea>
        <input type="text" className='bg-white w-[90%] p-2 mb-4 rounded-[8px]' placeholder='Name' />
        <input type="text" className='bg-white w-[90%] p-2 mb-4 rounded-[8px]' placeholder='Email Address' />
        <div className='flex items-center gap-4 w-[90%] mb-4'>
          <span className='text-white'>What is {num1} + {num2}?</span>
          <input 
            type="text" 
            className='bg-white p-2 rounded-[8px] flex-grow' 
            value={answer}
            onChange={(e) => checkAnswer(e.target.value)}
          />
          <button 
            className={`text-black rounded-[8px] w-20 h-10 ${canSend ? 'bg-white' : 'bg-gray-400'}`} 
            type='submit'
            disabled={!canSend}
          >
            Send
          </button>
        </div>
    </div>   
    </div>       
        <div className='social_links text-white pt-2'>
          <div className='flex flex-col gap-y-3'>
          <span className='font-bold text-2xl'>Get in touch</span>
          <p>Devsinc, 1160 Battery St suite 1111, San Francisco, CA 94111, USA</p>
          <span>Hi@usmanasif.com</span>
          </div>
          <div className='py-10'>
            <span className='text-2xl font-bold '>Follow Us</span>
            <div className='flex gap-x-2.5 mt-10'>
                <div className='facebook_icon bg-white rounded-[6px] p-2  w-9'>
                  <a href=""><img src={facebook} alt="" /></a>
                </div>
                <div className='twitter_icon bg-white rounded-[6px] p-2  w-9'>
                  <a href=""><img src={twitter} alt="" /></a>
                </div>
                <div className='linked_icon bg-white rounded-[6px] p-2  w-9'>
                  <a href=""><img src={linkedin} alt="" /></a>
                </div>
                <div className='instagram_icon bg-white rounded-[6px] p-2  w-9'>
                  <a href=""><img src={instagram} alt="" /></a>
                </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Contact