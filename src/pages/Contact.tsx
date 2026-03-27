import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  Terminal,
  Cpu,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import PageTransition from "@/src/components/PageTransition";
import { useSEO } from "@/src/hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact Us",
    description:
      "Get in touch with ECAPPZ to architect your next digital ecosystem. Our engineers are standing by to discuss your custom web, mobile, AI, or Zoho requirements.",
    keywords:
      "contact ECAPPZ, software development consultation, hire developers, AI consultation, Zoho consultation, Chennai software company",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    architecture: "",
    specifications: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.architecture)
      newErrors.architecture = "Please select an architecture";
    if (!formData.specifications.trim())
      newErrors.specifications = "Project specifications are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        architecture: "",
        specifications: "",
      });
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                Initialize Connection
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold mb-8 leading-[0.85] tracking-tighter"
            >
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x inline-block pb-4">
                Initiate?
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed font-light"
            >
              Let's architect your next digital ecosystem. Our engineers are
              standing by.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-8 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse-glow" />

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20 group-hover:border-primary glow-border">
                    <MapPin className="text-primary group-hover:text-background transition-colors animate-pulse-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Headquarters</h4>
                    <p className="text-white/60 leading-relaxed">
                      28, G2, MpVrindha, Thirumalai Ngr, <br />
                      Kundrathur, Chennai, Tamil Nadu, <br />
                      India, 600069
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20 group-hover:border-primary glow-border">
                    <Phone className="text-primary group-hover:text-background transition-colors animate-pulse-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Direct Line</h4>
                    <p className="text-white/60 text-lg">+91 93440 81058</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-primary/20 group-hover:border-primary glow-border">
                    <Mail className="text-primary group-hover:text-background transition-colors animate-pulse-glow" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Electronic Mail</h4>
                    <p className="text-white/60 text-lg">sales@ecappz.in</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map-tech/800/400')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-primary/30 rounded-full animate-ping" />
                    <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.5)] glow-border">
                      <Cpu className="w-6 h-6 text-primary animate-pulse-glow" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 glass px-6 py-3 rounded-full text-sm font-bold border border-primary/30 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  Chennai Data Center
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-10 md:p-14 rounded-[3rem] border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse-glow" />

              <form
                onSubmit={handleSubmit}
                className="space-y-10 relative z-10"
              >
                <div className="space-y-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      aria-label="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name *"
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors peer text-lg placeholder:text-white/30",
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/20 focus:border-primary",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 peer-focus:w-full group-hover:w-full",
                        errors.name ? "bg-red-500" : "bg-primary",
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 absolute -bottom-6">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      aria-label="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors peer text-lg placeholder:text-white/30",
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/20 focus:border-primary",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 peer-focus:w-full group-hover:w-full",
                        errors.email ? "bg-red-500" : "bg-primary",
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 absolute -bottom-6">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      aria-label="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone *"
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-primary transition-colors peer text-lg placeholder:text-white/30"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full group-hover:w-full" />
                  </div>

                  <div className="relative group">
                    <select
                      name="architecture"
                      aria-label="Architecture Type"
                      value={formData.architecture}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors appearance-none text-lg",
                        !formData.architecture
                          ? "text-white/30"
                          : "text-white/70",
                        errors.architecture
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/20 focus:border-primary",
                      )}
                    >
                      <option value="" disabled className="bg-background">
                        Select Architecture Required *
                      </option>
                      <option value="mobile" className="bg-background">
                        Autonomous Mobile Ecosystem
                      </option>
                      <option value="web" className="bg-background">
                        AI-Powered Web Application
                      </option>
                      <option value="zoho" className="bg-background">
                        Bespoke Zoho Architecture
                      </option>
                      <option value="ai" className="bg-background">
                        Cognitive AI Integration
                      </option>
                      <option value="other" className="bg-background">
                        Other Technical Requirement
                      </option>
                    </select>
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 peer-focus:w-full group-hover:w-full",
                        errors.architecture ? "bg-red-500" : "bg-primary",
                      )}
                    />
                    {errors.architecture && (
                      <p className="text-red-500 text-sm mt-1 absolute -bottom-6">
                        {errors.architecture}
                      </p>
                    )}
                  </div>

                  <div className="relative group">
                    <textarea
                      name="specifications"
                      aria-label="Project Specifications"
                      value={formData.specifications}
                      onChange={handleInputChange}
                      placeholder="Project Specifications & Parameters *"
                      rows={5}
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none transition-colors peer resize-none text-lg placeholder:text-white/30",
                        errors.specifications
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/20 focus:border-primary",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 peer-focus:w-full group-hover:w-full",
                        errors.specifications ? "bg-red-500" : "bg-primary",
                      )}
                    />
                    {errors.specifications && (
                      <p className="text-red-500 text-sm mt-1 absolute -bottom-6">
                        {errors.specifications}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={cn(
                    "w-full py-6 rounded-full font-display font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300",
                    status === "idle"
                      ? "bg-primary text-background hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02]"
                      : "bg-white/10 text-white/50 cursor-not-allowed",
                  )}
                >
                  {status === "idle" && (
                    <>
                      Execute Transmission <Send className="w-6 h-6" />
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      Processing Data...{" "}
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </>
                  )}
                  {status === "success" && (
                    <>
                      Transmission Successful{" "}
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
