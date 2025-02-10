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
import loadTesting from '../../assets/icons/load-testing.png';
import stressTesting from '../../assets/icons/stress-testing.png';
import performanceTesting from '../../assets/icons/performance-testing.png';
import securityTesting from '../../assets/icons/security-testing.png';
import apiTesting from '../../assets/icons/api-testing.png'
import dataTesting from '../../assets/icons/data-testing.png'
import backendTesting from '../../assets/icons/backend-testing.png'
import ETLTesting from '../../assets/icons/etl-testing.png'
import ecommerceTesting from '../../assets/icons/ecommerce-testing.png'
import medicalTesting from '../../assets/icons/medical-testing.png'
import gatewayTesting from '../../assets/icons/gateway-testing.png'
import tradingTesting from '../../assets/icons/trading-testing.png'
import java from '../../assets/icons/java.png'
import javaScript from '../../assets/icons/js.png'
import rubyOnRails from '../../assets/icons/ruby-on-rails.png'
import python from '../../assets/icons/python.png'
import php from '../../assets/icons/php.png'
import html5 from '../../assets/icons/html.png'
import css3 from '../../assets/icons/css-3.png'
import shellScripting from '../../assets/icons/shell.png'
import cypress from '../../assets/icons/cypress.png'
import playWright from '../../assets/icons/playwright.png'
import testCafe from '../../assets/icons/testcafe.png'
import puppeteer from '../../assets/icons/puppeteer.png'
import selenium from '../../assets/icons/Selenium.png'
import seleniumWebDriver from '../../assets/icons/selenium-web.jpeg'
import webdriver from '../../assets/icons/webdriver.png'
import Codeception from '../../assets/icons/codeception.png'
import Cucumber from '../../assets/icons/cucumber.png'
import Mocha from '../../assets/icons/mocha.png'
import Jasmine from '../../assets/icons/jasmine.png'
import pactum from '../../assets/icons/PactumJs.png'
import robot from '../../assets/icons/robot-framework.png'
import pom from '../../assets/icons/pom.png'
import Katalon from '../../assets/icons/katalon.png'
import postman from '../../assets/icons/postman.png'
import boto3 from '../../assets/icons/boto3.png'
import athena from '../../assets/icons/athena.png'
import github from '../../assets/icons/github.png'
import githubActions from '../../assets/icons/github-actions.png'
import circleCI from '../../assets/icons/circleCI.png'
import jenkins from '../../assets/icons/jenkins.png'
import cicd from '../../assets/icons/cicd.png'
import awsCodePipeline from '../../assets/icons/pipeline.png'
import awsCodeBuild from '../../assets/icons/build.png'
import awsServices from '../../assets/icons/AWS.png'
import awsLambda from '../../assets/icons/aws-lambda.png'
import appium from '../../assets/icons/appium.png'
import androidStudio from '../../assets/icons/android-studio.png'
import inspector from '../../assets/icons/inspector.png'
import uiAutomator from '../../assets/icons/ui-automater.png'
import XCUITest from '../../assets/icons/xcui-testing.png'
import flutter from '../../assets/icons/flutter.png'
import k6 from '../../assets/icons/k6.png'
import jMeter from '../../assets/icons/jmeter.png'
import aglie from '../../assets/icons/agile.png'
import jira from '../../assets/icons/jira.png'
import zypher from '../../assets/icons/zephyr.png'
import testRails from '../../assets/icons/testrail.png'
import tensorFlow from '../../assets/icons/tensorflow.png'
import nlpTesting from '../../assets/icons/nlp.png'
import cms from '../../assets/icons/cms.png'
import saas from '../../assets/icons/saas.png'
import salesForce from '../../assets/icons/salesforce.png'






const AboutMe = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [startups, setStartups] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCountingComplete, setIsCountingComplete] = useState(false);
  const observerRef = useRef(null);
  

  useEffect(() => {
    const startCounting = () => {
      setExperience(0);
      setProjects(0);
      setStartups(0);
      setIsAnimating(true);
      setIsCountingComplete(false);

      const experienceInterval = setInterval(() => {
        setExperience((prev) => {
          if (prev >= 10) {
            clearInterval(experienceInterval);
            return 10;
          }
          return prev + 1;
        });
      }, 150);

      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 20) {
            clearInterval(projectsInterval);
            return 20;
          }
          return prev + 2;
        });
      }, 150);

      const startupsInterval = setInterval(() => {
        setStartups((prev) => {
          if (prev >= 9) {
            clearInterval(startupsInterval);
            setIsAnimating(false);
            setIsCountingComplete(true);
            return 9;
          }
          return prev + 1;
        });
      }, 150);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(startupsInterval);
      };
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const cleanup = startCounting();
        return () => cleanup();
      } else {
        setExperience(0);
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
    "Testing Types": [
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
    "Integration Testing": integrationTesting,
    "Load Testing" : loadTesting,
    "Stress Testing" : stressTesting,
    "Performance Testing" : performanceTesting,
    "Security Testing" :securityTesting,
    "API Testing": apiTesting,
    "Data Testing": dataTesting,
    "Backend Testing": backendTesting,
    "ETL Testing": ETLTesting,
    "Ecommerce Platform Testing" : ecommerceTesting,
    "Medical Products Testing": medicalTesting,
    "Payment Gateways Testing" : gatewayTesting,
    "Trading Platforms Testing" : tradingTesting,
    "Java": java,
    "JavaScript": javaScript,
    "Ruby on Rails": rubyOnRails,
    "Python": python,
    "PHP": php,
    "HTML5":html5,
    "CSS3":css3,
    "Shell Scripting":shellScripting,
    "Cypress": cypress,
    "Test Cafe": testCafe,
    "Puppeteer": puppeteer,
    "Selenium": selenium,
    "Selenium WebDriver": seleniumWebDriver,
    "Webdriver.io": webdriver,
    "Codeception": Codeception,
    "Cucumber": Cucumber,
    "Mocha": Mocha,
    "Jasmine": Jasmine,
    "PactumJs": pactum,
    "Robot Framework": robot,
    "Page Object Model": pom,
    "Katalon Studio": Katalon,
    "Playwright": playWright,
    "Boto3": boto3,
    "Athena" : athena,
    "GitHub": github,
    "GitHub Actions": githubActions,
    "CircleCI": circleCI,
    "Jenkins": jenkins,
    "CI/CD": cicd,
    "AWS Code Pipeline": awsCodePipeline,
    "AWS Code Build" : awsCodeBuild,
    "AWS Services": awsServices,
    "AWS Lambda": awsLambda,
    "Appium": appium, 
    "Android Studio": androidStudio, 
    "Appium Inspector": inspector, 
    "UiAutomator": uiAutomator, 
    "XCUITest": XCUITest, 
    "Flutter Driver": flutter,
    "K6":k6,
    "JMeter":jMeter,
    "Agile": aglie,
    "Jira": jira,
    "Zephyr": zypher,
    "Test Rails": testRails,
    "TensorFlow": tensorFlow,
    "NLP Testing": nlpTesting,
    "CMS": cms,
    "SAAS": saas,
    "Sales Force":salesForce,
    "Postman" : postman,
  };
  
  return (
    <div id="skills" className='About Section bg-gray-900 text-white'>
      {/* ... (vision and about section code) */}
      {/* <div id="about-content" className='bg-black grid grid-cols-1 md:grid-cols-2 min-h-[50vh] text-white'>
        <div id="about-text" className='order-2 md:order-1 px-10 lg:px-14 xl:px-16 py-4 md:p-10 flex flex-col justify-center'>
          <span id="about-title" className='text-xl md:text-2xl font-bold'>About Me</span>
          <p id="about-description" className='sm:text-lg md:text-[12px] lg:text-[14px] xl:text-lg mt-2 leading-relaxed'>
          Results-driven SQA Automation Engineer with over eight years of experience in manual and automation testing for web,
mobile, and desktop applications. Skilled in designing and implementing comprehensive testing strategies across
various platforms, including Frontend, Backend, APIs, Databases, and AWS applications. Proficient in multiple
programming languages with expertise in different testing types such as regression, smoke, sanity, and security testing.
Known for enhancing software quality, reducing critical defects, and accelerating release cycles through effective test
planning and execution. Adept at leading testing efforts for high-impact projects and collaborating with cross-functional
teams to deliver reliable and high-performing software solutions.
          </p>
        </div>
        <div id="about-image" className='order-1 md:order-2 h-[250px] md:h-full'>
          <img id="vision-image" src={vision} alt="Vision" className='h-full w-full object-cover' />
        </div>
      </div> */}

      <div id="skills-section" className="py-12 px-6 md:px-12 lg:px-24">
        <div id="skills-container" className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
          <div id="skills-content">
            
            <h2 id="skills-title" className="text-2xl xl:text-3xl font-bold mb-8 xl:mb-16 text-center">Technical Skills & Tools</h2>

            {Object.entries(skills).map(([category, skillList]) => (
              <div id={`skill-category-${category}`} key={category} className="mb-8">
                <h3 id={`category-title-${category}`} className="text-[16px] font-bold lg:text-[20px] text-blue-400 lg:font-semibold mb-4">{category}</h3>
                <div id={`skills-grid-${category}`} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skillList.map((skill) => (
                    <div id={`skill-item-${skill}`} key={skill} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer">
                      <div id={`skill-icon-${skill}`} className="h-16 w-16"><img src={skillIcons[skill]} alt={skill.slice(0,3)}/></div>
                      <p id={`skill-name-${skill}`} className="mt-2 text-center">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="achievements-section" className='achievements bg-black py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center mt-12 xl:mt-6'>
          {[
            { value: experience, label: "Years Experience" },
            { value: projects, label: "Projects Completed" },
            { value: startups, label: "Startup Consulting" }
          ].map((item, index) => (
            <div id={`achievement-item-${index}`} key={index} className="relative flex flex-col items-center justify-center">
              <div id={`achievement-circle-${index}`} className="relative w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] flex items-center justify-center">
                {!isCountingComplete && (
                  <svg id={`achievement-svg-${index}`} className="absolute top-0 left-0 w-full h-full">
                    <circle id={`achievement-circle-sm-${index}`} cx="30" cy="30" r="27" stroke="cyan" strokeWidth="3" fill="none"
                      strokeDasharray="170"
                      strokeDashoffset="0"
                      className={`${isAnimating ? "animate-stroke" : ""} sm:hidden`} />
                    <circle id={`achievement-circle-md-${index}`} cx="40" cy="40" r="35" stroke="cyan" strokeWidth="3" fill="none"
                      strokeDasharray="220"
                      strokeDashoffset="0"
                      className={`${isAnimating ? "animate-stroke" : ""} hidden sm:block md:hidden`} />
                    <circle id={`achievement-circle-lg-${index}`} cx="50" cy="50" r="45" stroke="cyan" strokeWidth="4" fill="none"
                      strokeDasharray="283"
                      strokeDashoffset="0"
                      className={`${isAnimating ? "animate-stroke" : ""} hidden md:block`} />
                  </svg>
                )}
                <span id={`achievement-value-${index}`} className="text-xl sm:text-2xl md:text-3xl font-bold relative">{item.value}+</span>
              </div>
              <p id={`achievement-label-${index}`} className='text-sm sm:text-base md:text-lg mt-2'>{item.label}</p>
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