import React from 'react'

const Blogs = () => {
  return (
    <div className='blog_wrapper bg-white min-h-screen'>
        <span className='text-black text-[40px] font-medium flex justify-center pt-20'>Blog</span>
        <div className='grid grid-cols-3 gap-12 p-10'>
            <div className='shadow-2xl h-60 bg-gray-100 rounded-lg'></div>
            <div className='shadow-2xl h-60 bg-gray-100 rounded-lg'></div>
            <div className='shadow-2xl h-60 bg-gray-100 rounded-lg'></div>
            <button className='bg-black text-white p-2 rounded-md col-span-3 mx-auto h-12 w-32 mt-30 hover:bg-gray-800'>View More</button>
       
        </div>
    </div>  )
}

export default Blogs