import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bS00IDB2NGg0di00aC00em0tNCAwdjRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bS00IDB2NGg0di00aC00em0tNCAwdjRoNHYtNGgtNHptLTQgMHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6bTAgNHY0aDR2LTRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">On-Campus Challenge 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hult Prize
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                LAUTECH
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                UNLIMITED
              </h2>
              <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                Reimagine the future with innovative solutions that break boundaries. 
                Join the world's largest student competition for social good and compete 
                for a chance at the $1M global prize.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onRegisterClick}
                variant="hero-outline"
                size="xl"
                className="group"
              >
                Register Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToTimeline}
                variant="ghost"
                size="xl"
                className="text-white hover:bg-white/10 border border-white/30"
              >
                View Timeline
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-white/80" />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-white/70">Students Worldwide</div>
                </div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 text-white/80">🏆</div>
                <div>
                  <div className="text-2xl font-bold">$1M</div>
                  <div className="text-xs text-white/70">Global Prize</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              >
                <img
                  src={heroIllustration}
                  alt="Innovation Illustration"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">💡</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
