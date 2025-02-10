import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth',
      })
    }
    setIsOpen(false)
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 z-50 transition-all ${
      scrolled ? 'bg-white text-black shadow-md' : 'bg-[#1D1D1D] text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <span 
            onClick={() => scrollToSection('home')} 
            className='text-2xl sm:text-4xl whitespace-nowrap hover:text-red-500 transition-all duration-300 cursor-pointer'>
            Muhammad Usman
          </span>
          
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul className={`lg:flex lg:gap-10 items-center ${
            isOpen 
              ? 'absolute top-20 left-0 right-0 flex flex-col gap-4 py-4 px-4 shadow-lg ' + 
                (scrolled ? 'bg-white text-black' : 'bg-[#1D1D1D] text-white') 
              : 'hidden'
          }`}>
            {['home', 'skills', 'blog', 'testimonial', 'contact'].map((section) => (
              <li key={section}>
                <a onClick={() => scrollToSection(section)}
                  className='relative inline-block hover:text-red-500 transition-all duration-300 
                  before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-red-500 
                  before:bottom-0 before:left-0 before:scale-x-0 before:origin-right before:transition-transform 
                  before:duration-300 hover:before:scale-x-100 hover:before:origin-left 
                  hover:transform hover:-translate-y-1 cursor-pointer'>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
