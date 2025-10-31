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
    <section className="py-20 md:py-32 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why it{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              matters
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your content creation workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center glow-primary">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
