
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cloud } from 'lucide-react';
import { TECH_STACK, SKILLS, PROJECTS, CASE_STUDIES, HOBBIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-in slide-in-from-left duration-700 text-center lg:text-left">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
            DevOps Engineer | Cloud & Automation
          </p>
          <h1 className="text-4xl md:text-7xl serif leading-[1.1] mb-8">
            Automating the <span className="italic">infrastructure</span> that powers the future.
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Hi, I'm Ali Murtaza. I build resilient, scalable, and automated cloud environments that enable teams to ship better software, faster.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
            <Link to="/profession" className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all text-sm md:text-base">
              View My Projects
            </Link>
            <Link to="/contact" className="border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all text-sm md:text-base">
              Collaborate
            </Link>
          </div>
          <div className="max-w-xs mx-auto lg:mx-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Core Stack</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
              {TECH_STACK.map(tech => (
                <span key={tech} className="text-xs md:text-sm font-semibold text-slate-500">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative animate-in slide-in-from-right duration-700 mt-12 lg:mt-0">
          <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -rotate-3 -z-10"></div>
          <div className="absolute inset-4 bg-slate-100 rounded-[3rem] rotate-3 -z-10"></div>
          <div className="aspect-square rounded-[2.5rem] overflow-hidden group border border-slate-100/50 relative z-0">
            <img 
              src="/img/home/Hero.jpg" 
              alt="Cloud Infrastructure" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 md:bottom-8 md:right-8 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl flex items-center space-x-3 md:space-x-4 border border-slate-100 max-w-[200px] md:max-w-xs animate-bounce-slow z-10">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full animate-pulse-blue"></div>
            <p className="text-[10px] md:text-sm font-bold text-slate-900">Seeking DevOps/Cloud Role</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">About Me</p>
            <h2 className="text-4xl md:text-5xl serif leading-tight">
              Building the <span className="italic">infrastructure</span> that powers innovation
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                I'm Ali Murtaza, a DevOps Engineer specializing in cloud-native architectures and automation. 
                Based between Lucknow and Bangalore, India, I help teams ship better software faster through 
                resilient infrastructure and intelligent CI/CD pipelines.
              </p>
              <p>
                My expertise spans AWS cloud services, Kubernetes orchestration, Docker containerization, 
                and Infrastructure as Code with Terraform. I've successfully deployed production-grade 
                applications ranging from 3-tier web platforms to microservices architectures, always 
                prioritizing scalability, security, and automation.
              </p>
              <p>
                Beyond DevOps, I explore AI-driven development with tools like Amazon Q, accelerating 
                full-stack projects while maintaining enterprise-grade quality. When I'm not automating 
                infrastructure, you'll find me capturing street photography or designing minimalist branding.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">AWS Certified</span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">Kubernetes Expert</span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">Open to Remote</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/img/home/IMG_8714.jpg" 
                alt="Ali Murtaza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-sm font-bold text-slate-900 mb-2">Currently Seeking</p>
              <p className="text-xs text-slate-600">DevOps Engineer / Cloud Engineer roles with focus on Kubernetes, AWS, and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="bg-slate-50 py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl serif mb-6">Technical Expertise</h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              My core strengths lie at the intersection of developer productivity and system reliability. I specialize in cloud-native ecosystems and Infrastructure as Code.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center lg:text-left">
                <p className="text-slate-900 font-bold mb-1 text-sm md:text-base">{skill.name}</p>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-6xl serif">Portfolio</h2>
          </div>
          <p className="text-slate-500 max-w-md text-base md:text-lg">
            A glimpse into the complex engineering challenges I've solved using modern automation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <Link to={`/case-study/${project.id}`}>
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl text-sm">
                      View Project
                    </span>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl serif font-medium group-hover:text-slate-600 transition-colors leading-snug">{project.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link to="/profession" className="inline-flex items-center space-x-2 text-slate-900 font-bold hover:text-slate-600 transition-colors py-4">
            <span>Explore Full Professional Work</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 py-20 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Deep Dives</p>
            <h2 className="text-4xl md:text-6xl serif italic">In-depth Case Studies</h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-16 items-center`}>
                <div className="flex-1 w-full">
                  <Link to={`/case-study/${study.id}`} className="block">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                  </Link>
                </div>
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[9px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-medium text-slate-400">{study.subtitle}</p>
                  <h3 className="text-3xl md:text-4xl serif leading-tight">{study.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">{study.description}</p>
                  <Link to={`/case-study/${study.id}`} className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform py-2 border-b-2 border-slate-900 mx-auto lg:mx-0">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Preview Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Beyond the Code</p>
            <h2 className="text-4xl md:text-6xl serif italic">Creative Pursuits</h2>
          </div>
          <Link to="/hobbies" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 text-sm md:text-base">View Gallery</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {HOBBIES.slice(0, 4).map((item, idx) => (
            <div key={item.id} className={`group ${idx % 2 !== 0 ? 'md:translate-y-12' : ''} transition-transform duration-500`}>
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center md:text-left">{item.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Contact Form Home Section */}
      <section className="bg-slate-50 py-20 md:py-32 mt-20 md:mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight">
              Let's build something <span className="italic">extraordinary</span> together.
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-md mx-auto lg:mx-0">
              Whether you have a question about my work or just want to discuss cloud architecture, I'd love to hear from you.
            </p>
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl border border-slate-100 w-full md:w-fit">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-xl text-slate-900"><Globe size={20} /></div>
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Me</p>
                   <a href="mailto:connect.alimurtaza@gmail.com" className="text-sm md:text-base font-bold text-slate-900 break-all md:break-normal">connect.alimurtaza@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl border border-slate-100 w-full md:w-fit">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-xl text-slate-900"><Cloud size={20} /></div>
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</p>
                   <p className="text-sm md:text-base font-bold text-slate-900">Lucknow, India / Remote</p>
                   <p className="text-sm md:text-base font-bold text-slate-900">Bangalore, India / Remote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-[2.5rem] overflow-hidden group border border-slate-100/50 relative z-0">
            <img 
              src="/img/home/IMG_8721.jpg" 
              alt="Cloud Infrastructure" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Form Component for reusability
const ContactForm: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Using Web3Forms for the contact form
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input 
          required 
          name="name" 
          type="text" 
          placeholder="Name" 
          className="bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base" 
        />
        <input 
          required 
          name="email" 
          type="email" 
          placeholder="Email" 
          className="bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base" 
        />
      </div>
      <textarea 
        required 
        name="message" 
        rows={4} 
        placeholder="Your Message" 
        className="w-full bg-slate-50 px-6 md:px-8 py-4 md:py-5 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400 text-sm md:text-base"
      ></textarea>
      <button 
        disabled={status === 'loading'}
        className="w-full bg-slate-900 text-white py-5 md:py-6 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 disabled:opacity-50 text-sm md:text-base"
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
      </button>
      {status === 'error' && <p className="text-red-500 text-center font-bold text-xs md:text-sm">Failed to send. Try again.</p>}
    </form>
  );
};

export default Home;
