import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera } from "lucide-react";

// Placeholder images - in production, these would be real event photos
const galleryImages = [
  { id: 1, alt: "Team Collaboration", color: "from-pink-400 to-purple-600" },
  { id: 2, alt: "Pitch Presentation", color: "from-purple-500 to-indigo-600" },
  { id: 3, alt: "Workshop Session", color: "from-blue-500 to-cyan-600" },
  { id: 4, alt: "Judges Panel", color: "from-purple-600 to-pink-500" },
  { id: 5, alt: "Winners Celebration", color: "from-pink-500 to-rose-600" },
  { id: 6, alt: "Team Discussion", color: "from-indigo-500 to-purple-600" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Past Events</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Event Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the excitement, innovation, and energy from previous Hult Prize
            LAUTECH competitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
                <div className="text-white text-center p-4">
                  <Camera className="w-10 h-10 mx-auto mb-2" />
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>

              {/* Photo Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            More photos will be added after the 2025 competition
          </p>
        </motion.div>
      </div>
    </section>
  );
};
