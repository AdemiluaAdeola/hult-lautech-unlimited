import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mail } from "lucide-react";

const organizers = [
  {
    name: "Adewale Johnson",
    role: "Campus Director",
    initials: "AJ",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Blessing Okonkwo",
    role: "Program Coordinator",
    initials: "BO",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Chioma Nwosu",
    role: "Marketing Lead",
    initials: "CN",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Daniel Adeyemi",
    role: "Operations Manager",
    initials: "DA",
    color: "from-purple-600 to-pink-500",
  },
  {
    name: "Esther Okoro",
    role: "Partnerships Lead",
    initials: "EO",
    color: "from-pink-600 to-rose-500",
  },
  {
    name: "Femi Ajayi",
    role: "Technical Coordinator",
    initials: "FA",
    color: "from-blue-500 to-cyan-600",
  },
];

export const OrganizersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="organizers" ref={ref} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Team</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Meet the Organizers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated students working tirelessly to bring you an exceptional
            Hult Prize experience at LAUTECH.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="gradient-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 h-full flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${organizer.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {organizer.initials}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {organizer.name}
                </h3>
                <div className="text-sm font-semibold text-primary mb-4">
                  {organizer.role}
                </div>

                {/* Contact Button */}
                <button className="mt-auto flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
