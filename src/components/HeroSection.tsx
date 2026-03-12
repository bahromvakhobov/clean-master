import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Send } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="hero" className="relative gradient-hero pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    {/* Decorative blobs */}
    <div className="glow-blob w-96 h-96 bg-primary top-10 -left-48" />
    <div className="glow-blob w-72 h-72 bg-accent bottom-10 right-10" />

    <div className="container-premium relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Shield size={14} />
            Professional cleaning service
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-foreground mb-6">
            Uyingiz va ofisingiz uchun{" "}
            <span className="text-gradient">premium tozalash</span> xizmati
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Fasad, mebel, gilam, ofis va uy tozalash xizmatlari. Sifat, tezlik va ishonch — barchasi bir joyda.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Xizmat buyurtma qilish
              <ArrowRight size={18} />
            </a>
            <a
              href="https://t.me/ssba007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:border-primary/40 transition-colors"
            >
              <Send size={16} />
              Telegramga yozish
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Award size={16} className="text-accent" />
              7+ yillik tajriba
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              Professional uskunalar
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              Tez va sifatli xizmat
            </span>
          </div>
        </motion.div>

        {/* Right - Visual Composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Professional cleaning team at work"
              className="w-full h-[400px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Floating badge top-right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Award size={16} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">7+ yil</p>
                <p className="text-[10px] text-muted-foreground">tajriba</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge bottom-left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 md:bottom-6 md:left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Shield size={16} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Professional</p>
                <p className="text-[10px] text-muted-foreground">cleaning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
