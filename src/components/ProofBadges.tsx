import { motion } from "framer-motion";

const ProofBadges = () => {
  const badges = [
    "CreatorHub",
    "FilmTech",
    "SoloStudio",
    "ContentFlow",
    "VideoForge",
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by creators & solo filmmakers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg md:text-xl font-semibold"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofBadges;
