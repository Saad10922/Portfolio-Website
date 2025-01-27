import React from 'react'
import main_img from '../../assets/images/main.jpeg'

const Main = () => {
  return (
    <div>
        <div className='grid grid-cols-2 bg-yellow-300'>
            <div className='w-0.5 bg-amber-700' ></div>
            <div className='w-0.5'><img src={main_img} alt="main" /></div>
        </div>    
    </div>
  )
}

export default Main