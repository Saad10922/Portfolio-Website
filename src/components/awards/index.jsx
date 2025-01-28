import React from 'react'

const Awards = () => {
  return (
    <div className='grid grid-cols-2 bg-black p-20 min-h-screen rounded-2xl border-4 border-yellow-400 shadow-2xl'>
        <div className='bg-white shadow-2xl p-8 m-4 rounded-lg border-2 border-gray-300'>
            <span className='text-2xl font-semibold'>Education</span>
            <div className='mt-4 text-gray-600'>Award description and details go here</div>
        </div>
        <div className='bg-white shadow-2xl p-8 m-4 rounded-lg'>
            <span className='text-2xl font-semibold'>Award Title</span>
            <div className='mt-4 text-gray-600'>Award description and details go here</div>
        </div>
    </div>  )
}

export default Awards