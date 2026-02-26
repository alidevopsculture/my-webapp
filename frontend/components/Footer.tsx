
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 md:pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-24 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-6xl serif leading-tight mb-8">
            Ready to <span className="italic">scale your</span> infra?
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0">
            I'm currently available for DevOps consulting and full-time on-site and remote opportunities. Let's talk architecture.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="relative shrink-0">
            <img 
              src="img/home/CEO-pic 2.PNG" 
              alt="Ali Murtaza" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover grayscale border-2 border-slate-50"
            />
            <div className="absolute bottom-2 right-2 w-3 md:w-4 h-3 md:h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1 bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] relative">
            <div className="hidden md:block absolute -left-3 top-10 w-6 h-6 bg-slate-50 rotate-45"></div>
            <p className="italic text-slate-600 text-lg md:text-xl leading-relaxed mb-4">
              "I believe that great infrastructure is invisible—it empowers developers and scales businesses without friction."
            </p>
            <p className="font-bold text-slate-900 text-sm md:text-base">— Ali Murtaza</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100">
        <Link to="/" className="text-xl font-bold mb-8 md:mb-0">
          ALI MURTAZA
        </Link>
        
        <div className="flex space-x-6 md:space-x-8 mb-8 md:mb-0">
          <a href="https://linkedin.com/in/alimurtazadevops/" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="https://github.com/alidevopsculture" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">GitHub</a>
          {/* <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Twitter</a> */}
          <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Instagram</a>
        </div>

        <p className="text-slate-400 text-[10px] md:text-sm text-center">
          © 2026 Ali Murtaza. Handcrafted with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
