
import React, { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface Hobby {
  _id: string;
  category: string;
  headline: string;
  image: string;
  order: number;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Hobbies: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<Hobby | null>(null);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    fetch(`${API_URL}/hobbies`)
      .then(res => res.json())
      .then(data => {
        setHobbies(data);
        const cats = ['All', ...new Set(data.map((h: Hobby) => h.category))];
        setCategories(cats);
      })
      .catch(err => console.error('Error fetching hobbies:', err));
  }, []);

  const filteredItems = filter === 'All' 
    ? hobbies 
    : hobbies.filter(item => item.category === filter);

  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
        <div>
          <h1 className="text-5xl md:text-8xl serif italic mb-6">Creative Outlets</h1>
          <p className="text-slate-500 text-xl max-w-xl">
            Exploring the intersection of technology and art through visual storytelling and graphic experiments.
          </p>
        </div>

        <div className="flex bg-slate-50 p-2 rounded-2xl flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                filter === cat ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div 
            key={item._id} 
            className="group relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md"
            onClick={() => setSelectedImage(item)}
          >
            <img 
              src={`http://localhost:5000${item.image}`}
              alt={item.headline} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">{item.category}</p>
              <h3 className="text-2xl text-white serif mb-4">{item.headline}</h3>
              <p className="text-white/60 text-sm font-medium flex items-center space-x-2">
                <Maximize2 size={16} />
                <span>View Full Size</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => setSelectedImage(null)} />
          <button 
            className="absolute top-8 right-8 text-white p-4 hover:scale-110 transition-transform"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`http://localhost:5000${selectedImage.image}`}
              alt={selectedImage.headline} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-8 animate-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-3xl text-white serif mb-2">{selectedImage.headline}</h3>
              <p className="text-white/50 uppercase tracking-[0.3em] font-bold text-xs">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
