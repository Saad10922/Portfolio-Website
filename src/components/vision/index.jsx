import React, { useState, useEffect } from 'react'
import vision from '../../assets/images/vision.png'

const Vision = () => {
    const [investments, setInvestments] = useState(0)
    const [projects, setProjects] = useState(0)
    const [startups, setStartups] = useState(0)

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const investmentsInterval = setInterval(() => {
            setInvestments(prev => prev < 12 ? prev + 1 : 12)
          }, 100)

          const projectsInterval = setInterval(() => {
            setProjects(prev => prev < 300 ? prev + 5 : 300)
          }, 50)

          const startupsInterval = setInterval(() => {
            setStartups(prev => prev < 30 ? prev + 1 : 30)
          }, 100)

          return () => {
            clearInterval(investmentsInterval)
            clearInterval(projectsInterval)
            clearInterval(startupsInterval)
          }
        }
      })

      const achievementsSection = document.querySelector('.achievements')
      if (achievementsSection) {
        observer.observe(achievementsSection)
      }

      return () => observer.disconnect()
    }, [])

    return (
      <div>
      <div className='bg-white grid grid-cols-2 h-[25%]'>
          <div className='w-[1/2] p-30 pt-40' >
          <span className='text-2xl font-bold'>My Vision</span>
          <p className='text-[1rem] leading-relaxed'>I have great ambitions for Devsinc, envisioning a flourishing future for Pakistan's tech industry and a surge in employment opportunities for my fellow Pakistanis. I am committed to creating 80,000 jobs in Pakistan and building a strong community of IT experts who can deliver top-notch solutions to clients worldwide.</p>
          </div>
          <div className='w-[1/2]'><img src={vision} /></div>
      </div>
      <div className='achievements bg-black h-[10%] grid grid-cols-3 text-white'>
          <div className='investments px-30 py-10'>
              <span  className='text-3xl ml-6'>{investments}+</span>
              <p className='text-[20px]'>Investments</p>
          </div>
          <div className='projects px-30 py-10'>
              <span className='text-3xl ml-6'>{projects}+</span>
              <p className='text-[20px]'>Projects Completed</p>
          </div>
          <div className='startups px-30 py-10'>
              <span className='text-3xl ml-6'>{startups}+</span>
              <p className='text-[20px]'>Startup Consulting</p>
          </div>
      </div>
      </div>
    )
}

export default Vision