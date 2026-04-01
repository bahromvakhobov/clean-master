import { Send, Instagram, Phone } from "lucide-react";
import logo from "@/assets/master_clean_logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-20 pb-10 px-4">
    <div className="container-premium">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <img src={logo} alt="Clean Master" className="h-10 w-10 rounded-xl object-cover brightness-110" />
            <span className="text-lg font-extrabold tracking-tight">
              Master Clean<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
            Uylar, ofislar va tashqi yuzalar uchun professional tozalash xizmati.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Sahifalar</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { l: "Bosh sahifa", h: "#hero" },
              { l: "Xizmatlar", h: "#services" },
              { l: "Natijalar", h: "#results" },
              { l: "Nega biz", h: "#why-us" },
              { l: "Aloqa", h: "#contact" },
            ].map((item) => (
              <a
                key={item.l}
                href={item.h}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
              >
                {item.l}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Ijtimoiy tarmoqlar</h4>
          <div className="flex gap-3">
            {[
              { href: "tel:+998335881111", icon: Phone },
              { href: "https://t.me/ssba007", icon: Send },
              { href: "https://www.instagram.com/master_clean.uzb/", icon: Instagram },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl bg-primary-foreground/8 flex items-center justify-center hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8 pt-8 text-center">
        <p className="text-xs text-primary-foreground/30 tracking-wide">
          © {new Date().getFullYear()} Master Clean. Barcha huquqlar himoyalangan.
        </p>
        <p className="text-xs text-primary-foreground/40">
          Websayt{" "}
          <a
            href="https://www.vakhobov.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            Bahrom Vaxobov
          </a>{" "}
          tomonidan yaratilgan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
