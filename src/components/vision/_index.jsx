import React, { useState, useEffect, useRef } from 'react';
import vision from '../../assets/images/vision.jpg';

const About = () => {
  const [investments, setInvestments] = useState(0);
  const [projects, setProjects] = useState(0);
  const [startups, setStartups] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCountingComplete, setIsCountingComplete] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const startCounting = () => {
      setInvestments(0);
      setProjects(0);
      setStartups(0);
      setIsAnimating(true);
      setIsCountingComplete(false);

      const investmentsInterval = setInterval(() => {
        setInvestments((prev) => {
          if (prev >= 12) {
            clearInterval(investmentsInterval);
            return 12;
          }
          return prev + 1;
        });
      }, 100);

      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 300) {
            clearInterval(projectsInterval);
            return 300;
          }
          return prev + 5;
        });
      }, 50);

      const startupsInterval = setInterval(() => {
        setStartups((prev) => {
          if (prev >= 30) {
            clearInterval(startupsInterval);
            setIsAnimating(false);
            setIsCountingComplete(true);
            return 30;
          }
          return prev + 1;
        });
      }, 100);

      return () => {
        clearInterval(investmentsInterval);
        clearInterval(projectsInterval);
        clearInterval(startupsInterval);
      };
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const cleanup = startCounting();
        return () => cleanup();
      } else {
        setInvestments(0);
        setProjects(0);
        setStartups(0);
        setIsAnimating(false);
        setIsCountingComplete(false);
      }
    }, { threshold: 0.1 });

    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
      observerRef.current.observe(achievementsSection);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div id="vision">
      {/* About Section */}
      <div className='bg-black grid grid-cols-1 md:grid-cols-2 min-h-[50vh]  text-white'>
        <div className='order-2 md:order-1 px-10 lg:px-14 xl:px-16 py-4  md:p-10 flex flex-col justify-center'>
          <span className='text-xl md:text-2xl font-bold'>About Me</span>
          <p className='sm:text-lg md:text-[12px] lg:text-[14px] xl:text-lg mt-2 leading-relaxed'>
            I have great ambitions for Devsinc, envisioning a flourishing future for Pakistan's tech industry and a surge in employment opportunities for my fellow Pakistanis. 
            I am committed to creating 80,000 jobs in Pakistan and building a strong community of IT experts who can deliver top-notch solutions to clients worldwide.
          </p>
        </div>
        <div className='order-1 md:order-2 h-[250px] md:h-full'>
          <img src={vision} alt="Vision" className='h-full w-full object-cover' />
        </div>
        
      </div>

      {/* Achievements Section */}
      <div className='achievements bg-black py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center'>
        {[ 
          { value: investments, label: "Investments" }, 
          { value: projects, label: "Projects Completed" }, 
          { value: startups, label: "Startup Consulting" } 
        ].map((item, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center">
            <div className="relative w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] flex items-center justify-center">
              {!isCountingComplete && (
                <svg className="absolute top-0 left-0 w-full h-full">
                  <circle cx="30" cy="30" r="27" stroke="cyan" strokeWidth="3" fill="none"
                    strokeDasharray="170"
                    strokeDashoffset="0"
                    className={`${isAnimating ? "animate-stroke" : ""} sm:hidden`} />
                  <circle cx="40" cy="40" r="35" stroke="cyan" strokeWidth="3" fill="none"
                    strokeDasharray="220"
                    strokeDashoffset="0"
                    className={`${isAnimating ? "animate-stroke" : ""} hidden sm:block md:hidden`} />
                  <circle cx="50" cy="50" r="45" stroke="cyan" strokeWidth="4" fill="none"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                    className={`${isAnimating ? "animate-stroke" : ""} hidden md:block`} />
                </svg>
              )}
              <span className="text-xl sm:text-2xl md:text-3xl font-bold relative">{item.value}+</span>
            </div>
            <p className='text-sm sm:text-base md:text-lg mt-2'>{item.label}</p>
          </div>
        ))}
      </div>

      {/* CSS for Stroke Animation */}
      <style>
        {`
          @keyframes stroke-animation {
            0% { stroke-dashoffset: 283; opacity: 0.3; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.3; }
          }
          
          .animate-stroke {
            animation: stroke-animation 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default About;