import { motion, useAnimationFrame, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";

const ProofBadges = () => {
  const targetGroups = [
    "Knowledge Creators",
    "Coaches",
    "Founders",
    "Course Creators",
    "TikTok Creators",
    "Reels Creators",
    "YouTube Shorts",
    "Realtors",
    "Fitness Trainers",
    "Service Pros",
    "Solo Entrepreneurs",
    "Online Educators",
  ];

  // Duplicate the array multiple times for seamless infinite scroll
  const duplicatedGroups = [...targetGroups, ...targetGroups, ...targetGroups];

  return (
    <section className="py-12 md:py-16 border-y border-border overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Built for
          </p>
          <div className="relative w-full">
            {/* Gradient fade overlays for professional edge effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden">
              <InfiniteScroll>
                <div className="flex whitespace-nowrap">
                  {duplicatedGroups.map((group, index) => (
                    <span
                      key={`${group}-${index}`}
                      className="mx-6 md:mx-10 text-muted-foreground text-lg md:text-xl font-semibold inline-flex items-center transition-colors duration-300 hover:text-foreground"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Professional infinite scroll component using Framer Motion
function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const translateX = useMotionTemplate`${x}px`;

  useAnimationFrame((t, delta) => {
    if (!scrollRef.current) return;
    
    // Get the width of one set of items (we duplicated 3 times, so divide by 3)
    const scrollWidth = scrollRef.current.scrollWidth / 3;
    
    // Smooth, continuous scroll animation
    // Speed: 0.12 pixels per millisecond (creates smooth professional scroll)
    let currentX = x.get();
    currentX -= delta * 0.12;
    
    // Seamless loop: when we've scrolled one full set, reset to maintain continuity
    if (currentX <= -scrollWidth) {
      currentX += scrollWidth;
    }
    
    x.set(currentX);
  });

  return (
    <motion.div
      ref={scrollRef}
      style={{ x: translateX }}
      className="flex will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default ProofBadges;
