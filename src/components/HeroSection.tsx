import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Send, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden">
    {/* Background Video */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster=""
      >
        <source src="/cleanmaster.mp4" type="video/mp4" />
      </video>
      {/* Light overlay for readability — keeps video bright and visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-transparent" />
      <div className="absolute inset-0 bg-background/30" />
    </div>

    <div className="container-premium relative z-10 py-32 md:py-40">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-8 border border-primary/15 backdrop-blur-sm"
          >
            <Sparkles size={13} />
            Professional cleaning service
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.05] text-foreground mb-8 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', 'Manrope', system-ui, sans-serif" }}
          >
            Uyingiz va ofisingiz uchun{" "}
            <span className="text-gradient">premium tozalash</span> xizmati
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-[540px]"
          >
            Fasad, mebel, gilam, ofis va uy tozalash xizmatlari. Sifat, tezlik va ishonch — barchasi bir joyda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 gradient-primary text-primary-foreground px-9 py-4.5 rounded-full text-[15px] font-bold transition-all duration-300 shadow-[0_4px_20px_-4px_hsl(214_90%_52%/0.4)] hover:shadow-[0_8px_35px_-4px_hsl(214_90%_52%/0.5)] hover:-translate-y-0.5"
            >
              Xizmat buyurtma qilish
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://t.me/ssba007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-card/80 backdrop-blur-md border border-border text-foreground px-9 py-4.5 rounded-full text-[15px] font-bold hover:border-primary/30 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send size={15} />
              Telegramga yozish
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-8 text-[13px] text-muted-foreground font-medium"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Award size={14} className="text-accent" />
              </span>
              7+ yillik tajriba
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield size={14} className="text-primary" />
              </span>
              Professional uskunalar
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={14} className="text-primary" />
              </span>
              Tez va sifatli xizmat
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
