import { useState } from 'react';
import { Send, CheckCircle, ArrowRight, ShieldCheck, Zap, Database, Settings, CreditCard, ChevronDown } from 'lucide-react';

const EasyQuoteLogo = () => (
  <div className="w-10 h-10 rounded-xl bg-[#FFC107] flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.3)]">
    <span className="font-display font-bold text-2xl text-black tracking-tighter">Q</span>
  </div>
);

const vasFeatures = [
  { icon: <Settings className="w-6 h-6 text-[#FFC107]" />, title: "White-Label Branding", desc: "Your logo, your fonts, your color scheme. Flawless brand continuity." },
  { icon: <Database className="w-6 h-6 text-[#FFC107]" />, title: "CRM Sync (HubSpot/GHL)", desc: "Leads automatically push directly into your existing sales pipeline." },
  { icon: <ShieldCheck className="w-6 h-6 text-[#FFC107]" />, title: "POPIA/GDPR Compliant", desc: "Data is encrypted and safely stored according to local compliance laws." },
  { icon: <Zap className="w-6 h-6 text-[#FFC107]" />, title: "Instant PDF Generation", desc: "Proprietary PDF algorithms send professional estimates in 4 seconds." },
];

const faqs = [
  { q: "How long does the White-Glove setup take?", a: "Once the deposit is cleared, our team integrates EasyQuote into your CRM and finalizes your PDF branding within 72 hours." },
  { q: "Do my clients have to log in to use it?", a: "No. The system is a zero-friction embedded widget. They land on your site, input parameters, and get a quote instantly." },
  { q: "Can I adjust the pricing logic later?", a: "Yes. You will have access to a secure admin matrix to update your base rates, user tiers, and operational costs at any time." },
];

export default function EasyQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    // FIX 1: Pure black background (#000000) for maximum contrast
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="w-full border-b border-[#222222] bg-black/90 backdrop-blur-xl fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <EasyQuoteLogo />
            <span className="text-lg font-display font-bold tracking-widest uppercase">EasyQuote™</span>
          </div>
          <button className="bg-[#FFC107] text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-all text-sm hidden md:block active:scale-95">
            Secure Deployment
          </button>
        </div>
      </nav>

      {/* Hero & Interactive Demo */}
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#333333] text-xs font-bold text-[#FFC107] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Accepting New Deployments
          </div>
          
          {/* FIX 2: Brought back the crossed-out hook */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight text-white">
            Stop losing deals to <br/>
            <span className="text-[#666666] line-through decoration-[#FFC107] decoration-4">slow proposals.</span>
          </h1>
          
          <p className="text-xl text-[#AAAAAA] leading-relaxed max-w-lg">
            Give your customers a professional, fully-branded PDF quote instantly, and push the data directly into your CRM. 
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#FFC107] text-black px-8 py-4 rounded-xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,193,7,0.2)] hover:scale-105 active:scale-95 flex items-center gap-2">
              Deploy For $997
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Engine Widget (Demo) */}
        <div className="relative w-full max-w-md mx-auto lg:ml-auto">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[#FFC107]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          {/* FIX 3: High-contrast form container */}
          <div className="relative bg-[#0A0A0A] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl">
            {submitted ? (
              <div className="p-12 text-center space-y-6 bg-[#0A0A0A]">
                 <CheckCircle className="w-16 h-16 text-[#FFC107] mx-auto" />
                 <h2 className="text-2xl font-bold text-white">Estimate Delivered</h2>
                 <p className="text-[#AAAAAA] text-sm">Your client just received a branded PDF, and the lead is in your CRM.</p>
                 <button onClick={() => setSubmitted(false)} className="text-[#FFC107] text-sm font-bold hover:underline">Reset Demo</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-8 space-y-6">
                <div className="border-b border-[#222222] pb-4 mb-6">
                  {/* FIX 4: Pure white headings */}
                  <h3 className="text-xl font-display font-bold text-white">Test The Engine</h3>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#AAAAAA]">Client Name</label>
                  <input required type="text" className="w-full bg-[#111111] border border-[#333333] rounded-xl p-3 focus:border-[#FFC107] outline-none text-white placeholder-[#555555]" placeholder="e.g. John Doe" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#AAAAAA]">Users Required</label>
                    <span className="text-xs font-mono font-bold text-[#FFC107]">1 - 50+</span>
                  </div>
                  <input type="range" min="1" max="50" className="w-full h-2 bg-[#222222] rounded-lg appearance-none accent-[#FFC107] cursor-pointer" />
                </div>
                <button type="submit" className="w-full bg-[#FFC107] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all active:scale-95 shadow-lg">
                  Simulate PDF Generation <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Value Added Services Grid */}
      <section className="py-24 bg-[#0A0A0A] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Enterprise Infrastructure</h2>
            <p className="text-[#AAAAAA] mt-4 text-lg">Everything you need to automate your closing pipeline.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vasFeatures.map((feat, idx) => (
              <div key={idx} className="bg-black border border-[#333333] p-8 rounded-2xl hover:border-[#FFC107]/50 transition-colors group">
                <div className="mb-6 bg-[#111111] w-12 h-12 rounded-lg flex items-center justify-center border border-[#333333] group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{feat.title}</h3>
                <p className="text-[#AAAAAA] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Business Model / Pricing */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#111111] to-black border border-[#333333] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
           {/* Abstract Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-[80px]"></div>
           
           <div className="flex-1 space-y-6 relative z-10">
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The White-Glove Deployment</h2>
             <p className="text-[#AAAAAA] text-lg max-w-md">We don't just hand you software. We architect your pricing matrix, design your PDF templates, and wire it directly into your CRM.</p>
             <ul className="space-y-4 pt-4">
               {['Custom Pricing Logic Matrix', 'Brand-Matched PDF Design', 'CRM Webhook Integration', 'Dedicated Onboarding Call'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                    <CheckCircle className="w-5 h-5 text-[#FFC107]" /> {item}
                 </li>
               ))}
             </ul>
           </div>

           <div className="w-full md:w-96 bg-black border border-[#FFC107]/30 rounded-2xl p-8 text-center relative z-10 shadow-[0_0_50px_rgba(255,193,7,0.1)]">
             <div className="text-[#AAAAAA] font-bold tracking-widest uppercase text-xs mb-4">One-Time Setup</div>
             <div className="text-6xl font-display font-bold text-white mb-2">$997</div>
             <div className="text-[#AAAAAA] text-sm mb-8">+ $49/mo Maintenance & Hosting</div>
             <button className="w-full bg-[#FFC107] text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg">
               <CreditCard className="w-5 h-5" /> Secure Your Instance
             </button>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#222222]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#333333] rounded-xl bg-black overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-6 text-left flex justify-between items-center font-bold text-white hover:bg-[#111111] transition-colors">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-[#FFC107] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && <div className="p-6 pt-0 text-[#AAAAAA] text-sm border-t border-[#333333]">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#222222] text-center text-[#AAAAAA] text-sm bg-black">
        <p>© 2026 EasyQuote™ by Octothorp Digital Solutions.</p>
      </footer>
    </div>
  );
}