import { Award, Users, CheckCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Award, number: "7+", label: "Yil tajriba", accent: false },
  { icon: Users, number: "1000+", label: "Mamnun mijoz", accent: false },
  { icon: CheckCircle, number: "100%", label: "Sifatga e'tibor", accent: true },
  { icon: Phone, number: "24/7", label: "Aloqa", accent: false },
];

const TrustStats = () => (
  <section className="relative -mt-14 z-20 pb-12">
    <div className="container-premium">
      <div className="bg-card rounded-3xl border border-border p-3 md:p-4" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08}>
              <div className={`text-center py-8 md:py-10 ${i < stats.length - 1 ? 'md:border-r md:border-border' : ''}`}>
                <div className={`w-12 h-12 rounded-xl ${stat.accent ? 'bg-accent/10' : 'bg-primary/8'} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={22} className={stat.accent ? 'text-accent' : 'text-primary'} />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 tracking-tight" style={{ fontFamily: "'Space Grotesk', 'Manrope', system-ui, sans-serif" }}>
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustStats;
