import React, { useState, useEffect } from 'react'

const Navbar = () => {
 
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) 
  return (
  <nav className={`grid grid-cols-2 fixed w-full h-20 pt-8 transition-all duration-1000 ${
    scrolled ? 'bg-white text-black shadow-md' : 'bg-[#1D1D1D] text-white'
  } pt-3`}>
       <span className='w-0.5 ml-16 text-4xl whitespace-nowrap'>Usman Asif</span>      
       <ul className='grid grid-cols-6'>
        <li>Home</li>
        <li>Vision</li>
        <li>Blog</li>
        <li>Testimonials</li>
        <li>Awards</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default Navbar