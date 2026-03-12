import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Send, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="hero" className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    {/* Decorative elements */}
    <div className="glow-blob w-[500px] h-[500px] bg-primary top-0 -left-64" />
    <div className="glow-blob w-[400px] h-[400px] bg-accent bottom-0 right-0" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(214_90%_52%/0.06),transparent)]" />

    <div className="container-premium relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/8 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 border border-primary/10">
            <Sparkles size={13} />
            Professional cleaning service
          </span>

          <h1 className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-extrabold leading-[1.08] text-foreground mb-7 tracking-tight" style={{ fontFamily: "'Space Grotesk', 'Manrope', system-ui, sans-serif" }}>
            Uyingiz va ofisingiz uchun{" "}
            <span className="text-gradient">premium tozalash</span> xizmati
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-[520px]">
            Fasad, mebel, gilam, ofis va uy tozalash xizmatlari. Sifat, tezlik va ishonch — barchasi bir joyda.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 gradient-primary text-primary-foreground px-8 py-4 rounded-full text-[15px] font-bold hover:shadow-[0_8px_30px_-6px_hsl(214_90%_52%/0.4)] transition-all duration-300"
            >
              Xizmat buyurtma qilish
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://t.me/ssba007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-card border border-border text-foreground px-8 py-4 rounded-full text-[15px] font-bold hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <Send size={15} />
              Telegramga yozish
            </a>
          </div>

          <div className="flex flex-wrap gap-8 text-[13px] text-muted-foreground font-medium">
            <span className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                <Award size={14} className="text-accent" />
              </span>
              7+ yillik tajriba
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield size={14} className="text-primary" />
              </span>
              Professional uskunalar
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={14} className="text-primary" />
              </span>
              Tez va sifatli xizmat
            </span>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden" style={{ boxShadow: 'var(--shadow-elevated)' }}>
            <img
              src={heroImg}
              alt="Professional cleaning team at work"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          </div>

          {/* Floating badge top-right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 md:top-6 md:-right-6 bg-card/95 backdrop-blur-sm border border-border rounded-2xl px-5 py-3.5 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Award size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-foreground leading-none">7+ yil</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">tajriba</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge bottom-left */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 -left-3 md:bottom-8 md:-left-6 bg-card/95 backdrop-blur-sm border border-border rounded-2xl px-5 py-3.5 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Shield size={18} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-foreground leading-none">100%</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">sifat kafolati</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
