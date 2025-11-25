import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";

interface CTASectionProps {
  onRegisterClick: () => void;
}

export const CTASection = ({ onRegisterClick }: CTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bS00IDB2NGg0di00aC00em0tNCAwdjRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bS00IDB2NGg0di00aC00em0tNCAwdjRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

            {/* Content */}
            <div className="relative p-12 sm:p-16 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
              >
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-medium">Ready to Make an Impact?</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                Ready to Compete in UNLIMITED?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Join hundreds of students competing for a $1M prize. Transform your ideas
                into reality and create lasting social impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  onClick={onRegisterClick}
                  variant="hero-outline"
                  size="xl"
                  className="group"
                >
                  Register Your Team Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
              >
                <div>
                  <div className="text-4xl font-bold mb-2">$1M</div>
                  <div className="text-sm text-white/70">Prize Pool</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-sm text-white/70">Students Worldwide</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm text-white/70">Countries</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
