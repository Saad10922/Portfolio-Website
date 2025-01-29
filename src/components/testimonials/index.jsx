import React from 'react'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpeg'

const Testimonials = () => {
  return (
    <div className="testimonials bg-[url(src/assets/images/testimonials.jpg)] h-screen w-full  pt-10">
      <span className='text-white text-4xl font-bold flex justify-center mt-10 mb-20'>Testimonials</span>
      <div className='flex gap-10 px-[10%] h-[70%]'>
        <div className='bg-white p-10 w-[70%] h-[70%] rounded-2xl mx-auto '>
        <div className="flex gap-6">
            <div className='testimonial_image rounded-full w-[100px] h-[100px]'><img className='object-cover w-full h-full rounded-full' src={client1} alt='client1' /></div>
            <div className='testimonial_content flex-1'><p className='text-center'>Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman's startup leadership helped us scale and sell the business in just a few years- he'd be an incredible asset to anyone's team!</p></div>
        </div>
          <div className='flex flex-col items-center  mt-4'>
            <span className='font-bold'>Sanj Sanampudi</span>
            <p>2x Founder, CFO, Sales Coach, Incentive Comp</p>
          </div>
        </div>        
        <div className='bg-white p-10 w-[70%] h-[70%] rounded-2xl mx-auto '>
        <div className="flex gap-6">
            <div className='testimonial_image rounded-full w-[100px] h-[100px]'><img className='object-cover w-full h-full rounded-full' src={client2} alt='client1' /></div>
            <div className='testimonial_content flex-1'><p className='text-center'>Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman's startup leadership helped us scale and sell the business in just a few years- he'd be an incredible asset to anyone's team!</p></div>
        </div>
          <div className='flex flex-col items-center  mt-4'>
            <span className='font-bold'>Sanj Sanampudi</span>
            <p>2x Founder, CFO, Sales Coach, Incentive Comp</p>
          </div>
        </div>        
              
      </div>
    </div>
  )
}

export default Testimonials