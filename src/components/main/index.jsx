import React, { useEffect, useRef } from 'react'
import mainImage from '../../assets/images/main.jpg'

const Main = () => {
    const parallaxRef = useRef(null)

    useEffect(() => {
      const handleScroll = () => {
        if (!parallaxRef.current) return
        
        const scrolled = window.scrollY
        const elementTop = parallaxRef.current.offsetTop
        const elementHeight = parallaxRef.current.offsetHeight
        const windowHeight = window.innerHeight

        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
          const rate = Math.min((scrolled - elementTop) * 0.2, elementHeight * 0.3)
          parallaxRef.current.style.backgroundPositionY = `${-80 + rate}px`
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <div id="home" className="overflow-hidden">
        <div className='grid grid-cols-2 bg-[#1D1D1D] w-full min-h-screen text-white'>
          <div className='w-full px-10 flex flex-col justify-center gap-6 lg:p-40'>
            <span className='font-medium text-4xl'>Muhammad Usman</span>
            <p className='text-2xl'>Thought Leader, Tech Entrepreneur, Investor</p>
            <span className='text-4xl font-semibold'>Founder and CEO</span>
            <p className='text-2xl'>With a passion for tech and a lifelong commitment to nurturing visionary entrepreneurs, I am eager to dedicate my life to transforming lives through innovation.</p>
            <button className='group bg-white text-black px-6 py-3 w-fit rounded hover:bg-gray-100 transition-all duration-300'>
              <span className='flex items-center gap-2'>
                Lets Talk
                <span className='opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-1 transition-all duration-300'>{`>`}</span>
              </span>
            </button>            
          </div>            
          <div 
            ref={parallaxRef}
            className='object-cover flex items-center justify-center'
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: '90%',
              backgroundPosition: 'center -80px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              transition: 'background-position-y 0.3s ease-out'
            }}
          >
          </div>
        </div>    
      </div>
    )
}

export default Main