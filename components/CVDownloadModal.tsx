
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Integration with Web3Forms to track CV downloads
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4a8921c2-b327-4f17-9011-db2ff076c3e6',
          subject: `CV Download: ${formData.name}`,
          from_name: 'Portfolio Tracker',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Download CV
        const link = document.createElement('a');
        link.href = '/img/home/Ali_Murtaza_Resume-26.pdf';
        link.download = 'Ali_Murtaza_Resume.pdf';
        link.click();
        
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', company: '' });
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-3xl serif mb-4">Download My CV</h3>
        <p className="text-slate-500 mb-8">Please provide your details to receive the download link.</p>

        {status === 'success' ? (
          <div className="py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-4">
              <Send size={24} />
            </div>
            <p className="text-lg font-medium text-slate-900">Information sent! Starting download...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Full Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Work Email</label>
              <input
                required
                type="email"
                placeholder="john@company.com"
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Company</label>
              <input
                type="text"
                placeholder="Tech Corp"
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            
            <button
              disabled={status === 'loading'}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all mt-4 flex items-center justify-center space-x-2"
            >
              {status === 'loading' ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Download Now</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
            {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </div>
  );
};

// Helper component used within modal
const ArrowRight: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default CVDownloadModal;
