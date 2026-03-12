import { Send, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16 px-4">
    <div className="container-premium">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Clean Master" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-lg font-bold">
              Clean Master<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Professional cleaning service for homes, offices and exterior surfaces.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Sahifalar</h4>
          <nav className="flex flex-col gap-2">
            {["Bosh sahifa", "Xizmatlar", "Natijalar", "Nega biz", "Aloqa"].map((l) => (
              <a
                key={l}
                href={`#${l === "Bosh sahifa" ? "hero" : l === "Xizmatlar" ? "services" : l === "Natijalar" ? "results" : l === "Nega biz" ? "why-us" : "contact"}`}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Ijtimoiy tarmoqlar</h4>
          <div className="flex gap-3">
            <a
              href="tel:+998335881111"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone size={18} />
            </a>
            <a
              href="https://t.me/ssba007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Send size={18} />
            </a>
            <a
              href="https://www.instagram.com/master_clean.uzb/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Clean Master. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
