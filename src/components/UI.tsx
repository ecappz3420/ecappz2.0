import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, Variants } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useMagnetic } from '@/src/hooks/use-animations';

export const Typewriter = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timeout);
        }
      }, 50); // Typing speed
    };

    const initialDelay = setTimeout(startTyping, delay * 1000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(timeout);
    };
  }, [text, delay]);

  return (
    <span className="inline-block">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[0.15em] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export const TypewriterText = ({ text, delay = 0, className }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const MagneticButton = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <button
        className={cn(
          "px-8 py-4 rounded-full font-display font-bold text-sm transition-all duration-300 active:scale-95 relative overflow-hidden group",
          variant === 'primary' 
            ? "bg-primary text-background hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-transparent hover:border-white/50" 
            : "border border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/5 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[100%] group-hover:animate-shimmer" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    </motion.div>
  );
};

export const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn("glass rounded-2xl p-8 relative group", className)}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-full h-full", className)} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20 50L50 20L80 50L50 80L20 50Z"
      stroke="currentColor"
      strokeWidth="4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.path
      d="M35 50L50 35L65 50L50 65L35 50Z"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 0.5, 1] }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
    />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
  </svg>
);

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/5 py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-xl font-display font-bold mx-8 text-white/40 uppercase tracking-widest">
              {item}
            </span>
            <span className="w-2 h-2 bg-primary rounded-full" />
          </React.Fragment>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-xl font-display font-bold mx-8 text-white/40 uppercase tracking-widest">
              {item}
            </span>
            <span className="w-2 h-2 bg-primary rounded-full" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
