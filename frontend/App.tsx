
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CVDownloadModal from './components/CVDownloadModal';
import ChatBot from './components/ChatBot';
import ConsultationForm from './components/ConsultationForm';
import Home from './pages/Home';
import Profession from './pages/Profession';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col selection:bg-slate-900 selection:text-white overflow-x-hidden">
        <Navbar onDownloadClick={() => setIsCVModalOpen(true)} />
        
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profession" element={<Profession />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>

        <ConsultationForm />
        <Footer />

        <ChatBot />

        <CVDownloadModal 
          isOpen={isCVModalOpen} 
          onClose={() => setIsCVModalOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
