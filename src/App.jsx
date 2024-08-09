
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/NavBar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'


function App() {
  // const navigate = useNavigate();
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/project/:id" element={<ProjectDetails/>} />
    {/* <Route path="*" element={<NotFound/>}/> */}
   </Routes>
   </>
  )
}

export default App
