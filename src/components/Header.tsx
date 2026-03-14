import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/master_clean_logo.png";

const navItems = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Natijalar", href: "#results" },
  { label: "Nega biz", href: "#why-us" },
  { label: "Aloqa", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header shadow-[var(--shadow-header)]" : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between h-[72px]">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src={logo} alt="Clean Master" className="h-9 w-9 rounded-xl object-cover" />
          <span className="text-[17px] font-extrabold text-foreground tracking-tight">
            Master <span className="text-primary">Clean</span>
            <span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-muted/60 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+998335881111"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={14} />
            +998 33 588 11 11
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-[13px] font-bold hover:shadow-[0_6px_20px_-4px_hsl(214_90%_52%/0.35)] transition-all duration-300"
          >
            Buyurtma berish
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-1"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-header border-t border-border">
          <div className="container-premium py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/60 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+998335881111"
              className="flex items-center gap-2 text-sm font-semibold text-primary py-3 px-4"
            >
              <Phone size={16} />
              +998 33 588 11 11
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold text-center mt-3"
            >
              Buyurtma berish
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
