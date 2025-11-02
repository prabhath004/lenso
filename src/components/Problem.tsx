import { motion } from "framer-motion";

// Problem Section - Why filming alone is painful
const Problem = () => {
  const problems = [
    {
      role: "Performer",
      pain: "You try to talk naturally, but you're self-conscious about framing and forgetting lines"
    },
    {
      role: "Operator", 
      pain: "You stop mid-flow to check framing, adjust exposure, start/stop recording"
    },
    {
      role: "Script Supervisor",
      pain: "You lose your place, forget key points, stumble. Then retake."
    },
    {
      role: "Editor",
      pain: "You spend 30+ minutes trimming silence, stitching takes, adding captions, exporting"
    }
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
          <h2 className="text-balance text-5xl font-medium md:text-6xl lg:text-7xl mb-8">
            Filming solo means{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              juggling 4 roles
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Switching between roles breaks your flow, kills your energy, and causes retakes. <span className="text-foreground font-medium">You end up publishing way less content than you want.</span> If you didn't have to touch the camera or timeline, you'd ship polished videos daily.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-base font-semibold text-foreground mb-1">{problem.role}</p>
              <p className="text-lg md:text-xl text-muted-foreground">{problem.pain}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 p-6 rounded-xl bg-muted/50 border border-border"
          >
            <p className="text-lg md:text-xl font-medium text-foreground">
              Lenso collapses all 4 roles into one guided session. You stay in performance mode. The rest happens automatically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

