import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Hero3D } from '@/src/components/Hero3D';
import { MagneticButton, TiltCard, Typewriter, TypewriterText } from '@/src/components/UI';
import { Code, Smartphone, Cpu, ArrowRight, BrainCircuit, Network, Sparkles, Database, Bot, Zap, ShieldCheck, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/src/components/PageTransition';
import { useSEO } from '@/src/hooks/useSEO';

const testimonials = [
  {
    name: "Karthikeyan",
    role: "Brand Partner",
    company: "Village Raja",
    content: "Working with ECAPPZ has been an absolute pleasure. CEO Reena a skilled professional is not only knowledgeable in business but also dedicated to providing great service and support. She took the time to understand our needs and developed a solution for my Brand Village Raja that exceeded our expectations. The interface of an app shows the quality of ECAPPZ. I was surprised with the interface colours and textures. It was really nice and user-friendly too. I personally recommend ECAPPZ for the people who are interested in automating their business.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Arun Ram Kumar",
    role: "Brand Partner",
    company: "Nellai Karupatti Coffee",
    content: "NKC had the pleasure to work with ECAPPZ in building out core portions of our product, and the results were really cool as we expected. Their expertise and collaboration helped us bring our vision to life, and we're thrilled with the outcome. We appreciated their dedication, creativity, and commitment to delivering high-quality work. We look forward to future collaborations and continuing to achieve great things together!",
    rating: 5,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Balaji M Anandhababu",
    role: "CEO",
    company: "Digitus 360 Technologies",
    content: "I wanted to take a moment to express my gratitude for the excellent work you did on Balance sheet page. Your quick understanding of the problem and your ability to deliver exactly the solution I was looking for are truly impressive. Your expertise and efficiency in tackling this task have not gone unnoticed. The code works perfectly, and it meets all the requirements I outlined. Your attention to detail and prompt response have made a significant positive impact on the project. Thank you once again for your hard work and dedication. I look forward to collaborating with you on future projects.",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isLongText = testimonial.content.length > 250;
  const displayText = isExpanded || !isLongText 
    ? testimonial.content 
    : testimonial.content.slice(0, 250) + '...';

  return (
    <TiltCard className="bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col relative overflow-hidden">
      <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10 -z-10 rotate-12" />
      
      <div className="flex-1 mb-6">
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium italic">
          "{displayText}"
        </p>
        {isLongText && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-primary font-bold text-sm hover:underline focus:outline-none"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-4 shrink-0 pt-4 border-t border-white/10">
        <div>
          <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
          <p className="text-primary">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </TiltCard>
  );
};

const Home = () => {
  useSEO({
    title: 'ECAPPZ | Autonomous Digital Ecosystems',
    description: 'ECAPPZ builds autonomous digital ecosystems, high-performance web applications, and intelligent automation. Transform ambitious ideas into scalable realities.',
    keywords: 'AI solutions, web applications, automation, ECAPPZ, software development, n8n, RAG systems'
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <PageTransition>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-40 md:pt-48 pb-24 overflow-hidden">
          <Hero3D />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-12 md:mt-0">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ opacity }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Next-Gen AI Solutions</span>
                </div>
                <h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-display font-bold leading-[0.85] tracking-tighter mb-8">
                  Intelligence, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x glow-text inline-block pb-4">
                    <Typewriter text="Engineered." delay={0.5} />
                  </span>
                </h1>
                <TypewriterText 
                  text="We don't just write code; we build autonomous digital ecosystems. From high-performance web applications to intelligent automation, we transform ambitious ideas into scalable realities."
                  delay={1.5}
                  className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl leading-relaxed font-light"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                  className="flex flex-wrap gap-6"
                >
                  <Link to="/services">
                    <MagneticButton>Explore Services</MagneticButton>
                  </Link>
                  <Link to="/contact">
                    <MagneticButton variant="ghost">Let's Talk</MagneticButton>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">RAG Systems</h3>
                <p className="text-white/60 leading-relaxed">
                  We build advanced Retrieval-Augmented Generation (RAG) architectures that empower your AI models to securely query your proprietary enterprise data, delivering precise, context-aware insights without hallucination.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-bold">n8n Automations</h3>
                <p className="text-white/60 leading-relaxed">
                  Streamline complex business processes with custom n8n workflows. We connect your disparate SaaS tools, APIs, and databases into a unified, autonomous engine that operates 24/7 with zero manual intervention.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-display font-bold">Enterprise Security</h3>
                <p className="text-white/60 leading-relaxed">
                  Every custom web application, Zoho integration, and AI deployment is fortified with enterprise-grade security protocols, ensuring your sensitive data remains protected across all digital touchpoints.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-glow" />
          
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 mb-6 backdrop-blur-sm">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">System Architecture</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
                  Architecting the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-2">
                    Future of Business.
                  </span>
                </h2>
                <p className="text-xl text-white/50 leading-relaxed mb-10 font-light">
                  We specialize in developing custom software solutions tailored to your precise operational needs. Whether it's a seamless mobile experience, a complex enterprise dashboard, or intelligent bot integration, we deploy cutting-edge technology to give you the competitive edge.
                </p>
                <Link to="/about" className="group flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <motion.div style={{ y: y1 }} className="space-y-6 md:mt-12">
                  <TiltCard className="bg-background/50 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden p-8 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-shimmer" />
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500 flex items-center justify-center">
                        <Code className="w-8 h-8 text-primary relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">Web & Mobile</h3>
                    <p className="text-sm text-white/50 relative z-10">High-performance applications built with modern frameworks.</p>
                  </TiltCard>
                  <TiltCard className="bg-background/50 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden p-8 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:animate-shimmer" />
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/40 transition-colors duration-500" style={{ animationDelay: '1s' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500 flex items-center justify-center">
                        <Database className="w-8 h-8 text-blue-400 relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors relative z-10">Data Architecture</h3>
                    <p className="text-sm text-white/50 relative z-10">Scalable databases and robust backend systems.</p>
                  </TiltCard>
                </motion.div>
                <motion.div style={{ y: y2 }} className="space-y-6">
                  <TiltCard className="bg-background/50 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden p-8 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-shimmer" />
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors duration-500" style={{ animationDelay: '2s' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500 flex items-center justify-center">
                        <BrainCircuit className="w-8 h-8 text-primary relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">AI & Automation</h3>
                    <p className="text-sm text-white/50 relative z-10">Intelligent workflows that eliminate manual bottlenecks.</p>
                  </TiltCard>
                  <TiltCard className="bg-background/50 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden p-8 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:animate-shimmer" />
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/40 transition-colors duration-500" style={{ animationDelay: '3s' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500 flex items-center justify-center">
                        <Network className="w-8 h-8 text-blue-400 relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors relative z-10">System Integration</h3>
                    <p className="text-sm text-white/50 relative z-10">Seamlessly connecting your disparate software tools.</p>
                  </TiltCard>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Preview */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-white/5 to-background" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Core Expertise</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">Solutions designed to scale with your ambition, powered by next-generation technology.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Custom Web Apps", icon: Code, desc: "Scalable, secure, and lightning-fast web applications built for the modern enterprise." },
                { title: "Zoho Solutions", icon: Network, desc: "Bespoke architecture and deep integration for your entire Zoho ecosystem." },
                { title: "AI Integration", icon: BrainCircuit, desc: "Machine learning models and LLMs deployed for real, measurable business impact." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <TiltCard className="text-center h-full border border-white/5 bg-background/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500 group relative overflow-hidden p-8 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-shimmer" />
                    
                    <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                      <div className="absolute inset-2 bg-background rounded-2xl border border-primary/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                      <service.icon className="w-10 h-10 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-white/50 mb-8 leading-relaxed relative z-10">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:underline group relative z-10">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 relative overflow-hidden bg-background border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md">
                <Star className="w-4 h-4" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Client Success</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Trusted by Visionaries</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">Hear from the leaders who have transformed their operations with our custom architectures.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <TestimonialCard testimonial={testimonials[currentTestimonial]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-4 mt-12">
                <button 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Massive CTA Section */}
        <section className="py-40 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-[8rem] font-display font-bold leading-[0.85] tracking-tighter mb-8">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                  Scale?
                </span>
              </h2>
              <p className="text-xl md:text-3xl text-white/50 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Let's architect your next digital ecosystem.
              </p>
              <Link to="/contact">
                <MagneticButton className="text-lg px-12 py-6">Initialize Project</MagneticButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
