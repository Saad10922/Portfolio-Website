import React, { useState, useEffect, useRef } from 'react';
import vision from '../../assets/images/vision.jpg';
import web_automation_img from '../../assets/icons/web_auto.png';
import abTesting from '../../assets/icons/ab-testing.png'
import acceptanceTesting from '../../assets/icons/acceptance-testing.png';
import adhocTesting from '../../assets/icons/adhoc-testing.png';
import functionalTesting from '../../assets/icons/functional-testing.png';
import manualTesting from '../../assets/icons/manual_testing.png';
import integrationTesting from '../../assets/icons/integration-testing.png';
import mobileAutomation from '../../assets/icons/mobile-automation.png';
import regressionTesting from '../../assets/icons/regression-testing.png';
import sanityTesting from '../../assets/icons/sanity-testing.png';
import smokeTesting from '../../assets/icons/smoke-testing.png';
import testManagement from '../../assets/icons/test_management.png';
import testPlanning from '../../assets/icons/test_planning.png';
import testCases from '../../assets/icons/test-cases.png';
import testExecution from '../../assets/icons/test-execution.png';
import uatTesting from '../../assets/icons/uat-testing.png';



const AboutMe = () => {
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

  const skills = {
    "Testing Types & Methodologies": [
      "Web Automation Testing", "Manual Testing", "Mobile Automation Testing", "Test Management", "Test Planning",
      "Test Cases", "Test Execution", "Integration Testing", "AB Testing", "Functional Testing", "Regression Testing",
      "Smoke Testing", "Sanity Testing", "UAT Testing", "Acceptance Testing", "Adhoc Testing"
    ],
    "Performance & Security Testing": ["Load Testing", "Performance Testing", "Stress Testing", "Security Testing"],
    "Specialized Testing Domains": [
      "API Testing", "Data Testing", "Backend Testing", "ETL Testing", "Ecommerce Platform Testing",
      "Medical Products Testing", "Payment Gateways Testing", "Trading Platforms Testing"
    ],
    "Programming & Scripting Languages": [
      "Java", "JavaScript", "Ruby on Rails", "Python", "PHP", "HTML5", "CSS3", "Shell Scripting"
    ],
    "Test Automation Tools & Frameworks": [
      "Cypress", "Playwright", "Test Cafe", "Puppeteer", "Selenium", "Selenium WebDriver", "Webdriver.io",
      "Codeception", "Cucumber", "Mocha", "Jasmine", "PactumJs", "Robot Framework", "Page Object Model",
      "Katalon Studio"
    ],
    "API & Backend Testing Tools": ["Postman", "Boto3", "Athena"],
    "CI/CD & DevOps": [
      "GitHub", "GitHub Actions", "CircleCI", "Jenkins", "CI/CD", "AWS Code Pipeline", "AWS Code Build",
      "AWS Services", "AWS Lambda"
    ],
    "Mobile Testing Tools": ["Appium", "Android Studio", "Appium Inspector", "UiAutomator", "XCUITest", "Flutter Driver"],
    "Performance & Load Testing Tools": ["K6", "JMeter"],
    "Agile & Test Management Tools": ["Agile", "Jira", "Zephyr", "Test Rails"],
    "AI & Machine Learning Testing": ["TensorFlow", "NLP Testing"],
    "Content Management & SaaS": ["CMS", "SAAS", "Sales Force"]
  };
  const skillIcons = {
    "Web Automation Testing": web_automation_img,
    "AB Testing": abTesting,
    "Acceptance Testing": acceptanceTesting,
    "Adhoc Testing": adhocTesting,
    "Functional Testing": functionalTesting,
    "Manual Testing": manualTesting,
    "Mobile Automation Testing": mobileAutomation,
    "Regression Testing": regressionTesting,
    "Sanity Testing": sanityTesting,
    "Smoke Testing": smokeTesting,
    "Test Management": testManagement,
    "Test Planning": testPlanning,
    "Test Cases": testCases,
    "Test Execution": testExecution,
    "UAT Testing": uatTesting,
    "Integration Testing": integrationTesting
    // ... add mappings for all your skills
  };
  
  return (
    <div id="about" className='About Section bg-gray-900 text-white'>
      {/* ... (your vision and about section code) */}
      <div className='bg-black grid grid-cols-1 md:grid-cols-2 min-h-[50vh] text-white'>
        <div className='order-2 md:order-1 px-10 lg:px-14 xl:px-16 py-4 md:p-10 flex flex-col justify-center'>
          <span className='text-xl md:text-2xl font-bold'>About Me</span>
          <p className='sm:text-lg md:text-[12px] lg:text-[14px] xl:text-lg mt-2 leading-relaxed'>
          Results-driven SQA Automation Engineer with over eight years of experience in manual and automation testing for web,
mobile, and desktop applications. Skilled in designing and implementing comprehensive testing strategies across
various platforms, including Frontend, Backend, APIs, Databases, and AWS applications. Proficient in multiple
programming languages with expertise in different testing types such as regression, smoke, sanity, and security testing.
Known for enhancing software quality, reducing critical defects, and accelerating release cycles through effective test
planning and execution. Adept at leading testing efforts for high-impact projects and collaborating with cross-functional
teams to deliver reliable and high-performing software solutions.
          </p>
        </div>
        <div className='order-1 md:order-2 h-[250px] md:h-full'>
          <img src={vision} alt="Vision" className='h-full w-full object-cover' />
        </div>
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-24">
        <div className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
          <div>
            
            <h2 className="text-3xl font-bold xl:mb-16 text-center">Technical Skills & Tools</h2>

            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-[20px] text-blue-400 font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skillList.map((skill) => (
                    <div key={skill} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
                      <div className="h-16 w-16"><img src={skillIcons[skill]} alt={skill.slice(0,3)}/></div>
                      <p className="mt-2 text-center">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='achievements bg-black py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center mt-12'>
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

export default AboutMe;