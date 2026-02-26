import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { marked } from 'marked';

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  createdAt: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Blog link copied to clipboard!');
    } catch (err) {
      console.error('Error copying link:', err);
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-4xl mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-20 lg:py-32">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-400">
                {blog.category}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-sm"
            >
              <Share2 size={16} className="text-slate-600" />
              <span className="hidden sm:inline text-sm font-medium text-slate-700">Share</span>
            </button>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl serif font-medium mb-6 md:mb-8 leading-tight">
            {blog.title}
          </h1>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-sm px-4 py-2 bg-slate-100 rounded-full text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 bg-slate-100">
            <img 
              src={`http://localhost:5000${blog.image}`}
              alt={blog.title}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-slate-700 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
          />
        </div>
      </article>

      <style>{`
        .blog-content h1 { font-size: 2.5rem; font-weight: 700; margin: 2rem 0 1rem; line-height: 1.2; }
        .blog-content h2 { font-size: 2rem; font-weight: 600; margin: 1.75rem 0 0.875rem; line-height: 1.3; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.75rem; line-height: 1.4; }
        .blog-content p { margin: 1rem 0; line-height: 1.75; }
        .blog-content strong { font-weight: 700; color: #1e293b; }
        .blog-content em { font-style: italic; }
        .blog-content a { color: #2563eb; text-decoration: underline; }
        .blog-content a:hover { color: #1d4ed8; }
        .blog-content ul, .blog-content ol { margin: 1rem 0; padding-left: 2rem; }
        .blog-content li { margin: 0.5rem 0; }
        .blog-content code { background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-size: 0.9em; font-family: monospace; }
        .blog-content pre { background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; }
        .blog-content pre code { background: none; padding: 0; }
        .blog-content blockquote { border-left: 4px solid #cbd5e1; padding-left: 1rem; margin: 1rem 0; font-style: italic; color: #64748b; }
      `}</style>
    </div>
  );
};

export default BlogDetail;
