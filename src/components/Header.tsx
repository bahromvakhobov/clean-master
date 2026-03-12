import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-[var(--shadow-header)]" : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Clean Master" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-lg font-bold text-foreground">
            Clean <span className="text-primary">Master</span>
            <span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://t.me/ssba007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Buyurtma berish
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-header border-t border-border">
          <div className="container-premium py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/ssba007"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
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
