import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TiltCard } from '@/src/components/UI';
import { Database, Link2, Settings, Cpu, Workflow, Layers } from 'lucide-react';
import PageTransition from '@/src/components/PageTransition';
import { useSEO } from '@/src/hooks/useSEO';

const Zoho = () => {
  useSEO({
    title: 'Zoho Solutions',
    description: 'Custom Zoho architecture and deep integration for your entire ecosystem. Certified Zoho Creator Partner engineering intelligent, custom ecosystems.',
    keywords: 'Zoho, Zoho Creator, ERP, CRM, Zoho integration, automation, Deluge scripting, ECAPPZ Zoho'
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden" ref={containerRef}>
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative text-center mb-40">
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
              <div className="relative w-[500px] h-[500px]">
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${deg}deg)` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center absolute -top-8 left-1/2 -ml-8 backdrop-blur-sm glow-border">
                      <Settings className="text-primary w-8 h-8 animate-pulse-glow" />
                    </div>
                  </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                  <div className="w-24 h-24 bg-background border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)] z-10 glow-border">
                    <Cpu className="w-12 h-12 text-primary animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 relative z-10 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <Workflow className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Enterprise Systems</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter relative z-10"
            >
              Bespoke Zoho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                Architecture.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed relative z-10 font-light"
            >
              When off-the-shelf software falls short, we engineer intelligent, custom ecosystems tailored to your exact operational logic.
            </motion.p>
          </div>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {[
              {
                icon: Database,
                title: "Zoho Creator Mastery",
                desc: "We don't just tweak templates; we engineer full-stack, customized web applications from scratch using advanced Deluge scripting to match your exact business logic.",
                delay: 0
              },
              {
                icon: Link2,
                title: "Ecosystem Integration",
                desc: "Connecting Zoho CRM, Projects, Books, and external APIs to create a unified, single source of truth for your data, powered by intelligent routing.",
                delay: 0.2
              },
              {
                icon: Layers,
                title: "Automated Logistics",
                desc: "We bridge Zoho with third-party tools to handle complex operations, from automated sales order processing to dynamic, AI-enhanced client communication portals.",
                delay: 0.4
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.6 }}
              >
                <TiltCard className="h-full bg-white/5 border-white/10 hover:border-primary/30 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 glow-border">
                    <feature.icon className="w-8 h-8 text-primary animate-pulse-glow" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed relative z-10">
                    {feature.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Feature List */}
          <motion.div 
            style={{ opacity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[3rem] blur-xl -z-10 animate-pulse-glow" />
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Why Choose ECAPPZ for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient-x">Zoho?</span></h2>
                  <ul className="space-y-8">
                    {[
                      { text: "Advanced Deluge Scripting for complex, custom logic", icon: Settings },
                      { text: "Seamless API connections to external AI tools", icon: Link2 },
                      { text: "User-centric, data-rich dashboard design", icon: Layers },
                      { text: "Scalable architecture that grows autonomously", icon: Workflow }
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 text-xl text-white/70 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors glow-border">
                          <item.icon className="w-6 h-6 text-primary animate-pulse-glow" />
                        </div>
                        <span className="group-hover:text-white transition-colors">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div 
                  style={{ y: y1 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 rounded-3xl" />
                  <img 
                    src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Zoho Dashboard"
                    className="rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* Zoho Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6">Comprehensive Zoho Mastery</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">We integrate and customize the entire Zoho suite to create a unified operational powerhouse.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Zoho Creator', 'Zoho CRM', 'Zoho Books', 'Zoho Analytics', 'Zoho Projects', 'Zoho Desk', 'Zoho Flow', 'Zoho Campaigns'].map((app, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group">
                  <span className="text-lg font-bold text-white/70 group-hover:text-blue-400 transition-colors">{app}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Zoho;
