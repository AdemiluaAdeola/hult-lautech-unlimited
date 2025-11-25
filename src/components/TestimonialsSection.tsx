import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Participating in Hult Prize was transformative. It taught me that business ideas can create real social impact while being sustainable.",
    name: "Aisha Mohammed",
    role: "2024 Campus Winner",
    color: "from-pink-500 to-purple-600",
  },
  {
    quote: "The mentorship, workshops, and networking opportunities opened doors I never imagined. Highly recommend every student to participate!",
    name: "Tolu Adeleke",
    role: "2024 Semi-Finalist",
    color: "from-purple-500 to-indigo-600",
  },
  {
    quote: "Hult Prize pushed us to think beyond classroom theories. We learned to solve real problems with innovative, scalable solutions.",
    name: "Chiamaka Eze",
    role: "2023 Campus Winner",
    color: "from-indigo-500 to-blue-600",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Student Voices</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from past participants about their Hult Prize journey and how
            it transformed their entrepreneurial mindset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 flex flex-col">
                {/* Quote Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
