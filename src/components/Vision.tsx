import { motion } from "framer-motion";

// Vision Section - Future capabilities
const Vision = () => {
  const futureFeatures = [
    "AI director suggesting shots and angles in real-time",
    "Gesture controls for hands-free camera movement",
    "Multi-device angle sync — record with multiple phones",
    "Smart reframing to simulate camera movement",
    "Automatic pacing and storytelling flow",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-balance text-5xl font-medium md:text-6xl lg:text-7xl mb-4">
            What's{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              coming
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building toward a future where solo filming feels like having a real crew
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="text-primary mt-1">→</span>
              <p className="text-lg md:text-xl text-muted-foreground">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

