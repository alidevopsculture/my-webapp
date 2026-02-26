
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profession', path: '/profession' },
    { name: 'Blog', path: '/blog' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const Logo = ({ className = "" }: { className?: string }) => (
    <Link to="/" className={`flex items-center space-x-3 tracking-tight group ${className}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-slate-900 transition-all duration-300">
        <img 
          src="/img/home/IMG_3597.jpg" 
          alt="Ali Murtaza" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="text-xl">
        <span className="font-bold">ALI</span> <span className="font-light">MURTAZA</span>
      </div>
    </Link>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 px-6 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                location.pathname === link.path ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 animate-in fade-in slide-in-from-bottom-1 duration-300" />
              )}
            </Link>
          ))}
          <button
            onClick={onDownloadClick}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center space-x-2"
          >
            <span>Download CV</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 text-slate-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <Logo />
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-900"><X size={32} /></button>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[20vw] italic font-serif text-slate-50 opacity-50 select-none pointer-events-none">
            Ali
          </div>

          <div className="flex flex-col space-y-8 mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-5xl serif font-medium text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
             <button
              onClick={() => { onDownloadClick(); setIsOpen(false); }}
              className="w-full bg-slate-900 text-white py-5 rounded-full text-lg font-medium mb-12"
            >
              Download CV
            </button>
            <div className="flex space-x-6 text-slate-500 font-bold uppercase tracking-widest text-xs">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/alimurtazadevops/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/alidevopsculture" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
