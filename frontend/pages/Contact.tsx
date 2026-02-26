
import React, { useState } from 'react';
import { MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', '4a8921c2-b327-4f17-9011-db2ff076c3e6');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div className="text-center lg:text-left">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Get in Touch</p>
        <h1 className="text-5xl md:text-8xl serif mb-10 leading-none">
          Let's build something <span className="italic">extraordinary</span> together.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-12 md:mb-16 max-w-md mx-auto lg:mx-0 leading-relaxed">
          Whether you have a question about my work or just want to discuss cloud architecture, I'd love to hear from you.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Email Me</p>
            <a href="mailto:connect.alimurtaza@gmail.com" className="text-lg md:text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors flex items-center space-x-3">
              <span>🌐</span>
              <span>connect.alimurtaza@gmail.com</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Location</p>
            <div className="flex items-center space-x-3 text-slate-900">
              <MapPin size={20} />
              <span className="font-bold text-lg">Bangalore, India /Remote</span>
              <span className="font-bold text-lg">Lucknow, India / Remote</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Professional Profiles</p>
          <div className="space-y-4">
            <a href="https://linkedin.com/in/alimurtazadevops/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-slate-100">
              <Linkedin size={24} className="text-slate-900" />
              <div>
                <p className="font-bold text-slate-900">LinkedIn</p>
                <p className="text-xs text-slate-500">Connect professionally</p>
              </div>
            </a>
            <a href="https://github.com/alidevopsculture" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-slate-100">
              <Github size={24} className="text-slate-900" />
              <div>
                <p className="font-bold text-slate-900">GitHub</p>
                <p className="text-xs text-slate-500">View my code</p>
              </div>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-slate-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Availability</p>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-bold text-slate-900">Open to new opportunities</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Send a Message</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required name="name" type="text" placeholder="Your Name" className="w-full bg-slate-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm" />
            <input required name="email" type="email" placeholder="Your Email" className="w-full bg-slate-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm" />
            <textarea required name="message" rows={4} placeholder="Your Message" className="w-full bg-slate-50 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm"></textarea>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all disabled:opacity-50">
              <Send size={16} />
              <span>{status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}</span>
            </button>
            {status === 'error' && <p className="text-red-500 text-xs text-center">Failed to send. Please email directly.</p>}
          </form>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">What I Can Help With</p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Cloud Infrastructure</p>
                <p className="text-sm text-slate-500">AWS, Azure, GCP architecture & migration</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">CI/CD Pipelines</p>
                <p className="text-sm text-slate-500">Automated deployment & testing workflows</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Container Orchestration</p>
                <p className="text-sm text-slate-500">Kubernetes, Docker, microservices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Infrastructure as Code</p>
                <p className="text-sm text-slate-500">Terraform, CloudFormation, Ansible</p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Web Developemnt</p>
                <p className="text-sm text-slate-500">React, Node, Python</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
              <div>
                <p className="font-bold text-slate-900">Custom Software Developemnt</p>
                <p className="text-sm text-slate-500">AI, Customize feature development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem]">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Response Time</p>
          <p className="text-2xl serif mb-2">Usually within 24 hours</p>
          <p className="text-sm text-slate-400">I aim to respond to all inquiries promptly</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
