import { Send } from "lucide-react";

const FloatingTelegramButton = () => {
  return (
    <a
      href="https://t.me/ssba007"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-14
      h-14
      flex
      items-center
      justify-center
      rounded-full
      bg-[#229ED9]
      text-white
      shadow-lg
      hover:scale-110
      transition-all
      duration-300
      animate-telegram-pulse
      "
    >
      <Send size={24} />
    </a>
  );
};

export default FloatingTelegramButton;