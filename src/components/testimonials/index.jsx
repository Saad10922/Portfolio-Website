import React from 'react'
// import testimonials from '../../assets/images/testimonials.jpg'

const Testimonials = () => {
  return (
    <div className="testimonials bg-[url(src/assets/images/testimonials.jpg)] h-screen w-full pt-10">
      <span className='text-white text-4xl font-bold flex justify-center mt-16'>Testimonials</span>
      <div className='grid grid-cols-2'>
        <div className="bg-white w-[50%] h-[50%] rounded-2xl mx-auto"></div>        
        <div className="bg-white w-[50%] h-[50%] rounded-2xl mx-auto"></div>
      </div>
    </div>
  )
}

export default Testimonials