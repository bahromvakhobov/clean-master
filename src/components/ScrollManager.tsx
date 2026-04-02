import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 96;

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          return;
        }

        const top =
          el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

        window.scrollTo({
          top: Math.max(0, top),
          left: 0,
          behavior: "smooth",
        });
      };

      setTimeout(scrollToHash, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}