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
        <li><a onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>Home</a></li>
        <li><a onClick={() => scrollToSection('vision')} style={{cursor: 'pointer'}}>Vision</a></li>
        <li><a onClick={() => scrollToSection('blog')} style={{cursor: 'pointer'}}>Blog</a></li>
        <li><a onClick={() => scrollToSection('testimonial')} style={{cursor: 'pointer'}}>Testimonials</a></li>
        <li><a onClick={() => scrollToSection('awards')} style={{cursor: 'pointer'}}>Awards</a></li>
        <li><a onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar