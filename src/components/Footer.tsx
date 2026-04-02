import { Link } from "react-router-dom";
import { Send, Instagram, Phone } from "lucide-react";
import logo from "@/assets/master_clean_logo.png";

const mainLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Xizmatlar", href: "/#services" },
  { label: "Natijalar", href: "/#results" },
  { label: "Nega biz", href: "/#why-us" },
  { label: "Aloqa", href: "/#contact" },
];

const serviceLinks = [
  { label: "Uy tozalash", href: "/uy-tozalash-toshkent" },
  { label: "Ofis tozalash", href: "/ofis-tozalash-toshkent" },
  { label: "Gilam tozalash", href: "/gilam-tozalash-toshkent" },
  { label: "Divan tozalash", href: "/divan-tozalash-toshkent" },
  { label: "Fasad tozalash", href: "/fasad-tozalash-toshkent" },
  { label: "Kafel / bruschatka", href: "/kafel-bruschatka-tozalash-toshkent" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-20 pb-10 px-4">
    <div className="container-premium">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <img
              src={logo}
              alt="Clean Master logotipi"
              className="h-10 w-10 rounded-xl object-cover brightness-110"
            />
            <span className="text-lg font-extrabold tracking-tight">
              Master Clean<span className="text-accent">.</span>
            </span>
          </div>

          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Clean Master Toshkentda uy tozalash, ofis tozalash, gilam tozalash,
            divan tozalash, fasad tozalash hamda kafel va bruschatka tozalash
            xizmatlarini taklif qiladi.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            Sahifalar
          </h4>

          <nav className="flex flex-col gap-2.5">
            {mainLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            Xizmatlar
          </h4>

          <nav className="flex flex-col gap-2.5">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            Aloqa
          </h4>

          <div className="flex gap-3 mb-5">
            {[
              { href: "tel:+998335881111", icon: Phone, label: "Telefon" },
              { href: "https://t.me/ssba007", icon: Send, label: "Telegram" },
              {
                href: "https://www.instagram.com/master_clean.uzb/",
                icon: Instagram,
                label: "Instagram",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl bg-primary-foreground/8 flex items-center justify-center hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>

          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Telefon:{" "}
            <a href="tel:+998335881111" className="hover:text-primary-foreground">
              +998 33 588 11 11
            </a>
          </p>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Hudud: Toshkent shahri
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8 pt-8 text-center">
        <p className="text-xs text-primary-foreground/30 tracking-wide">
          © {new Date().getFullYear()} Master Clean. Barcha huquqlar himoyalangan.
        </p>

        <p className="text-xs text-primary-foreground/40 mt-2">
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