import { Mic, FileText, Scissors, Captions } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Hands-Free Recording",
      description: 'Say "Start" and "Cut" — we trim the commands',
    },
    {
      icon: FileText,
      title: "AI Teleprompter",
      description: "Generate scripts & read naturally",
    },
    {
      icon: Scissors,
      title: "Auto-Edit Clips",
      description: "Silence removed, polished cuts",
    },
    {
      icon: Captions,
      title: "Studio-Quality Captions",
      description: "Auto captions with style templates",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              create better
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional filmmaking tools powered by AI, designed for solo creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass border-border hover:border-primary transition-all duration-300 hover:glow-primary group h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
