import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  createdAt: string;
}

interface Quote {
  _id: string;
  text: string;
  profileImage?: string;
  likes: number;
  shares: number;
  createdAt: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLike = async (quoteId: string) => {
    try {
      const res = await fetch(`${API_URL}/quotes/${quoteId}/like`, { method: 'POST' });
      const updatedQuote = await res.json();
      setQuotes(quotes.map(q => q._id === quoteId ? updatedQuote : q));
    } catch (err) {
      console.error('Error liking quote:', err);
    }
  };

  const handleShare = async (quoteId: string) => {
    try {
      const res = await fetch(`${API_URL}/quotes/${quoteId}/share`, { method: 'POST' });
      const updatedQuote = await res.json();
      setQuotes(quotes.map(q => q._id === quoteId ? updatedQuote : q));
      
      // Try desktop card first, then mobile card
      let quoteCard = document.getElementById(`quote-${quoteId}`);
      if (!quoteCard) {
        quoteCard = document.getElementById(`quote-mobile-${quoteId}`);
      }
      
      if (quoteCard) {
        // Wait for all images to load
        const images = quoteCard.getElementsByTagName('img');
        await Promise.all(
          Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.onload = resolve;
              img.onerror = resolve;
            });
          })
        );
        
        // Additional wait for rendering
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const canvas = await html2canvas(quoteCard, {
          backgroundColor: '#ffffff',
          scale: 3,
          logging: false,
          useCORS: true,
          allowTaint: true,
          imageTimeout: 0,
          removeContainer: false
        });
        
        const imageUrl = canvas.toDataURL('image/png', 1.0);
        
        // Download image
        const link = document.createElement('a');
        link.download = `ali-says-quote-${Date.now()}.png`;
        link.href = imageUrl;
        link.click();
        
        // Copy shareable link
        const shareUrl = `${window.location.origin}/blog`;
        await navigator.clipboard.writeText(shareUrl);
        alert('Image downloaded! Share link copied to clipboard.');
      } else {
        // Fallback: just copy link
        const shareUrl = `${window.location.origin}/blog`;
        await navigator.clipboard.writeText(shareUrl);
        alert('Share link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing quote:', err);
      alert('Error sharing quote. Please try again.');
    }
  };

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/blogs`).then(res => res.json()),
      fetch(`${API_URL}/quotes`).then(res => res.json())
    ])
      .then(([blogsData, quotesData]) => {
        setBlogs(blogsData);
        setQuotes(quotesData.slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Ali Says Section */}
      {quotes.length > 0 && (
        <section className="py-12 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl serif font-medium mb-8 md:mb-12 text-center text-slate-900">Ali Says</h2>
            
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {quotes.map((quote) => (
                <div 
                  key={quote._id} 
                  id={`quote-${quote._id}`}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    {quote.profileImage ? (
                      <img 
                        src={`http://localhost:5000${quote.profileImage}`}
                        alt="Ali Murtaza"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">AM</span>
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-slate-900">Ali Murtaza</p>
                      <p className="text-xs text-slate-500">DevOps Engineer</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{quote.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400">
                      {new Date(quote.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleLike(quote._id)}
                        className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <Heart size={18} className="text-slate-400 hover:text-red-500" />
                        <span className="text-xs text-slate-500">{quote.likes}</span>
                      </button>
                      <button 
                        onClick={() => handleShare(quote._id)}
                        className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <Share2 size={18} className="text-slate-400 hover:text-blue-500" />
                        <span className="text-xs text-slate-500">{quote.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 }
                }}
              >
                {quotes.map((quote) => (
                  <SwiperSlide key={quote._id}>
                    <div 
                      id={`quote-mobile-${quote._id}`}
                      className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 mb-12"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        {quote.profileImage ? (
                          <img 
                            src={`http://localhost:5000${quote.profileImage}`}
                            alt="Ali Murtaza"
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            crossOrigin="anonymous"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">AM</span>
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-slate-900">Ali Murtaza</p>
                          <p className="text-xs text-slate-500">DevOps Engineer</p>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-4">{quote.text}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-400">
                          {new Date(quote.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleLike(quote._id)}
                            className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors"
                          >
                            <Heart size={18} className="text-slate-400 hover:text-red-500" />
                            <span className="text-xs text-slate-500">{quote.likes}</span>
                          </button>
                          <button 
                            onClick={() => handleShare(quote._id)}
                            className="flex items-center gap-1 p-2 hover:bg-slate-100 rounded-full transition-colors"
                          >
                            <Share2 size={18} className="text-slate-400 hover:text-blue-500" />
                            <span className="text-xs text-slate-500">{quote.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}
      {/* Header */}
      <section className="py-16 md:py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Blog</p>
          <h1 className="text-5xl md:text-7xl serif font-medium mb-6">Latest Articles</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Insights on DevOps, Cloud Infrastructure, and Modern Development
          </p>
        </div>
      </section>

      

      {/* Blog Grid */}
      <section className="pb-16 md:pb-20 lg:pb-32 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-600">No blogs published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((blog) => (
              <Link 
                key={blog._id} 
                to={`/blog/${blog._id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  {blog.image ? (
                    <img 
                      src={`http://localhost:5000${blog.image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-bold uppercase tracking-wider text-slate-400">
                      {blog.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl serif font-medium group-hover:text-slate-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  
                  {blog.excerpt && (
                    <p className="text-slate-600 text-sm md:text-base line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {blog.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
