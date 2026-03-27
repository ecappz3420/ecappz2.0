import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, ChevronRight, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Logo } from '@/src/components/UI';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Zoho', path: '/zoho' },
  { name: 'AI', path: '/ai' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8",
      scrolled ? "top-4" : "top-0 py-4"
    )}>
      <div className={cn(
        "flex items-center justify-between h-16 transition-all duration-500",
        scrolled ? "bg-background/70 backdrop-blur-2xl border border-white/10 rounded-full px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent px-0"
      )}>
        <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 overflow-hidden">
              {!imgError ? (
                <img 
                  src="/logo.png" 
                  alt="ECAPPZ Logo" 
                  className="w-full h-full object-contain p-1" 
                  onError={() => setImgError(true)} 
                />
              ) : (
                <Logo className="text-primary group-hover:text-background w-8 h-8 transition-colors" />
              )}
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
              ECAPPZ<span className="text-primary animate-pulse">_</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 mr-4 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors relative px-5 py-2.5 rounded-full",
                    location.pathname === link.path ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-background font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Initialize <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 bg-background/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-4 text-lg font-medium rounded-xl transition-colors",
                      location.pathname === link.path ? "bg-primary/20 text-primary border border-primary/30" : "text-white/70 hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-primary text-background font-bold rounded-xl"
                >
                  Initialize Connection
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="col-span-1 md:col-span-12 lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <div className="w-12 h-12 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500 overflow-hidden backdrop-blur-md">
                {!imgError ? (
                  <img 
                    src="/logo.png" 
                    alt="ECAPPZ Logo" 
                    className="w-full h-full object-contain p-1.5" 
                    onError={() => setImgError(true)} 
                  />
                ) : (
                  <Logo className="text-primary group-hover:text-white w-6 h-6 transition-colors" />
                )}
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                ECAPPZ<span className="text-primary">_</span>
              </span>
            </Link>
            <p className="text-white/40 max-w-md mb-10 leading-relaxed text-lg font-light">
              Digital Evolution, Engineered. We build custom web apps, autonomous mobile ecosystems, and cognitive AI-driven automation for enterprises ready to scale.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/ecappz/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <Linkedin className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/ecappz/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <Instagram className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/people/Ecappz-Technology/61560038732913/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <Facebook className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/channel/UC9cCvNswBBKAKOEAysr0i1Q" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <Youtube className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-7 pt-4">
            <h4 className="font-display font-bold mb-8 text-lg text-white tracking-wide">Architecture</h4>
            <ul className="space-y-5 text-white/50 font-light">
              <li><Link to="/services" className="hover:text-primary transition-colors flex items-center gap-3 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-3 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> The Vision</Link></li>
              <li><Link to="/zoho" className="hover:text-primary transition-colors flex items-center gap-3 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Zoho Systems</Link></li>
              <li><Link to="/ai" className="hover:text-primary transition-colors flex items-center gap-3 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Cognitive AI</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-8 lg:col-span-4 pt-4">
            <h4 className="font-display font-bold mb-8 text-lg text-white tracking-wide">Comm Channels</h4>
            <ul className="space-y-6 text-white/50 font-light">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <span className="group-hover:text-white transition-colors">sales@ecappz.in</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <span className="group-hover:text-white transition-colors">+91 93440 81058</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <span className="group-hover:text-white transition-colors leading-relaxed">28, G2, MpVrindha, Thirumalai Ngr,<br/>Kundrathur, Chennai, Tamil Nadu,<br/>India, 600069</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm font-light">
          <p>© {new Date().getFullYear()} ECAPPZ. All systems operational.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
