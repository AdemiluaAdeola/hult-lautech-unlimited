import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Linkedin } from "lucide-react";

const judges = [
  {
    name: "Dr. Folake Akinola",
    title: "Social Innovation Expert",
    bio: "15+ years in sustainable development and impact investing across Africa.",
    initials: "FA",
  },
  {
    name: "Eng. Tunde Bakare",
    title: "Tech Entrepreneur",
    bio: "Founder of multiple successful startups. Angel investor and mentor.",
    initials: "TB",
  },
  {
    name: "Prof. Amina Hassan",
    title: "Academic & Researcher",
    bio: "Published researcher in social entrepreneurship and innovation management.",
    initials: "AH",
  },
  {
    name: "Mr. Chidi Okafor",
    title: "Business Strategist",
    bio: "Former McKinsey consultant. Expert in scaling social enterprises.",
    initials: "CO",
  },
];

export const JudgesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="judges" ref={ref} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Expert Panel</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Meet Our Judges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your ideas will be evaluated by distinguished experts in entrepreneurship,
            innovation, and social impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="gradient-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 text-center h-full flex flex-col">
                {/* Avatar */}
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                    {judge.initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white border-4 border-card flex items-center justify-center shadow-md">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {judge.name}
                  </h3>
                  <div className="text-sm font-semibold text-primary mb-3">
                    {judge.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {judge.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
