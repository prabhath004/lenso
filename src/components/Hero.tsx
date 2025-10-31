import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Shoot like you have a{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                full film crew
              </span>
              <br />
              — even when you're alone.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Lenso is an AI director that scripts, films, trims, and captions your videos — hands-free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button variant="hero" size="lg">
                Get Early Access
              </Button>
              <Button variant="ghost-outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Phone Mockup with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12 md:pt-16"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="glass rounded-3xl p-4 glow-primary">
                  <div className="bg-card rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center relative">
                    <div className="absolute inset-0 gradient-primary opacity-20" />
                    <div className="relative z-10 text-center p-6 space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full gradient-primary glow-primary animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded-full w-3/4 mx-auto" />
                        <div className="h-3 bg-muted rounded-full w-1/2 mx-auto" />
                      </div>
                      <div className="flex justify-center gap-2 pt-4">
                        <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                        <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
