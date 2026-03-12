import { Award, Users, CheckCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Award, number: "7+", label: "Yil tajriba", color: "text-primary" },
  { icon: Users, number: "1000+", label: "Mamnun mijoz", color: "text-primary" },
  { icon: CheckCircle, number: "100%", label: "Sifatga e'tibor", color: "text-accent" },
  { icon: Phone, number: "24/7", label: "Aloqa", color: "text-primary" },
];

const TrustStats = () => (
  <section className="relative -mt-12 z-20 pb-8">
    <div className="container-premium">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <div className="card-premium text-center py-8">
              <stat.icon size={28} className={`mx-auto mb-3 ${stat.color}`} />
              <p className="text-3xl font-extrabold text-foreground mb-1">{stat.number}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStats;
