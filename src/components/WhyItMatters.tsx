import { Video, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const WhyItMatters = () => {
  const benefits = [
    {
      icon: Video,
      title: "Film Better",
      description: "Never worry about framing, lighting, or timing again",
    },
    {
      icon: Zap,
      title: "Edit Faster",
      description: "Automatic trimming, captions, & clip cuts",
    },
    {
      icon: TrendingUp,
      title: "Create More",
      description: "Spend time recording, not editing",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Why it{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              matters
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center glow-primary">
                  <Icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-3xl font-bold">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
