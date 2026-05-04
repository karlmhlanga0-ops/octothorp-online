import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Server, Shield, FileText, Activity, PlayCircle, Globe } from 'lucide-react';

const customStyles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
  @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  .animate-float { animation: float 6s ease-in-out infinite; }
`;

// Final Vector Node Logo
const NodeLogo = ({ className = "w-6 h-6 text-white" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
    <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8" r="2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="16" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const journeySteps = [
  {
    id: 'step-1',
    title: 'Zero-Touch Intake',
    description: 'We replace manual data entry with optimized capture engines. Your prospects move from lead to CRM data before your team even starts their day.',
    icon: <Activity className="w-8 h-8 text-white" />,
    visual: 'init_capture_stream.sh'
  },
  {
    id: 'step-2',
    title: 'Architecture as a Service',
    description: 'Bespoke document filing and POPIA-compliant storage. We architect the digital infrastructure that manages itself.',
    icon: <Globe className="w-8 h-8 text-white" />,
    visual: 'provision_drive_nodes.ts'
  },
  {
    id: 'step-3',
    title: 'Proprietary Closing Engines',
    description: 'The "Closer" is our EasyQuote engine—a white-labeled solution that turns technical complexity into branded PDF estimates in seconds.',
    icon: <FileText className="w-8 h-8 text-white" />,
    visual: 'generate_pdf_contract.pdf'
  }
];

const testimonials = [
  { id: 1, company: "XMF Human Capital", quote: "Automated quoting saves us hours of manual admin every single day.", author: "Xolani Mabaso", highlight: true },
  { id: 2, company: "Empodera Academy", quote: "A completely seamless transition for our learnership programs.", author: "Selu Msweli", highlight: true },
  { id: 3, company: "Acme Logistics", quote: "Our candidate screening time dropped by 80% in the first week.", author: "Sarah J.", highlight: false },
  { id: 4, company: "Nexus Partners", quote: "The most robust API integration we've ever experienced.", author: "David C.", highlight: false },
  { id: 5, company: "Vertex Solar", quote: "Quotes go out in seconds. Our conversion rate doubled.", author: "Michael R.", highlight: false },
  { id: 6, company: "Pinnacle Edu", quote: "Flawless document management. No more lost PDFs.", author: "Amanda T.", highlight: false },
  { id: 7, company: "Aura Consulting", quote: "Octothorp delivered an enterprise system in a fraction of the time.", author: "James V.", highlight: false },
  { id: 8, company: "Lumina Tech", quote: "The UI is breathtaking, but the backend is where the magic is.", author: "Priya S.", highlight: false },
  { id: 9, company: "Quantum Staffing", quote: "We scaled our operations 3x without hiring a single admin.", author: "Robert K.", highlight: false },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );
    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const openDemo = () => window.open('/easyquote', '_blank');

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-mopane selection:text-brand-dark font-sans text-white relative">
      <style>{customStyles}</style>

      {/* Subtle Bottom-Right Watermark */}
      <div className="fixed -bottom-[10%] -right-[5%] z-0 pointer-events-none flex items-center justify-center opacity-[0.02] text-white">
        <NodeLogo className="w-[50vw] h-[50vw] -rotate-12" />
      </div>

      {/* Navigation */}
      <nav className="w-full border-b border-brand-granite/30 bg-brand-dark/90 backdrop-blur-xl fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-node-gradient flex items-center justify-center shadow-lg shadow-purple-500/10">
              <NodeLogo />
            </div>
            <span className="text-xl font-display font-bold tracking-[0.2em] text-white uppercase">Octothorp</span>
          </div>
          <button className="hidden md:block bg-transparent border border-brand-granite text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-charcoal transition-all">
            Client Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-48 pb-32 px-6 min-h-screen flex items-center relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-charcoal/80 backdrop-blur border border-brand-granite text-xs font-bold text-white uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-mopane animate-pulse"></span>
            Enterprise Business Architect
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-white leading-[1.1] tracking-tighter text-balance">
            Engineer your MRR. <br />
            <span className="inline-block mt-4 bg-mopane text-brand-dark px-6 py-2 transform -rotate-1 shadow-2xl">
              Automate the Close.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto text-balance font-medium opacity-90">
            We architect bespoke, zero-touch operational infrastructure for South Africa's elite recruitment and training agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <button className="group flex items-center justify-center gap-3 bg-mopane text-brand-dark px-10 py-5 rounded-lg font-bold tracking-wide transition-all shadow-xl hover:bg-white active:scale-95">
              Start Your Build
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={openDemo} className="group flex items-center justify-center gap-3 bg-brand-charcoal border border-brand-granite text-white px-10 py-5 rounded-lg font-bold hover:border-white transition-all active:scale-95">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View EasyQuote™ Demo
            </button>
          </div>
        </div>
      </main>

      {/* Sticky Journey Section */}
      <section className="relative bg-brand-charcoal/40 backdrop-blur-sm border-y border-brand-granite/30 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 relative">
            <div className="hidden lg:block relative">
              <div className="sticky top-0 h-screen flex flex-col justify-center">
                <div className="relative w-full aspect-square bg-brand-dark border border-brand-granite rounded-3xl p-8 shadow-2xl overflow-hidden group">
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8 border-b border-brand-granite/50 pb-4 relative h-8 font-mono">
                       <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-granite"></div>
                        <div className="w-3 h-3 rounded-full bg-brand-granite"></div>
                        <div className="w-3 h-3 rounded-full bg-brand-granite"></div>
                      </div>
                      <div className="relative w-64 h-full">
                        {journeySteps.map((step, idx) => (
                           <span key={idx} className={`absolute right-0 transition-all duration-700 ${activeStep === idx ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-4'}`}>
                             {step.visual}
                           </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                      {/* Dynamic Morphing Icons Based on activeStep */}
                      {activeStep === 0 && <Activity className="w-24 h-24 text-white animate-float z-10" />}
                      {activeStep === 1 && <Globe className="w-24 h-24 text-mopane animate-float z-10" />}
                      {activeStep === 2 && <FileText className="w-24 h-24 text-white animate-float z-10" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-[30vh] space-y-[60vh] pb-[30vh]">
              {journeySteps.map((step, index) => (
                <div key={step.id} ref={(el) => (stepRefs.current[index] = el)} className={`transition-all duration-700 ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-8'}`}>
                  <div className="w-16 h-16 bg-brand-charcoal border border-brand-granite rounded-2xl flex items-center justify-center mb-8">
                    {step.icon}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">{step.title}</h2>
                  <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials 3D Grid */}
      <section className="py-40 px-6 relative z-10 bg-brand-dark">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Trusted by Industry Leaders</h2>
            <p className="text-xl text-white opacity-70">Infrastructure that scales with your ambition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="group perspective-1000 h-64 cursor-pointer">
                <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-brand-charcoal border border-brand-granite rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-xl tracking-widest uppercase text-white">{t.company}</span>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-node-gradient rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <p className="text-white font-bold leading-snug mb-4">"{t.quote}"</p>
                    <span className="text-white font-bold text-sm tracking-wider uppercase opacity-100">{t.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-20 border-t border-brand-granite/30">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">Ready to weaponize your operations?</h2>
            <button className="bg-white text-brand-dark hover:bg-mopane px-12 py-6 rounded-lg font-bold tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 active:scale-95">
              Reserve Your Deployment
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-granite/30 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-node-gradient flex items-center justify-center"><NodeLogo /></div>
              <span className="text-xl font-display font-bold tracking-[0.2em] uppercase">Octothorp</span>
            </div>
            <p className="text-white text-sm leading-relaxed text-left opacity-80 max-w-sm">
              Proprietary cloud architecture and human capital infrastructure for South Africa's highest-growth agencies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Infrastructure</h4>
            <ul className="space-y-4 text-sm font-bold opacity-70">
              <li onClick={openDemo} className="hover:text-mopane cursor-pointer transition-all">EasyQuote™ Engine</li>
              <li>Automated CRM Routing</li>
              <li>Document Architecture</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-sm font-bold opacity-70">
              <li>POPIA Compliance</li>
              <li>Terms of Service</li>
              <li>Security Audit</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-brand-granite/30 flex justify-between items-center text-xs opacity-60 font-mono font-bold">
          <span>© 2026 Octothorp Digital Solutions.</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Systems Operational</span>
        </div>
      </footer>
    </div>
  );
}