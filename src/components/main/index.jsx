import React from 'react'
import main_img from '../../assets/images/main.jpg'

const Main = () => {
  return (
    <div>
        <div className='grid grid-cols-2 bg-[#1D1D1D]  w-full h-[80%]  text-white '>
            <div className='w-[1/2%] pt-26 flex flex-col gap-6 m-40'>
            <span className='font-medium text-4xl'>Muhammad Usman</span>
            <p className='text-2xl'>Thought Leader, Tech Entrepreneur, Investor</p>
            <span className='text-4xl font-semibold'>Founder and CEO</span>
            <p className='text-2xl'>With a passion for tech and a lifelong commitment to nurturing visionary entrepreneurs, I am eager to dedicate my life to transforming lives through innovation.</p>
                      <button className='bg-white text-black px-6 py-3 mt-4 ml-10 w-30 h-10 rounded-[2%] text-[16px] text-center relative group z-[0]'>
                        <span className='relative z-[1]'>Lets Talk<span className='transition-transform duration-300 inline-block group-hover:translate-x-2'>{`>`}</span></span>
                      </button>            
            </div>            
            <div className='w-[1/2] -mt-10'><img className='h-[100%] w-[80%] ' src={main_img} alt="main" /></div>
        </div>    
    </div>
  )
}

export default Main