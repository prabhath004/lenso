import { motion } from "framer-motion";

// Founder Note Section - Personal motivation
const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            I've filmed alone for years. Tripods don't give direction. Editing takes forever.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            Building Lenso to make solo filmmaking effortless — so creators can focus on what they're saying, not how they're filming it.
          </p>
          <div className="pt-6">
            <p className="text-lg font-medium">— Prabhath</p>
            <p className="text-sm text-muted-foreground">Founder, Lenso</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;

