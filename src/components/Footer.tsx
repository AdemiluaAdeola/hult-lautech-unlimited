import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Hult Prize", href: "https://www.hultprize.org" },
    { label: "Competition Rules", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Past Winners", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">
                  Hult Prize
                </div>
                <div className="text-xs text-white/70">LAUTECH Chapter</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Empowering students to create sustainable social enterprises
              and make a global impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>LAUTECH, Ogbomoso, Oyo State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hultprize@lautech.edu.ng</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+234 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/70 mt-4">
              Stay updated with the latest news and announcements
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Hult Prize LAUTECH. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
