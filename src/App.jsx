import Navbar from './components/navbar/index'
import Main from './components/main/index'
import Vision from './components/vision/index'
import Blogs from './components/blog/index'
import Awards from './components/awards/index'
import './App.css'
function App() {

  return (
    <div className='h-full w-full overflow-hidden'>
       <Navbar />
       <Main  />
       <Vision />
       <Blogs />
       <Awards />
     </div>
  )
}

export default App
