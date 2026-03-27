import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { TiltCard } from '@/src/components/UI';
import { Globe, Smartphone, ShoppingCart, Zap, BrainCircuit, Network, Database, ChevronDown, Briefcase, Cloud, Code2 } from 'lucide-react';
import PageTransition from '@/src/components/PageTransition';
import { useSEO } from '@/src/hooks/useSEO';

const services = [
  {
    title: "AI-Powered Web Applications",
    icon: Globe,
    body: "We build secure, lightning-fast web applications integrated with intelligent features. From complex ticketing platforms to synchronized real-time environments supporting high-resolution streaming, our architectures are built for flawless user experiences.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Frontend frameworks (React, Vue, Next.js)",
      "Backend architecture (Node.js, Python, Go)",
      "Cloud Hosting & Scaling (AWS, GCP)",
      "Real-time WebSockets & Data Sync",
      "Advanced Caching & CDN Integration",
      "Enterprise-grade Security Protocols"
    ]
  },
  {
    title: "Autonomous Mobile Ecosystems",
    icon: Smartphone,
    body: "Turn your vision into reality with cross-platform excellence. We craft intuitive, native-feeling apps for iOS and Android using modern frameworks like React Native, ensuring seamless performance from the home screen to the checkout, powered by predictive AI.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "React Native & Flutter Development",
      "Offline-first Architecture",
      "Native API & Hardware Integrations",
      "Automated App Store Deployment",
      "AI-based User Behavior Prediction",
      "Cross-platform State Management"
    ]
  },
  {
    title: "Intelligent E-Commerce & PWA",
    icon: ShoppingCart,
    body: "Blurring the lines between web and mobile. We develop robust e-commerce ecosystems with secure gateways, real-time inventory tracking, and frictionless shopping experiences driven by personalized machine learning models.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Headless Commerce Architecture",
      "Stripe/PayPal/Crypto Integrations",
      "Dynamic Pricing Algorithms",
      "AR Product Previews & 3D Models",
      "Progressive Web App (PWA) Capabilities",
      "Automated Inventory Management"
    ]
  },
  {
    title: "n8n Cognitive Automation",
    icon: BrainCircuit,
    body: "Eliminate manual bottlenecks with n8n. We integrate sophisticated webhook systems and AI-driven automation architectures to connect your platforms, enabling flawless data flow and autonomous decision-making across your entire digital infrastructure.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Custom n8n Node Development",
      "Multi-platform API Syncing",
      "Error Handling & Retry Logic",
      "Automated Reporting & Analytics",
      "CRM/ERP System Integrations",
      "Self-healing Workflow Architecture"
    ]
  },
  {
    title: "RAG Systems & Custom LLMs",
    icon: Network,
    body: "Unlock the power of your proprietary data. We build Retrieval-Augmented Generation (RAG) systems that allow AI models to securely query your internal databases, providing accurate, context-aware answers without hallucinations.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Vector Databases (Pinecone, Weaviate)",
      "LangChain & LlamaIndex Integration",
      "Fine-tuning Open-source Models",
      "Enterprise Data Security & Privacy",
      "Context-aware AI Chatbots",
      "Semantic Search Implementation"
    ]
  },
  {
    title: "Enterprise Zoho Architecture",
    icon: Briefcase,
    body: "As certified Zoho Creator Partners, we engineer bespoke ERP systems and custom enterprise applications. We bridge the gap between off-the-shelf software and your unique business logic with advanced Deluge scripting and seamless ecosystem integrations.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Custom Zoho Creator Apps",
      "Advanced Deluge Scripting",
      "Third-party API Integrations",
      "Legacy System Migration",
      "Automated Business Workflows",
      "Role-based Access Control"
    ]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    body: "We design resilient, highly available cloud architectures that scale autonomously. Our DevOps practices ensure continuous integration, automated deployments, and zero-downtime updates, keeping your digital assets secure and performant.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "AWS & Google Cloud Architecture",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipeline Automation",
      "Serverless Computing",
      "Infrastructure as Code (IaC)",
      "24/7 Monitoring & Alerting"
    ]
  },
  {
    title: "API Development & Microservices",
    icon: Code2,
    body: "We build robust, secure, and scalable RESTful and GraphQL APIs that serve as the backbone of your digital ecosystem. Our microservices architecture ensures modularity, allowing independent scaling and rapid feature deployment.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "RESTful & GraphQL API Design",
      "Microservices Architecture",
      "API Gateway Implementation",
      "Rate Limiting & Security",
      "Webhook Infrastructure",
      "Comprehensive API Documentation"
    ]
  }
];

const ServiceSection = ({ service, index }: { service: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
    >
      <div className="flex-1 space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] glow-border transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:bg-primary/20 group cursor-pointer"
        >
          <service.icon className="w-10 h-10 text-primary animate-pulse-glow group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-500" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-display font-bold leading-tight"
        >
          {service.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-white/60 leading-relaxed"
        >
          {service.body}
        </motion.p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-4">
                <h4 className="text-lg font-bold text-primary">Key Capabilities:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature: string, idx: number) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2 text-white/70"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-8 py-4 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 rounded-full text-primary font-bold transition-all duration-300 flex items-center gap-3 group"
        >
          {isExpanded ? 'Show Less' : 'Explore Solution'} 
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
        </motion.button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex-1 w-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur-2xl -z-10 animate-pulse-glow" />
        <TiltCard className="p-2 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden">
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </TiltCard>
      </motion.div>
    </motion.div>
  );
};

const ServiceSkeleton = ({ index }: { index: number }) => {
  return (
    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center w-full`}>
      <div className="flex-1 space-y-8 w-full">
        {/* Icon Skeleton */}
        <div className="w-20 h-20 bg-white/5 rounded-3xl animate-pulse" />
        
        {/* Title Skeleton */}
        <div className="h-12 md:h-16 bg-white/5 rounded-xl w-3/4 animate-pulse" />
        
        {/* Body Skeleton */}
        <div className="space-y-3">
          <div className="h-5 bg-white/5 rounded w-full animate-pulse" />
          <div className="h-5 bg-white/5 rounded w-5/6 animate-pulse" />
          <div className="h-5 bg-white/5 rounded w-4/6 animate-pulse" />
        </div>

        {/* Button Skeleton */}
        <div className="w-40 h-14 bg-white/5 rounded-full animate-pulse" />
      </div>
      
      {/* Image Skeleton */}
      <div className="flex-1 w-full">
        <div className="p-2 rounded-[2.5rem] bg-white/5 border border-white/10">
          <div className="w-full aspect-[4/3] bg-white/5 rounded-[2rem] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<typeof services>([]);

  useSEO({
    title: 'Services',
    description: 'Explore our enterprise-grade services including AI-powered web apps, mobile ecosystems, e-commerce, n8n automation, and RAG systems.',
    keywords: 'web development, mobile apps, e-commerce, n8n automation, RAG systems, custom LLMs, ECAPPZ services'
  });

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setData(services);
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 blur-[150px] -z-10 animate-pulse-glow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-32 text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <Database className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Enterprise Architecture</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter"
            >
              Solutions Designed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                to Scale.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed font-light"
            >
              Comprehensive, end-to-end development tailored for modern enterprises, infused with cognitive AI capabilities.
            </motion.p>
          </div>

          <div className="space-y-40">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <ServiceSkeleton key={i} index={i} />
              ))
            ) : (
              data.map((service, i) => (
                <ServiceSection key={i} service={service} index={i} />
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
