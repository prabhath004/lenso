import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Waitlist Form Section - Email capture with content type
const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [contentType, setContentType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission here
    console.log("Waitlist submitted:", { email, contentType });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-16 md:py-24">
        <div className="mx-auto max-w-xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">You're on the list</h3>
            <p className="text-muted-foreground">
              We'll reach out soon to learn more about your workflow.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 md:py-24">
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Join the{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                waitlist
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              🎤 Currently onboarding our first creators
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="What type of content do you make?"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="h-12 text-base"
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
            >
              Join Waitlist
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            We'll email you to learn about your workflow and filming needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;

