import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { TiltCard } from '@/src/components/UI';
import PageTransition from '@/src/components/PageTransition';
import { Cpu, Network, Sparkles, BrainCircuit, Award, Rocket, Layout, Code2, Brain, Zap, Handshake } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const About = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn about ECAPPZ, our vision, and our journey to making enterprise-grade intelligent technology accessible. We are a collective of engineers and data scientists.',
    keywords: 'about ECAPPZ, AI company, software developers, Zoho Creator Partner, digital architects'
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden" ref={containerRef}>
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <BrainCircuit className="w-4 h-4" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">The ECAPPZ Vision</span>
              </div>
              <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter">
                Built by Visionaries. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                  Driven by AI.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                We are a collective of engineers, data scientists, and digital architects dedicated to building the autonomous future of business.
              </p>
            </motion.div>
            
            <motion.div 
              style={{ y: y1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl -z-10 animate-pulse-glow" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-2">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="ECAPPZ AI Lab"
                  className="w-full h-auto rounded-[2rem] object-cover aspect-square transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Story with Timeline */}
          <div className="relative max-w-5xl mx-auto mb-40">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-blue-500/50 to-transparent origin-top rounded-full"
              style={{ scaleY }}
            />

            <div className="space-y-32">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-12">
                  <div className="text-primary font-mono text-sm mb-2">MAY 2024</div>
                  <h2 className="text-4xl font-display font-bold mb-6">The Genesis</h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    Founded by passionate software developers and AI researchers, ECAPPZ was born from a shared vision: to make enterprise-grade, intelligent technology accessible and transformative for businesses of all sizes.
                  </p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 animate-pulse-glow" />
                <div className="md:w-1/2 pl-20 md:pl-12">
                  <TiltCard className="p-6 bg-white/5 border-white/10">
                    <Network className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Connecting the Dots</h3>
                    <p className="text-sm text-white/50">Building the foundational architecture for scalable digital ecosystems.</p>
                  </TiltCard>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row-reverse gap-12 items-center"
              >
                <div className="md:w-1/2 pl-20 md:pl-12">
                  <div className="text-primary font-mono text-sm mb-2">NOVEMBER 2024</div>
                  <h2 className="text-4xl font-display font-bold mb-6">Zoho Creator Partner</h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    We officially became a certified Zoho Creator Partner, expanding our capabilities to deliver powerful, low-code enterprise solutions and custom ERPs tailored to complex business needs.
                  </p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 animate-pulse-glow" />
                <div className="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-12">
                  <TiltCard className="p-6 bg-white/5 border-white/10">
                    <Award className="w-8 h-8 text-primary mb-4 md:ml-auto" />
                    <h3 className="text-xl font-bold mb-2">Enterprise Recognition</h3>
                    <p className="text-sm text-white/50">Validating our expertise in enterprise system architecture.</p>
                  </TiltCard>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-12">
                  <div className="text-primary font-mono text-sm mb-2">2025</div>
                  <h2 className="text-4xl font-display font-bold mb-6">25+ Projects Delivered</h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    A year of massive growth and execution. We successfully delivered over 25 complex projects, ranging from AI-powered web applications to complete digital transformations for our global clients.
                  </p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 animate-pulse-glow" />
                <div className="md:w-1/2 pl-20 md:pl-12">
                  <TiltCard className="p-6 bg-white/5 border-white/10">
                    <Rocket className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Scaling Impact</h3>
                    <p className="text-sm text-white/50">Driving measurable results across multiple industries.</p>
                  </TiltCard>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row-reverse gap-12 items-center"
              >
                <div className="md:w-1/2 pl-20 md:pl-12">
                  <div className="text-primary font-mono text-sm mb-2">MARCH 2026</div>
                  <h2 className="text-4xl font-display font-bold mb-6">Website Revamp</h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    We launched our completely revamped digital presence, reflecting our evolution into a premier AI and automation agency with a sleek, modern, and tech-forward aesthetic.
                  </p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 animate-pulse-glow" />
                <div className="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-12">
                  <TiltCard className="p-6 bg-white/5 border-white/10">
                    <Layout className="w-8 h-8 text-primary mb-4 md:ml-auto" />
                    <h3 className="text-xl font-bold mb-2">Digital Evolution</h3>
                    <p className="text-sm text-white/50">Aligning our brand identity with our advanced capabilities.</p>
                  </TiltCard>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-12">
                  <div className="text-primary font-mono text-sm mb-2">PRESENT</div>
                  <h2 className="text-4xl font-display font-bold mb-6">The AI Mission</h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    Making Every Business Intelligent. Our mission is clear—to empower everyone with the leverage of cognitive technology. We build the autonomous tools that allow you to focus on strategy while our AI handles the execution.
                  </p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 animate-pulse-glow" />
                <div className="md:w-1/2 pl-20 md:pl-12">
                  <TiltCard className="p-6 bg-white/5 border-white/10">
                    <Cpu className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Cognitive Processing</h3>
                    <p className="text-sm text-white/50">Integrating machine learning models to automate complex workflows.</p>
                  </TiltCard>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient-x">Choose Us?</span></h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">Our unique approach to building your digital future.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Bespoke Engineering",
                  desc: "We don't use templates. Every solution is custom-architected to fit your exact operational logic.",
                  icon: Code2
                },
                {
                  title: "AI-First Approach",
                  desc: "We integrate cognitive intelligence into the core of your applications, not just as an afterthought.",
                  icon: Brain
                },
                {
                  title: "Rapid Deployment",
                  desc: "Our agile methodology and deep expertise allow us to deliver enterprise-grade solutions at unprecedented speeds.",
                  icon: Zap
                },
                {
                  title: "End-to-End Partnership",
                  desc: "From initial architecture to post-launch scaling, we act as your dedicated engineering arm.",
                  icon: Handshake
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltCard className="h-full bg-white/5 border-white/10 hover:border-primary/30 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 glow-border">
                      <item.icon className="w-7 h-7 text-primary animate-pulse-glow" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors relative z-10">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm relative z-10">
                      {item.desc}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Core <span className="text-primary">Principles</span></h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">The foundational algorithms that guide our development process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Algorithmic Innovation", desc: "Always pushing the boundaries of what's computationally possible.", icon: Sparkles },
              { title: "Autonomous Efficiency", desc: "Intelligent code that works harder so you don't have to.", icon: Cpu },
              { title: "Democratized AI", desc: "Enterprise-grade cognitive tech for businesses of all sizes.", icon: BrainCircuit }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <TiltCard className="text-center h-full bg-white/5 border-white/10 hover:border-primary/30 group">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-border">
                    <val.icon className="w-8 h-8 text-primary animate-pulse-glow" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{val.title}</h3>
                  <p className="text-white/50 leading-relaxed">{val.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
