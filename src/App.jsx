// src/App.jsx
import { useState } from 'react';
// REMOVED: BrowserRouter from this import
import { Routes, Route } from 'react-router-dom'; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CurriculumPage from './pages/CurriculumPage';
import LearningMethodsPage from './pages/LearningMethods';
import EnquiryModal from './components/EnquiryModal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // REMOVED: The <BrowserRouter> tags from around this content
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} /> 
          <Route path="/learning-methods" element={<LearningMethodsPage />} />
        </Routes>
      </main>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
export default App;