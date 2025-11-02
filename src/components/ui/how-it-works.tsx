"use client";

import { cn } from "@/lib/utils";
import { FileText, Video, Scissors } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="mb-6 text-muted-foreground">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
          <span className="text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Plan",
      description:
        "Quick script: write 1–3 bullets or ask AI to draft a 30-second hook. Teleprompter loads instantly.",
      benefits: [
        "AI writes scripts: 'Write a 30s hook about X'",
        "Or add your own talking points",
        "Teleprompter near lens for natural eyeline",
      ],
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Shoot",
      description:
        "Say 'Lenso, start' and perform. Get gentle nudges for framing. If you stumble, keep going. No retakes needed.",
      benefits: [
        "Voice commands: 'Lenso, start' and 'Cut'",
        "Real-time framing nudges for headroom and centering",
        "Stay in performance mode, hands free",
      ],
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Clean & Ship",
      description:
        "Say 'Cut'. Within seconds, get a clean clip with trimmed silence, removed command words, captions, and vertical export.",
      benefits: [
        "Auto-trims silence and removes 'start'/'cut'",
        "Captions auto-generated, styled for platforms",
        "Vertical export with smart face centering",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-16 sm:py-24 border-y border-border", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            How it{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan, shoot, clean, ship. From "Cut" to ready-to-post clip in under 10 seconds. Remove friction. Increase output. Build the habit.
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                // Center the number within its grid column
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
