import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from '@/src/components/UI';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/src/components/PageTransition';
import { useSEO } from '@/src/hooks/useSEO';

const blogPosts = [
  {
    title: "Mastering RAG Systems for Enterprise AI",
    excerpt: "Discover how Retrieval-Augmented Generation (RAG) is transforming the way businesses interact with their proprietary data, eliminating hallucinations and ensuring precise AI responses.",
    date: "March 15, 2026",
    author: "ECAPPZ Engineering",
    category: "AI Architecture",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Automating Workflows with n8n: A Comprehensive Guide",
    excerpt: "Learn how to connect disparate SaaS tools and databases into a unified, autonomous engine using n8n. We explore advanced webhook integrations and custom node development.",
    date: "March 02, 2026",
    author: "Automation Team",
    category: "Automation",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "The Future of Custom Web Applications in 2026",
    excerpt: "From WebAssembly to edge computing, explore the cutting-edge technologies that are shaping the next generation of high-performance, secure web applications.",
    date: "February 18, 2026",
    author: "Frontend Architecture",
    category: "Web Development",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Zoho Creator Mastery: Beyond the Templates",
    excerpt: "Why settle for off-the-shelf? Dive deep into advanced Deluge scripting and API integrations to build bespoke Zoho ecosystems that match your exact business logic.",
    date: "February 05, 2026",
    author: "Zoho Specialists",
    category: "Enterprise Systems",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Blog = () => {
  useSEO({
    title: 'Engineering Blog & Insights',
    description: 'Deep dives into AI architecture, n8n automation, custom web development, and enterprise software scaling by the ECAPPZ engineering team.',
    keywords: 'ECAPPZ blog, engineering insights, AI architecture, n8n automation, web development, Zoho Creator, tech blog'
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Insights & Engineering</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter"
            >
              The ECAPPZ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                Engineering Blog.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Deep dives into AI architecture, n8n automation, custom web development, and enterprise software scaling.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <TiltCard className="h-full bg-white/5 border-white/10 hover:border-primary/30 group relative overflow-hidden flex flex-col p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/60 leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link to="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-auto w-fit">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </div>
          
          {/* SEO Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse-glow" />
            <h2 className="text-3xl font-display font-bold mb-6">Why Follow Our Engineering Insights?</h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                At ECAPPZ, we believe in building in public and sharing our technical expertise. Our blog serves as a comprehensive resource for CTOs, developers, and business leaders looking to leverage the latest in <strong>custom web applications</strong>, <strong>AI integration</strong>, and <strong>cognitive automation</strong>.
              </p>
              <p>
                Whether you are looking to understand the intricacies of <strong>Retrieval-Augmented Generation (RAG)</strong> for your proprietary data, exploring the limitless possibilities of <strong>n8n workflows</strong>, or seeking advanced strategies for <strong>Zoho architecture</strong>, our engineering team provides actionable, deep-dive content designed to elevate your digital transformation journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
