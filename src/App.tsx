import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layout, 
  Smartphone, 
  Monitor, 
  Palette, 
  Scissors, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Layers,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-terracotta rounded-full flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">CraftFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#ecosystem" className="hover:text-brand-terracotta transition-colors">Ecosystem</a>
          <a href="#features" className="hover:text-brand-terracotta transition-colors">Features</a>
          <a href="#personalization" className="hover:text-brand-terracotta transition-colors">Personalization</a>
          <button className="bg-brand-clay text-white px-6 py-2 rounded-full hover:bg-brand-ink transition-all">
            Join Waitlist
          </button>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-ink/5 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)}>Ecosystem</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#personalization" onClick={() => setIsMobileMenuOpen(false)}>Personalization</a>
            <button className="bg-brand-clay text-white px-6 py-3 rounded-full">Join Waitlist</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-terracotta/10 text-brand-terracotta text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            <span>The Future of Handcrafting</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Where <span className="italic">Digital</span> Meets the <span className="text-brand-terracotta">Handmade</span>.
          </h1>
          <p className="text-lg text-brand-ink/70 max-w-md mb-10 leading-relaxed">
            CraftFlow synchronizes your digital inspiration with your physical workspace. An intuitive app and interactive smartboard that guides your hands, not your screen.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-ink text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform">
              Explore the Studio <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-brand-ink/20 px-8 py-4 rounded-full font-medium hover:bg-brand-ink/5 transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="pill-image aspect-[4/5] relative z-10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/craft1/800/1000" 
              alt="Crafting Space" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20 shadow-xl max-w-[180px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xs font-bold uppercase">Smart Sync</span>
            </div>
            <p className="text-[10px] text-brand-ink/60">Board updated with your latest palette selection.</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl z-20 shadow-2xl flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" />
              ))}
            </div>
            <div>
              <p className="text-xs font-bold">12 Active Crafters</p>
              <p className="text-[10px] text-brand-ink/60">In your local workspace</p>
            </div>
          </motion.div>

          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-terracotta/5 rounded-full -z-10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const steps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "The Companion App",
      description: "Design, plan, and curate your projects on the go. AI-driven pattern generation tailored to your skill level."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "The SmartBoard",
      description: "A high-resolution, touch-sensitive surface that projects guides directly onto your physical materials."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "The Physical Space",
      description: "Integrated sensors track your tools and materials in real-time, providing haptic and visual feedback."
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl mb-6">A Unified Crafting Universe</h2>
          <p className="text-brand-ink/60">Three components working in perfect harmony to elevate your creative process from screen to studio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-terracotta group-hover:text-white transition-colors duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl mb-4">{step.title}</h3>
              <p className="text-brand-ink/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Personalization = () => {
  return (
    <section id="personalization" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="pill-image aspect-square">
                  <img src="https://picsum.photos/seed/p1/400/400" className="w-full h-full object-cover" />
                </div>
                <div className="pill-image aspect-[3/4]">
                  <img src="https://picsum.photos/seed/p2/400/533" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="pill-image aspect-[3/4]">
                  <img src="https://picsum.photos/seed/p3/400/533" className="w-full h-full object-cover" />
                </div>
                <div className="pill-image aspect-square">
                  <img src="https://picsum.photos/seed/p4/400/400" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-4 h-4 text-brand-terracotta" />
                <span className="text-xs font-bold uppercase tracking-wider">Style Profile</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full" style={{ backgroundColor: ['#5a5a40', '#c16e50', '#f5f2ed', '#1a1a1a', '#e2e8f0'][i-1] }} />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-5xl mb-8">Crafting that <span className="italic">Knows</span> You.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center font-serif italic text-xl">1</div>
                <div>
                  <h4 className="text-xl mb-2">Adaptive Tutorials</h4>
                  <p className="text-brand-ink/60">Instructions that adjust in real-time based on your speed and precision. No more pausing videos with messy hands.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center font-serif italic text-xl">2</div>
                <div>
                  <h4 className="text-xl mb-2">Material Intelligence</h4>
                  <p className="text-brand-ink/60">The SmartBoard identifies your fabrics, woods, or clays and suggests the best techniques for that specific medium.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center font-serif italic text-xl">3</div>
                <div>
                  <h4 className="text-xl mb-2">Style Evolution</h4>
                  <p className="text-brand-ink/60">Our AI analyzes your past creations to suggest new projects that push your boundaries while staying true to your aesthetic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Layers />, title: "Augmented Projection", desc: "Project patterns directly onto your workspace with zero parallax." },
    { icon: <Scissors />, title: "Precision Tracking", desc: "Track tool movements within 0.1mm for perfect cuts every time." },
    { icon: <Palette />, title: "Color Matching", desc: "Scan physical materials to find perfect digital color complements." },
    { icon: <Smartphone />, title: "Remote Control", desc: "Adjust board settings and lighting via voice or app." }
  ];

  return (
    <section id="features" className="py-24 bg-brand-clay text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors">
              <div className="mb-6 text-brand-terracotta">{f.icon}</div>
              <h3 className="text-xl mb-3">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-terracotta rounded-full flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">CraftFlow</span>
            </div>
            <p className="text-brand-ink/60 max-w-sm mb-8">
              Redefining the relationship between technology and the human hand. Built for creators, by creators.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Pinterest'].map(s => (
                <a key={s} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-terracotta transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><a href="#" className="hover:text-brand-ink">The App</a></li>
              <li><a href="#" className="hover:text-brand-ink">SmartBoard Pro</a></li>
              <li><a href="#" className="hover:text-brand-ink">Studio Kits</a></li>
              <li><a href="#" className="hover:text-brand-ink">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60">
              <li><a href="#" className="hover:text-brand-ink">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-ink">Manifesto</a></li>
              <li><a href="#" className="hover:text-brand-ink">Careers</a></li>
              <li><a href="#" className="hover:text-brand-ink">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-brand-ink/5 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
          <p>© 2026 CraftFlow Studio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Ecosystem />
      
      {/* Mid-page CTA */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-16 rounded-[60px] shadow-xl border border-brand-ink/5"
          >
            <h2 className="text-5xl mb-8">Ready to transform your studio?</h2>
            <p className="text-brand-ink/60 mb-10 max-w-xl mx-auto">
              Join 5,000+ artisans who are already bridging the gap between digital vision and physical creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-brand-cream px-8 py-4 rounded-full w-full max-w-xs border-none focus:ring-2 focus:ring-brand-terracotta outline-none"
              />
              <button className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold hover:bg-brand-ink transition-all w-full sm:w-auto">
                Get Early Access
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-terracotta rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-clay rounded-full blur-[100px]" />
        </div>
      </section>

      <Personalization />
      <Features />
      
      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pill-image aspect-video">
              <img src="https://picsum.photos/seed/studio/800/450" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="mb-6 text-brand-terracotta">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
              </div>
              <blockquote className="text-3xl font-serif italic mb-8 leading-snug">
                "CraftFlow didn't just add a screen to my table; it added a mentor. I've tackled projects I never thought possible because the guidance is so intuitive and physical."
              </blockquote>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/artist/60/60" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold">Elena Rossi</p>
                  <p className="text-xs text-brand-ink/60 uppercase tracking-widest">Master Woodworker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
