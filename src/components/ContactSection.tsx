import { Phone, Send, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Ism: ${formData.name}%0ATelefon: ${formData.phone}%0AXizmat: ${formData.service}%0AXabar: ${formData.message}`;
    window.open(`https://t.me/ssba007?text=${text}`, "_blank");
  };

  const inputClass = "w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all duration-300 text-[15px]";

  return (
    <section id="contact" className="section-padding">
      <div className="container-premium">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="section-label">Aloqa</span>
            <h2 className="section-heading">Biz bilan bog'laning</h2>
            <p className="section-subheading">Savollaringiz bormi? Biz doimo aloqadamiz</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact cards */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-4">
              <a href="tel:+998335881111" className="card-premium flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Telefon</p>
                  <p className="text-muted-foreground text-sm">+998 33 588 11 11</p>
                </div>
              </a>

              <a href="https://t.me/ssba007" target="_blank" rel="noopener noreferrer" className="card-premium flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Send size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Telegram</p>
                  <p className="text-muted-foreground text-sm">@ssba007</p>
                </div>
              </a>

              <a href="https://www.instagram.com/master_clean.uzb/" target="_blank" rel="noopener noreferrer" className="card-premium flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(330,70%,50%)] to-[hsl(30,80%,55%)] flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Instagram</p>
                  <p className="text-muted-foreground text-sm">@master_clean.uzb</p>
                </div>
              </a>

              <div className="pt-4">
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  Ish vaqti: Dushanba – Shanba, 09:00 – 20:00
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.12} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-foreground mb-2 block uppercase tracking-wider">Ism</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Ismingiz"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-foreground mb-2 block uppercase tracking-wider">Telefon</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+998 90 123 45 67"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-foreground mb-2 block uppercase tracking-wider">Xizmat turi</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Tanlang...</option>
                  <option value="Uy tozalash">Uy tozalash</option>
                  <option value="Ofis tozalash">Ofis tozalash</option>
                  <option value="Fasad tozalash">Fasad tozalash</option>
                  <option value="Divan tozalash">Divan tozalash</option>
                  <option value="Gilam tozalash">Gilam tozalash</option>
                  <option value="Bruschatka / kafel">Bruschatka / kafel</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-foreground mb-2 block uppercase tracking-wider">Xabar</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Xabaringiz..."
                />
              </div>
              <button
                type="submit"
                className="group w-full gradient-primary text-primary-foreground py-4 rounded-xl font-bold hover:shadow-[0_8px_30px_-6px_hsl(214_90%_52%/0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-[15px]"
              >
                Yuborish
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
