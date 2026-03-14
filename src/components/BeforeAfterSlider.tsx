import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
  serviceLabel?: string;
  resultLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImg,
  afterImg,
  beforeLabel = "Oldin",
  afterLabel = "Keyin",
  serviceLabel,
  resultLabel,
  className = "",
}: BeforeAfterSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-col-resize overflow-hidden rounded-[1.5rem] ${className}`}
      style={{ boxShadow: "var(--shadow-elevated)" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* BOTTOM layer = AFTER / clean image (fully visible) */}
      <img
        src={afterImg}
        alt="After cleaning"
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* TOP layer = BEFORE / dirty image (clipped by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before cleaning"
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100vw', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-5 left-5 z-10">
        <span className="bg-destructive text-primary-foreground text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-5 right-5 z-10">
        <span className="bg-accent text-accent-foreground text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          {afterLabel}
        </span>
      </div>

      {/* Bottom gradient and text */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent p-6 md:p-8 z-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            {serviceLabel && (
              <p className="text-primary-foreground/60 text-sm font-medium mb-1">{serviceLabel}</p>
            )}
            {resultLabel && (
              <h3
                className="text-xl md:text-2xl font-extrabold text-primary-foreground tracking-tight"
                style={{ fontFamily: "'Space Grotesk', 'Manrope', system-ui, sans-serif" }}
              >
                {resultLabel}
              </h3>
            )}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary-foreground/25 transition-colors border border-primary-foreground/20"
          >
            Buyurtma berish
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="w-[2px] h-full bg-primary-foreground/80 shadow-lg" />
        <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/95 backdrop-blur-md border-2 border-primary shadow-[0_2px_12px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-col-resize">
          <div className="flex gap-[3px]">
            <div className="w-[2px] h-4 bg-primary rounded-full" />
            <div className="w-[2px] h-4 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
