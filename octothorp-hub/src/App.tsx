import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Server, Shield, FileText, Zap, FolderSync, Activity, PlayCircle } from 'lucide-react';

const customStyles = `
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
`;

const NodeLogo = ({ className = "w-6 h-6 text-white" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* The Horizontal Lines */}
    <path d="M3 8h18" />
    <path d="M3 16h18" />
    {/* The Vertical Lines */}
    <path d="M8 3v18" />
    <path d="M16 3v18" />
    {/* The Network Nodes exactly on the intersections */}
    <circle cx="8" cy="8" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="8" cy="16" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

const journeySteps = [
  {
    id: 'step-1',
    title: 'Zero-Touch Intake',
    description: 'We eliminate the manual data-entry trap. Your prospects interface with highly optimized capture engines that route data directly into your CRM before you even wake up.',
    icon: <Activity className="w-8 h-8 text-white" />,
    visual: 'init_capture_stream.sh'
  },
  {
    id: 'step-2',
    title: 'Automated Architecture',
    description: 'Stop digging through email attachments. Our systems automatically generate secure architectures, categorizing and filing compliance documents the exact second they are submitted.',
    icon: <FolderSync className="w-8 h-8 text-white" />,
    visual: 'provision_drive_nodes.ts'
  },
  {
    id: 'step-3',
    title: 'The EasyQuote Closer',
    description: 'Exterminate the foreplay in closing. We equip you with a proprietary quotation engine that processes prospect parameters and instantly delivers enterprise-grade PDF estimates.',
    icon: <FileText className="w-8 h-8 text-white" />,
    visual: 'generate_pdf_contract.pdf'
  }
];

const testimonials = [
  { id: 1, company: "XMF Human Capital", quote: "Automated quoting saves us hours of manual admin every single day.", author: "Xolani Mabaso", highlight: true },
  { id: 2, company: "Empodera Academy", quote: "A completely seamless transition for our learnership programs.", author: "Selu Msweli", highlight: true },
  { id: 3, company: "Acme Logistics", quote: "Our candidate screening time dropped by 80% in the first week.", author: "Sarah Jenkins", highlight: false },
  { id: 4, company: "Nexus Partners", quote: "The most robust API integration we've ever experienced.", author: "David Chen", highlight: false },
  { id: 5, company: "Vertex Solar", quote: "Quotes go out in seconds. Our conversion rate doubled.", author: "Michael Ross", highlight: false },
  { id: 6, company: "Pinnacle Edu", quote: "Flawless document management. No more lost PDFs.", author: "Dr. Amanda T.", highlight: false },
  { id: 7, company: "Aura Consulting", quote: "Octothorp delivered an enterprise system for a fraction of the time.", author: "James V.", highlight: false },
  { id: 8, company: "Lumina Tech", quote: "The UI is breathtaking, but the backend is where the real magic is.", author: "Priya S.", highlight: false },
  { id: 9, company: "Quantum Staffing", quote: "We scaled our operations 3x without hiring a single admin.", author: "Robert K.", highlight: false },
];

function App() {
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
      // FIX: Highly forgiving threshold to ensure the dynamic scroll ALWAYS triggers
      { rootMargin: '-20% 0px -30% 0px', threshold: 0.1 }
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-mopane selection:text-brand-dark font-sans text-white relative">
      <style>{customStyles}</style>

      {/* The Subtly Chic Bottom-Right Watermark */}
      <div className="fixed -bottom-[10%] -right-[5%] z-0 pointer-events-none flex items-center justify-center opacity-[0.02] text-white">
        <NodeLogo className="w-[50vw] h-[50vw] -rotate-12" />
      </div>

      {/* Navigation */}
      <nav className="w-full border-b border-brand-granite/30 bg-brand-dark/90 backdrop-blur-xl fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-node-gradient flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300">
              <NodeLogo />
            </div>
            <span className="text-xl font-display font-bold tracking-[0.2em] text-white uppercase transition-colors">
              Octothorp
            </span>
          </div>
          <button className="hidden md:block bg-transparent hover:bg-brand-charcoal border border-brand-granite text-white px-6 py-3 rounded-lg text-sm font-bold transition-all hover:border-white active:scale-95">
            Client Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-48 pb-32 px-6 min-h-screen flex items-center relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-charcoal/80 backdrop-blur border border-brand-granite text-xs font-bold text-white uppercase tracking-[0.2em] cursor-default">
            <span className="w-2 h-2 rounded-full bg-mopane animate-pulse shadow-[0_0_10px_rgba(192,90,51,0.8)]"></span>
            Enterprise Cloud Architecture
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-white leading-[1.1] tracking-tighter text-balance">
            Outgrow your spreadsheets. <br />
            <span className="inline-block mt-4 bg-mopane text-brand-dark px-6 py-2 transform -rotate-2 shadow-2xl">
              Automate your pipeline.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto text-balance font-medium opacity-90">
            We architect bespoke, zero-touch operational infrastructure for South Africa's elite human capital agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <button className="group flex items-center justify-center gap-3 bg-mopane text-brand-dark px-10 py-5 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-[0_0_40px_rgba(192,90,51,0.4)] hover:bg-white hover:-translate-y-1 active:scale-95">
              Reserve Your Deployment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center justify-center gap-3 bg-brand-charcoal hover:bg-brand-granite border border-brand-granite hover:border-white text-white px-10 py-5 rounded-lg font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 active:scale-95">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Test Drive Engine
            </button>
          </div>
        </div>
      </main>

      {/* The Detail-Oriented Sticky Journey */}
      <section className="relative bg-brand-charcoal/40 backdrop-blur-sm border-y border-brand-granite/30 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 relative">
            
            {/* Left Column: The Dynamic Visualizer */}
            <div className="hidden lg:block relative">
              <div className="sticky top-0 h-screen flex flex-col justify-center">
                <div className="relative w-full aspect-square bg-brand-dark/90 backdrop-blur-xl border border-brand-granite/50 rounded-3xl p-8 shadow-2xl overflow-hidden transition-all duration-700 group hover:border-white/20">
                  
                  <div className="relative z-10 h-full flex flex-col">
                    
                    <div className="flex items-center justify-between mb-8 border-b border-brand-granite/50 pb-4 relative h-8">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-granite group-hover:bg-red-500/50 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-brand-granite group-hover:bg-yellow-500/50 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-brand-granite group-hover:bg-green-500/50 transition-colors"></div>
                      </div>
                      <div className="relative w-64 h-full">
                        {journeySteps.map((step, idx) => (
                           <span 
                             key={`title-${idx}`}
                             className={`absolute right-0 top-0 text-xs font-mono font-bold tracking-wider transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeStep === idx ? 'opacity-100 translate-y-0 text-white' : 'opacity-0 translate-y-4 text-brand-granite'}`}
                           >
                             {step.visual}
                           </span>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Core Visuals */}
                    <div className="flex-1 flex items-center justify-center relative">
                      
                      <div className={`absolute w-full h-full flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeStep === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 blur-sm -z-10'}`}>
                        <div className="relative w-56 h-56 flex items-center justify-center border border-mopane/30 rounded-full bg-brand-charcoal/50 shadow-[0_0_50px_rgba(192,90,51,0.15)] animate-float">
                           <Activity className="w-16 h-16 text-white animate-pulse" />
                           <div className="absolute inset-0 border border-mopane/40 rounded-full animate-[spin_4s_linear_infinite]"></div>
                           <div className="absolute inset-[-20px] border border-dashed border-brand-granite rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                        </div>
                      </div>

                      <div className={`absolute w-full h-full flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeStep === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-12 blur-sm -z-10'}`}>
                        <div className="grid grid-cols-2 gap-6 w-full max-w-[280px]">
                          <div className="h-28 bg-brand-charcoal/80 border border-brand-granite rounded-xl flex items-center justify-center hover:scale-105 hover:border-white transition-all cursor-default"><Server className="text-white w-8 h-8" /></div>
                          <div className="h-28 bg-mopane rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(192,90,51,0.3)] animate-float"><FolderSync className="text-brand-dark w-10 h-10" /></div>
                          <div className="h-28 bg-brand-charcoal/80 border border-brand-granite rounded-xl flex items-center justify-center hover:scale-105 hover:border-white transition-all cursor-default"><Shield className="text-white w-8 h-8" /></div>
                          <div className="h-28 bg-brand-charcoal/80 border border-brand-granite rounded-xl flex items-center justify-center hover:scale-105 hover:border-white transition-all cursor-default">
                             <div className="w-10 h-10 bg-brand-dark border border-brand-granite rounded-lg flex items-center justify-center">
                               <NodeLogo className="w-5 h-5 text-white" />
                             </div>
                          </div>
                        </div>
                      </div>

                      <div className={`absolute w-full h-full flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeStep === 2 ? 'opacity-100 rotate-0 z-10' : 'opacity-0 -rotate-12 scale-110 blur-sm -z-10'}`}>
                        <div className="w-72 bg-brand-charcoal border border-white/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden animate-float">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-mopane/20 rounded-full blur-3xl"></div>
                          <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-lg">
                              <FileText className="w-5 h-5 text-brand-dark" />
                            </div>
                            <span className="text-xs font-mono font-bold text-white">PDF-EST</span>
                          </div>
                          <div className="h-4 w-2/3 bg-brand-granite rounded mb-4"></div>
                          <div className="h-2 w-full bg-brand-granite/50 rounded mb-2"></div>
                          <div className="h-2 w-4/5 bg-brand-granite/50 rounded mb-8"></div>
                          <div className="flex justify-between items-center border-t border-brand-granite/50 pt-6 relative z-10">
                            <span className="text-sm font-bold text-white">Total Pipeline</span>
                            {/* FIX: Dynamic quote is now abstract RXX,XXX */}
                            <span className="text-xl font-display font-bold text-white">RXX,XXX</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Narrative */}
            <div className="py-[30vh] space-y-[60vh] pb-[30vh]">
              {journeySteps.map((step, index) => (
                <div 
                  key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  /* FIX: Inactive text is no longer aggressively faded, and is explicitly pure white */
                  className={`transition-all duration-700 ease-out ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-8'}`}
                >
                  <div className="w-16 h-16 bg-brand-charcoal border border-brand-granite rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/50">
                    <div className="transition-transform duration-500 ease-out hover:scale-110 hover:rotate-12">
                       {step.icon}
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1] text-white text-balance">
                    {step.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white leading-relaxed text-balance">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* The 3D Glassmorphic Flip Grid */}
      <section className="py-40 px-6 relative z-10 bg-brand-dark">
        <div className="max-w-6xl mx-auto space-y-24">
          
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Trusted by Industry Leaders</h2>
            <p className="text-xl text-white opacity-80">Infrastructure that scales with your ambition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="group perspective-1000 h-64 cursor-pointer">
                <div className="relative w-full h-full transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-3d group-hover:rotate-y-180">
                  
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-brand-charcoal/40 backdrop-blur-sm border border-brand-granite/50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:bg-brand-charcoal/60">
                     <span className={`font-display font-bold text-2xl tracking-widest uppercase ${t.highlight ? 'text-white' : 'text-white opacity-50'}`}>
                       {t.company}
                     </span>
                  </div>

                  {/* Back: The Glowing Review */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-node-gradient rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_40px_rgba(217,38,133,0.4)]">
                     <p className="text-white text-lg font-bold leading-snug mb-6 text-balance">
                       "{t.quote}"
                     </p>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white font-bold text-xs">
                          {t.author.charAt(0)}
                        </div>
                        <span className="text-white font-bold text-sm tracking-wider uppercase opacity-100">{t.author}</span>
                     </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-20 border-t border-brand-granite/30">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white text-balance mb-8">Ready to weaponize your operations?</h2>
            <button className="group bg-white text-brand-dark hover:bg-stone-200 px-12 py-6 rounded-lg font-bold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:scale-95">
              Reserve Your Deployment
            </button>
          </div>

        </div>
      </section>

      {/* The Footer */}
      <footer className="bg-[#101012] border-t border-brand-granite/30 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer w-max">
              <div className="w-10 h-10 rounded-xl bg-node-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <NodeLogo className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-[0.2em] text-white uppercase transition-colors">
                Octothorp
              </span>
            </div>
            <p className="text-white max-w-sm text-sm leading-relaxed text-left opacity-90">
              Proprietary cloud architecture and talent acquisition infrastructure for South Africa's highest-growth agencies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Infrastructure</h4>
            <ul className="space-y-4 text-sm font-bold text-white opacity-80">
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">The EasyQuote Engine</li>
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">Automated CRM Routing</li>
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">Document Architecture</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Legal & Security</h4>
            <ul className="space-y-4 text-sm font-bold text-white opacity-80">
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">POPIA Compliance</li>
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">Data Processing Addendum</li>
              <li className="hover:opacity-100 cursor-pointer transition-all hover:translate-x-1 duration-200">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-brand-granite/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white opacity-80 font-mono font-bold">
          <span>© 2026 Octothorp Digital Solutions. All rights reserved.</span>
          <span className="flex items-center gap-2 bg-brand-charcoal px-3 py-1.5 rounded-full border border-brand-granite cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Systems Operational
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;