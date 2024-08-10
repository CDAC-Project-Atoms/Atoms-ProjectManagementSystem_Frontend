
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/NavBar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import Subscription from './pages/Subscription/Subscription'


function App() {
  // const navigate = useNavigate();
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/project/:id" element={<ProjectDetails/>} />
    <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails/>} />
    <Route path="/upgrade_path" element={<Subscription/>} />


    {/* <Route path="*" element={<NotFound/>}/> */}
   </Routes>
   </>
  )
}

export default App
