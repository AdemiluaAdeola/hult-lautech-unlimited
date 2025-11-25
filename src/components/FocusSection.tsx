import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Globe, Lightbulb } from "lucide-react";

export const FocusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Challenge Theme",
      description: "UNLIMITED - Breaking barriers and reimagining possibilities in social entrepreneurship",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Create solutions that address real-world challenges affecting communities worldwide",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Leverage technology, creativity, and entrepreneurial thinking to drive sustainable change",
    },
  ];

  return (
    <section id="focus" ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">2025 Challenge</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            This Year's Focus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The UNLIMITED theme challenges students to think beyond conventional boundaries
            and create transformative solutions for a better future.
          </p>
        </motion.div>

        {/* Main Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 gradient-primary opacity-95"></div>
            <div className="relative p-8 sm:p-12 text-white">
              <div className="text-6xl sm:text-7xl font-black mb-4 font-display">
                UNLIMITED
              </div>
              <p className="text-xl sm:text-2xl leading-relaxed mb-6">
                What does unlimited potential look like? How can we unlock unlimited opportunities
                for underserved communities? This year's challenge invites you to explore solutions
                that remove barriers and create boundless possibilities.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold mb-1">♾️</div>
                  <div className="text-sm text-white/90">Unlimited Potential</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">🌍</div>
                  <div className="text-sm text-white/90">Global Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">🎯</div>
                  <div className="text-sm text-white/90">Real Impact</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="h-full gradient-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border group-hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
