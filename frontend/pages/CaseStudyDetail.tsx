
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon, CheckCircle2 as CheckCircleIcon } from 'lucide-react';
import { CASE_STUDIES, PROJECTS } from '../constants';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Try to find in CASE_STUDIES first, then check PROJECTS
  const study = CASE_STUDIES.find(s => s.id === id) || 
                (PROJECTS.find(p => p.id === id) as any);

  if (!study) return <Navigate to="/" />;

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to={-1 as any} className="inline-flex items-center space-x-2 text-slate-400 hover:text-slate-900 transition-colors mb-12 group">
          <ArrowLeftIcon size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-[10px]">Back</span>
        </Link>

        <div className="mb-16 md:mb-20 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {study.tags.map((tag: string) => (
              <span key={tag} className="px-5 py-2 bg-slate-50 rounded-full text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-7xl lg:text-8xl serif leading-[1.1] max-w-4xl mb-8 mx-auto md:mx-0">{study.title}</h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed italic mx-auto md:mx-0">
            {study.subtitle || study.category}
          </p>
        </div>

        <div className="aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mb-16 md:mb-24 border border-slate-100">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            <section>
              <h2 className="text-2xl md:text-3xl serif mb-6 md:mb-8 pb-4 border-b border-slate-100">The Challenge</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {study.challenge || "As a DevOps engineer, the primary objective was to modernize the legacy infrastructure while maintaining service availability and improving developer productivity."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl serif mb-6 md:mb-8 pb-4 border-b border-slate-100">The Solution</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {study.solution || "We implemented a robust automation strategy utilizing state-of-the-art cloud tools and Infrastructure as Code practices to create a reproducible and resilient environment."}
              </p>
            </section>

            {/* Testimonial Section */}
            <section className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-lg">
                  <img src="/img/home/CEO-pic 2.PNG" alt="Ali Murtaza" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900">Ali Murtaza</h3>
                  <p className="text-slate-500 text-sm">DevOps Engineer</p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-400">Available for opportunities</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-slate-700 italic leading-relaxed">
                "I believe that great infrastructure is invisible—it empowers developers and scales businesses without friction."
              </blockquote>
              <p className="text-right text-slate-900 font-bold mt-4">— Ali Murtaza</p>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100">
              <h2 className="text-xl md:text-2xl serif mb-8">Key Results</h2>
              <div className="space-y-6 md:space-y-8">
                {(study.results || ["99.9% Uptime achieved", "Automated deployment pipelines", "Infrastructure cost reduction"]).map((result: string, i: number) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircleIcon className="text-slate-900 mt-1 shrink-0" size={24} />
                    <p className="text-slate-700 font-medium leading-tight text-sm md:text-base">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
