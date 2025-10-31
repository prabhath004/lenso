import { motion } from "framer-motion";

const ProofBadges = () => {
  const targetGroups = [
    "YouTubers",
    "TikTok Creators",
    "Podcasters",
    "Coaches",
    "Filmmakers",
    "Solo Entrepreneurs",
    "Course Creators",
    "Reels Creators",
    "Streamers",
    "Short-Form Creators",
    "Online Educators",
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Built for
          </p>
          <div className="relative w-full">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...targetGroups, ...targetGroups].map((group, index) => (
                <span
                  key={`${group}-${index}`}
                  className="mx-4 md:mx-8 text-muted-foreground text-lg md:text-xl font-semibold inline-flex items-center"
                >
                  {group}
                  <span className="mx-4 md:mx-8 text-muted-foreground/40">•</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofBadges;
