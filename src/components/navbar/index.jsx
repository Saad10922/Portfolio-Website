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
  <nav className={`grid grid-cols-2 fixed w-full transition-all duration-700 ${
    scrolled ? 'bg-white text-black shadow-md' : 'bg-gray-950 text-white'
  } mt-3`}>
       <span className='w-0.5 ml-16 text-4xl whitespace-nowrap'>Usman Asif</span>      
       <ul className='grid grid-cols-6'>
        <li>Home</li>
        <li>Vision</li>
        <li>Blogs</li>
        <li>Testimonials</li>
        <li>Awards</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default Navbar