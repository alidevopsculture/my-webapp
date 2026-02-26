
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Tech Consulting',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4a8921c2-b327-4f17-9011-db2ff076c3e6',
          subject: `Consultation Request: ${formData.service} - ${formData.name}`,
          from_name: 'Portfolio Consultation Form',
          to_email: 'connect.alimurtaza@gmail.com',
          message: `
=== CONSULTATION REQUEST ===

Service Type: ${formData.service}

CLIENT INFORMATION:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

MESSAGE:
--------
${formData.message}

=== END OF REQUEST ===
          `,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', phone: '', company: '', service: 'Tech Consulting', message: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Free Consultation</p>
            <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight">
              Let's discuss your <span className="italic">next project</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
              Whether you need help with cloud infrastructure, DevOps automation, graphic design, or AI integration - I'm here to help bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Tech Consulting</h4>
                  <p className="text-slate-400 text-sm">DevOps, Cloud, Infrastructure</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Graphic Design</h4>
                  <p className="text-slate-400 text-sm">Branding, UI/UX, Social Media</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Agentic AI</h4>
                  <p className="text-slate-400 text-sm">AI Integration, Automation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-4">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                <p className="text-slate-600">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Phone</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Service Needed *</label>
                  <select
                    required
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Tech Consulting">Tech Consulting</option>
                    <option value="Cloud Architecture">Cloud Architecture</option>
                    <option value="DevOps & CI/CD">DevOps & CI/CD</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Agentic AI">Agentic AI</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="You can consult anything with me - cloud architecture, DevOps automation, graphic design, AI integration, or any tech challenge you're facing..."
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Consultation Request</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                {status === 'error' && <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
