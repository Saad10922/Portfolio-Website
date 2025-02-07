import Navbar from './components/navbar/index'
import Main from './components/main/index'
import Blogs from './components/blog/index'
import AboutMe from './components/vision/index'
import Testimonials from './components/testimonials/index'
import Contact from './components/contactus/index'
import './App.css'
function App() {

  return (
    <div className='h-full w-full overflow-hidden'>
       <Navbar />
       <Main  />
       <AboutMe />
       <Blogs />
       <Testimonials />
       <Contact />
     </div>
  )
}

export default App
