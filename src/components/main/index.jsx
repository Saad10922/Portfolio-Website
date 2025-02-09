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
      <div id="home" className="overflow-hidden mt-[60px] sm:mt-[2px]  md:mt-[80px] xl:mt-[20px]">
        <div id="main-container" className='grid grid-cols-1 md:grid-cols-2 bg-[#1D1D1D] w-full min-h-[calc(100vh-80px)] md:min-h-[350px] lg:min-h-[400px] xl:min-h-screen text-white px-4 sm:px-10'>
          <div 
            id="parallax-image"
            ref={parallaxRef}
            className='min-h-[300px] sm:min-h-[400px] md:min-h-full order-1 md:order-2'
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: '85%',
              backgroundPosition: 'center -60px',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              transition: 'background-position-y 0.3s ease-out'
            }}
          >
          </div>
          <div id="content-container" className='w-full px-4 py-6 sm:px-6 md:px-10 flex flex-col justify-center gap-2 md:gap-4 lg:p-20 my-auto order-2 md:order-1'>
            <span id="name" className='font-normal text-lg sm:text-xl md:text-[14px] md:font-medium lg:font-normal lg:text-2xl xl:text-3xl'>Muhammad Usman</span>
            <p id="title" className='text-base sm:text-lg md:text-[12px] lg:text-[18px] xl:text-lg'>SQA Automation Engineer | Freelancer | ISTQB®CTFL</p>
            <span id="position" className='text-lg sm:text-xl md:text-[14px] md:font-bold lg:text-2xl lg:font-normal xl:text-3xl font-medium'>Founder and CEO</span>
            <p id="description" className='text-base sm:text-lg md:text-[12px] lg:text-[18px] xl:text-lg'>With a passion for tech and a lifelong commitment to nurturing visionary entrepreneurs, I am eager to dedicate my life to transforming lives through innovation.</p>
            <div id="button-container" className='mt-4'>
              <button 
                id="contact-button"
                onClick={scrollToContact}
                className='group bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 md:px-2 lg:px-4 py-1.5 sm:py-2 md:py-1.5 lg:py-2 w-fit rounded transition-all duration-300 shadow-lg hover:shadow-red-500/50 text-sm sm:text-base md:text-sm lg:text-base'
              >
                <span id="button-text" className='flex items-center gap-2'>
                  Lets Talk
                  <span id="button-arrow" className='transform group-hover:translate-x-1 transition-all duration-300'>{`>`}</span>
                </span>
              </button>
            </div>            
          </div>            
        </div>    
      </div>
    )
}

export default Main