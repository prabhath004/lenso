import { motion } from "framer-motion";
import { Mic, Sparkles } from "lucide-react";

const DemoShowcase = () => {
  return (
    <section id="demo" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See it in{" "}
            <span className="gradient-secondary bg-clip-text text-transparent">
              action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how Lenso transforms your solo filming experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12 glow-primary"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Phone Preview */}
              <div className="relative">
                <div className="bg-card rounded-2xl p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Mic className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 glass rounded-lg p-3">
                      <p className="text-sm">"Start recording"</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="glass rounded-lg p-3 flex-1">
                        <p className="text-sm text-muted-foreground">
                          "Adjust slightly left"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Recording</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-8 bg-primary rounded-full animate-pulse" />
                        <div className="w-1 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                        <div className="w-1 h-10 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-1 h-5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                        <div className="w-1 h-9 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-lg p-3 text-center">
                    <p className="text-sm font-medium">
                      "Welcome back to my channel..."
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Auto-generated captions
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Voice Commands</h4>
                      <p className="text-sm text-muted-foreground">
                        Control recording without touching your phone
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Real-time Guidance</h4>
                      <p className="text-sm text-muted-foreground">
                        Get AI suggestions for better framing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Auto Captions</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect subtitles, styled automatically
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
