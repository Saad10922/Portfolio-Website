import Navbar from './components/navbar/index'
import Main from './components/main/index'
import './App.css'
function App() {

  return (
    <div className='h-full w-full overflow-hidden grid row-auto'>
       <Navbar />
       <Main  />
     </div>
  )
}

export default App
