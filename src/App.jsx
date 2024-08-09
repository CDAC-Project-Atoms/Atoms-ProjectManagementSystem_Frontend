import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/NavBar';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'; // Import ProjectDetails

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
