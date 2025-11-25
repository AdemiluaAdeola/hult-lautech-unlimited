import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "This Year's Focus", href: "#focus" },
  { label: "Timeline", href: "#timeline" },
  { label: "Judges", href: "#judges" },
  { label: "Gallery", href: "#gallery" },
  { label: "Organizers", href: "#organizers" },
];

interface NavigationProps {
  onRegisterClick: () => void;
}

export const Navigation = ({ onRegisterClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-lg leading-tight">
                  Hult Prize
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  LAUTECH
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : isScrolled
                      ? "text-foreground hover:text-primary hover:bg-muted"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <Button
                onClick={onRegisterClick}
                variant="hero"
                size="lg"
              >
                Register
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b shadow-lg lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={onRegisterClick}
                variant="hero"
                size="lg"
                className="w-full"
              >
                Register
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
