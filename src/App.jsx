
import { Route,Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {
  
const isOwnerpath = useLocation().pathname.includes("owner")

  return (
    <div>
     {!isOwnerpath && <Navbar />}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </div>
    </div>
  )
}

export default App
