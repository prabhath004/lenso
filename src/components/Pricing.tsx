import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      features: [
        "Voice commands",
        "Basic captions",
        "5 hours/month",
        "720p export",
      ],
    },
    {
      name: "Creator",
      description: "For serious content creators",
      features: [
        "Everything in Starter",
        "AI teleprompter",
        "20 hours/month",
        "1080p export",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Pro",
      description: "For professional filmmakers",
      features: [
        "Everything in Creator",
        "Unlimited hours",
        "4K export",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
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
            Simple{" "}
            <span className="gradient-secondary bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`glass border-border h-full hover:border-primary transition-all duration-300 relative ${
                  plan.popular ? "border-primary glow-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant={plan.popular ? "hero" : "ghost-outline"}
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
