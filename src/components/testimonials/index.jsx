import React, { useEffect, useState } from 'react'
import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpeg'

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      const maxScroll = window.innerHeight
      if (position <= maxScroll) {
        setScrollPosition(position)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const TestimonialCard = ({ image, name, role }) => (
    <div className='bg-white p-10 w-[70%] h-[70%] rounded-2xl mx-auto'>
      <div className="flex gap-6">
        <div className='testimonial_image rounded-full w-[100px] h-[100px]'>
          <img className='object-cover w-full h-full rounded-full' src={image} alt={name} />
        </div>
        <div className='testimonial_content flex-1'>
          <p className='text-center'>Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman's startup leadership helped us scale and sell the business in just a few years- he'd be an incredible asset to anyone's team!</p>
        </div>
      </div>
      <div className='flex flex-col items-center mt-4'>
        <span className='font-bold'>{name}</span>
        <p>{role}</p>
      </div>
    </div>
  )

  return (
    <div 
      id = "testimonial"
      className="testimonials h-screen w-full pt-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(src/assets/images/testimonials.jpg)`,
        backgroundPosition: `50% ${Math.min(scrollPosition * 0.5, window.innerHeight)}px`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <span className='text-white text-4xl font-bold flex justify-center mt-10 mb-20'>Testimonials</span>
      <div className='flex gap-10 px-[10%] h-[70%]'>
        <TestimonialCard 
          image={client1}
          name="Sanj Sanampudi"
          role="2x Founder, CFO, Sales Coach, Incentive Comp"
        />
        <TestimonialCard 
          image={client2}
          name="Sanj Sanampudi"
          role="2x Founder, CFO, Sales Coach, Incentive Comp"
        />
      </div>
    </div>
  )
}

export default Testimonials