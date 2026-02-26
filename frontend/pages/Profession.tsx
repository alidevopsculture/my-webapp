
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Profession: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl serif mb-8 leading-tight">Technical Profession</h1>
        <p className="text-slate-500 text-lg md:text-2xl max-w-3xl leading-relaxed mx-auto md:mx-0">
          Detailed documentation of my engineering career, focusing on cloud native technologies, scalability, and automated reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group">
            <Link to={`/case-study/${project.id}`} className="block">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-sm border border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex space-x-2">
                  {project.tags.slice(0, 2).map(tag => (
                     <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">{tag}</span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold shadow-lg">View Technical Details</span>
                </div>
              </div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{project.category}</p>
              <h3 className="text-2xl md:text-3xl serif mb-4 group-hover:text-slate-600 transition-colors leading-tight">{project.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profession;
