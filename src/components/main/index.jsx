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

    const scrollToContact = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <div id="home" className="overflow-hidden">
        <div className='grid grid-cols-1 md:grid-cols-2 bg-[#1D1D1D] w-full min-h-screen text-white'>
          <div className='w-full px-6 py-10 sm:px-8 md:px-10 flex flex-col justify-center gap-3 md:gap-4 lg:p-20 my-auto'>
            <span className='font-medium text-xl sm:text-2xl md:text-3xl'>Muhammad Usman</span>
            <p className='text-lg sm:text-xl'>Thought Leader, Tech Entrepreneur, Investor</p>
            <span className='text-xl sm:text-2xl md:text-3xl font-semibold'>Founder and CEO</span>
            <p className='text-base sm:text-lg md:text-xl'>With a passion for tech and a lifelong commitment to nurturing visionary entrepreneurs, I am eager to dedicate my life to transforming lives through innovation.</p>
            <button 
              onClick={scrollToContact}
              className='group bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 w-fit rounded transition-all duration-300 shadow-lg hover:shadow-red-500/50'
            >
              <span className='flex items-center gap-2'>
                Lets Talk
                <span className='transform group-hover:translate-x-1 transition-all duration-300'>{`>`}</span>
              </span>
            </button>            
          </div>            
          <div 
            ref={parallaxRef}
            className='min-h-[300px] sm:min-h-[400px] md:min-h-full object-cover flex items-center justify-center'
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