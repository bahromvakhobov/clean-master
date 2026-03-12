import { Phone, Send, Instagram } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Ism: ${formData.name}%0ATelefon: ${formData.phone}%0AXizmat: ${formData.service}%0AXabar: ${formData.message}`;
    window.open(`https://t.me/ssba007?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-premium">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Aloqa</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
              Biz bilan bog'laning
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <AnimatedSection>
            <div className="space-y-4">
              <a
                href="tel:+998335881111"
                className="card-premium flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Telefon</p>
                  <p className="text-muted-foreground">+998 33 588 11 11</p>
                </div>
              </a>

              <a
                href="https://t.me/ssba007"
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(200,80%,50%)] flex items-center justify-center flex-shrink-0">
                  <Send size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Telegram</p>
                  <p className="text-muted-foreground">@ssba007</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/master_clean.uzb/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(330,80%,55%)] to-[hsl(30,90%,55%)] flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Instagram</p>
                  <p className="text-muted-foreground">@master_clean.uzb</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="card-premium space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Ism</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Ismingiz"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Telefon raqam</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="+998 90 123 45 67"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Xizmat turi</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
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
                <label className="text-sm font-medium text-foreground mb-1.5 block">Xabar</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Xabaringiz..."
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Yuborish
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
