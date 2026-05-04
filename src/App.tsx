import { useState } from 'react';
import { Send, CheckCircle, ArrowLeft, Clock, ShieldCheck, Zap } from 'lucide-react';

// The Signature Yellow Q Logo
const EasyQuoteLogo = () => (
  <div className="w-10 h-10 rounded-xl bg-[#FFC107] flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.3)]">
    <span className="font-display font-bold text-2xl text-[#18181B] tracking-tighter">Q</span>
  </div>
);

function App() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-[#141414] border border-[#27272A] p-10 rounded-3xl text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 bg-[#FFC107]/10 border border-[#FFC107]/50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-[#FFC107]" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white">Parameters Locked</h1>
          <p className="text-[#A1A1AA]">Our engine is processing your requirements. You will receive an enterprise-grade PDF estimate in your inbox shortly.</p>
          <button onClick={() => setSubmitted(false)} className="text-[#FFC107] font-bold flex items-center gap-2 mx-auto hover:underline transition-all">
            <ArrowLeft className="w-4 h-4" /> Run another scenario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFC107] selection:text-[#0A0A0A]">
      
      {/* Navigation */}
      <nav className="w-full border-b border-[#27272A] bg-[#0A0A0A]/90 backdrop-blur-xl fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <EasyQuoteLogo />
            <span className="text-lg font-display font-bold tracking-widest uppercase">EasyQuote™</span>
          </div>
          <div className="text-xs font-mono text-[#A1A1AA] flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-full border border-[#27272A]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Engine Online
          </div>
        </div>
      </nav>

      {/* Main Demo Interface */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        
        {/* Left Side: The Value Prop */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-xs font-bold text-[#FFC107] uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            White-Label Deployment
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
            Stop losing deals to <span className="text-[#A1A1AA] line-through">slow proposals.</span>
          </h1>
          
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-lg">
            This is a live demonstration of the EasyQuote™ architecture. Configure the parameters on the right to instantly generate a branded, enterprise-ready PDF quotation.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
             <div className="space-y-2">
                <Clock className="w-6 h-6 text-[#FFC107]" />
                <h3 className="font-bold text-lg">Instant Delivery</h3>
                <p className="text-sm text-[#A1A1AA]">Closes the gap between interest and commitment.</p>
             </div>
             <div className="space-y-2">
                <ShieldCheck className="w-6 h-6 text-[#FFC107]" />
                <h3 className="font-bold text-lg">AODA Compliant</h3>
                <p className="text-sm text-[#A1A1AA]">Flawless accessibility and high-contrast UI.</p>
             </div>
          </div>
        </div>

        {/* Right Side: The Engine Widget */}
        <div className="relative">
          {/* Subtle Yellow Glow behind the widget */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFC107]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative bg-[#141414] border border-[#27272A] rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-[#27272A] bg-white/5">
              <h2 className="text-2xl font-display font-bold">Initialize Configuration</h2>
              <p className="text-[#A1A1AA] text-sm mt-1">Input baseline data to trigger the calculation matrix.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-8 space-y-8">
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">What should we call you?</label>
                <input required type="text" className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-xl p-4 focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] outline-none transition-all text-white placeholder-[#3F3F46]" placeholder="e.g. Xolani Mabaso" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">Project Vertical</label>
                <select className="w-full bg-[#0A0A0A] border border-[#27272A] rounded-xl p-4 focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] outline-none transition-all appearance-none text-white cursor-pointer">
                  <option>Talent Acquisition Portal</option>
                  <option>SETA Learnership Platform</option>
                  <option>Automated Quotation Engine</option>
                  <option>Bespoke Cloud Architecture</option>
                </select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">Operational Scaling</label>
                  <span className="text-xs font-mono font-bold text-[#FFC107]">1 - 50+ USERS</span>
                </div>
                <input type="range" min="1" max="50" className="w-full h-2 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-[#FFC107]" />
              </div>

              <button type="submit" className="w-full bg-[#FFC107] hover:bg-yellow-400 text-[#0A0A0A] font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(255,193,7,0.2)] active:scale-[0.98]">
                Generate PDF Estimate
                <Send className="w-5 h-5" />
              </button>
              
            </form>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;