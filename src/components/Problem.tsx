import { motion } from "framer-motion";

// Problem Section - Why filming alone is painful
const Problem = () => {
  const problems = [
    "Setting up a tripod, guessing if you're in frame",
    "Retaking shots because you weren't centered",
    "Spending hours trimming silence and fixing mistakes",
    "Manually adding captions for every clip",
    "Feeling awkward talking to a camera instead of a person",
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
            Filming alone{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              shouldn't be this hard
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="text-muted-foreground mt-1">•</span>
              <p className="text-lg md:text-xl text-muted-foreground">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

