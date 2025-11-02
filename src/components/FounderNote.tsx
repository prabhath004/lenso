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
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why now</h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                Most creators film alone. The problem isn't gear. It's not having a crew. Phones are amazing now. AI is good enough to help in real time. The timing just makes sense. We're building a camera that actually helps you, not just records you.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Where we are</h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We're pre-seed, building our first version. Teleprompter, voice control, auto editing, captions, vertical export. If you film yourself regularly, we'd love to hear about your workflow and what you need.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-lg font-medium">Prabhath</p>
            <p className="text-sm text-muted-foreground">Co-founder, Lenso</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;

