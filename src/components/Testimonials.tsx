import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Feels like having a real camera operator.",
      author: "Sarah Chen",
      role: "Solo YouTuber",
    },
    {
      quote: "Cut my editing time by 70%.",
      author: "Marcus Rivera",
      role: "TikTok Creator",
    },
    {
      quote: "Finally, I can focus on content, not technicalities.",
      author: "Emma Davis",
      role: "Course Creator",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="gradient-secondary bg-clip-text text-transparent">
              creators
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of solo creators who've transformed their workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass border-border h-full hover:border-primary transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
