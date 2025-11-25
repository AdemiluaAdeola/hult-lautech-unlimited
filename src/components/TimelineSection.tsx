import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const timelineEvents = [
  {
    date: "January 15, 2025",
    title: "Registration Opens",
    description: "Team registration opens for the On-Campus Challenge. Form your team and prepare your ideas.",
    icon: "📝",
  },
  {
    date: "February 5, 2025",
    title: "Orientation & Workshop",
    description: "Mandatory orientation session covering competition rules, theme explanation, and ideation workshops.",
    icon: "🎓",
  },
  {
    date: "February 28, 2025",
    title: "Submission Deadline",
    description: "Teams submit their pitch decks and executive summaries for initial review.",
    icon: "📤",
  },
  {
    date: "March 10, 2025",
    title: "Semi-Finals",
    description: "Top 10 teams present their ideas to judges. Best 5 teams advance to finals.",
    icon: "🎯",
  },
  {
    date: "March 20, 2025",
    title: "Grand Finale",
    description: "Final 5 teams pitch to expert judges. Winners announced and advance to regional competition.",
    icon: "🏆",
  },
  {
    date: "April 2025",
    title: "Regional Competition",
    description: "Campus winners compete at the regional level for a chance at the global finals.",
    icon: "🌍",
  },
];

export const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Event Schedule</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Competition Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow the journey from registration to the global stage. Mark your calendar
            and don't miss any important dates.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-lg z-10 hidden sm:flex">
                  <span className="text-2xl">{event.icon}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="gradient-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 group">
                    <div className="flex items-start space-x-4 sm:hidden mb-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md flex-shrink-0">
                        <span className="text-xl">{event.icon}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-primary mb-3">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{event.date}</span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="gradient-primary rounded-2xl p-8 text-white text-center shadow-xl">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Event Location</h3>
            <p className="text-lg text-white/90">
              Ladoke Akintola University of Technology (LAUTECH)
              <br />
              Ogbomoso, Oyo State, Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
