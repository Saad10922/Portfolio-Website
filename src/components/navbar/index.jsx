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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <nav className={`grid grid-cols-2 fixed w-full h-20 px-10 py-8 transition-all duration-1000 ${
    scrolled ? 'bg-white text-black shadow-md' : 'bg-[#1D1D1D] text-white'
  }`}>
       <span className='w-0.5 text-4xl ml-20 whitespace-nowrap'>Muhammad Usman</span>      
       <ul className='flex gap-10'>
        <li><a onClick={() => scrollToSection('home')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Home</a></li>
        <li><a onClick={() => scrollToSection('vision')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Vision</a></li>
        <li><a onClick={() => scrollToSection('blog')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Blog</a></li>
        <li><a onClick={() => scrollToSection('testimonial')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Testimonials</a></li>
        <li><a onClick={() => scrollToSection('awards')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Awards</a></li>
        <li><a onClick={() => scrollToSection('contact')} className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-300' style={{cursor: 'pointer'}}>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar