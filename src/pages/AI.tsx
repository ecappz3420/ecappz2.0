import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TiltCard } from '@/src/components/UI';
import { MessageSquare, Bot, Sparkles, Zap, Brain, Network, Cpu, Database } from 'lucide-react';
import PageTransition from '@/src/components/PageTransition';
import { useSEO } from '@/src/hooks/useSEO';

const AICapabilities = [
  {
    title: "Custom Virtual Assistants",
    icon: Bot,
    body: "Deploy intelligent, persona-driven bots tailored to specific roles—like an automated virtual HR assistant to handle employee onboarding, leave tracking, and company policy queries instantly.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Advanced WhatsApp Automation",
    icon: MessageSquare,
    body: "Turn your WhatsApp Business account into an automated powerhouse. We build intelligent chatbots that manage customer support, provide real-time order status updates, and handle complex ticketing seamlessly.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "RAG & Custom LLM Integrations",
    icon: Sparkles,
    body: "Embed the power of GPT technology directly into your proprietary SaaS applications. We build Retrieval-Augmented Generation (RAG) pipelines that allow AI to securely query your internal data without hallucinations.",
    color: "from-purple-500 to-pink-500"
  }
];

const CapabilityCard = ({ cap, index }: { cap: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="h-full">
      <TiltCard className="flex flex-col h-full bg-white/5 border-white/10 hover:border-primary/30 group relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cap.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow`} />
        
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 glow-border">
          <cap.icon className="w-8 h-8 text-primary animate-pulse-glow" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">{cap.title}</h3>
        <p className="text-white/60 leading-relaxed mb-8 flex-grow relative z-10">
          {cap.body}
        </p>
        {cap.image && (
          <div className="relative rounded-xl overflow-hidden mt-auto">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={cap.image} 
              alt={cap.title}
              className="w-full h-48 object-cover rounded-xl grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </TiltCard>
    </motion.div>
  );
};

const AI = () => {
  useSEO({
    title: 'Cognitive AI',
    description: 'Deploy machine learning models and LLMs for real, measurable business impact. Custom virtual assistants, WhatsApp automation, and RAG architectures.',
    keywords: 'AI, artificial intelligence, machine learning, LLM, cognitive tech, RAG, WhatsApp automation, virtual assistants'
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative text-center mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <Brain className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Cognitive Intelligence</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter"
            >
              Artificial Intelligence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                Real Business Impact.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Transform how you interact with your data and your customers. We integrate the latest in machine learning directly into your workflows.
            </motion.p>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {AICapabilities.map((cap, i) => (
              <CapabilityCard key={i} cap={cap} index={i} />
            ))}
          </div>

          {/* Architecture Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl -z-10 animate-pulse-glow" />
                <TiltCard className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden h-full min-h-[400px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
                  <div className="relative z-10 grid grid-cols-3 gap-8">
                    {[Brain, Network, Cpu, Database, Sparkles, Zap].map((Icon, idx) => (
                      <div key={idx} className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse-glow backdrop-blur-sm hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${idx * 0.2}s` }}>
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] glow-border">
                  <Network className="w-10 h-10 text-primary animate-pulse-glow" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Neural Network Architecture</h2>
                <p className="text-xl text-white/60 leading-relaxed">
                  We don't just use APIs; we design robust AI architectures that scale with your enterprise. From fine-tuning models to deploying scalable inference endpoints, we handle the complex engineering so you can focus on results.
                </p>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-center gap-3"><Cpu className="w-5 h-5 text-primary" /> Custom Model Fine-tuning</li>
                  <li className="flex items-center gap-3"><Database className="w-5 h-5 text-primary" /> Vector Database Integration</li>
                  <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Low-Latency Inference</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AI Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-40"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6">Powered by the Best</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">We leverage industry-leading AI models and frameworks to deliver uncompromising performance.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['OpenAI GPT-4', 'Anthropic Claude 3', 'Google Gemini', 'Meta Llama 3', 'LangChain', 'Pinecone', 'Hugging Face', 'TensorFlow'].map((tech, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group">
                  <span className="text-lg font-bold text-white/70 group-hover:text-primary transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full animate-pulse-glow" />
            <div className="glass p-16 rounded-[3rem] max-w-4xl mx-auto border border-primary/30 bg-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <h2 className="text-5xl font-display font-bold mb-6">Ready to Automate?</h2>
              <p className="text-white/60 mb-12 text-xl max-w-2xl mx-auto">
                Let's explore how cognitive AI can streamline your specific business operations and unlock new growth potential.
              </p>
              <button className="px-12 py-5 bg-primary text-background font-bold rounded-full hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3 mx-auto">
                Schedule AI Consultation <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AI;
