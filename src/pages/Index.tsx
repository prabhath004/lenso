import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBadges from "@/components/ProofBadges";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FounderNote from "@/components/FounderNote";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProofBadges />
      {/* Problem Section - Why filming alone is painful */}
      <Problem />
      {/* Features Section - What it does */}
      <Features />
      {/* How It Works Section - 3-step process */}
      <HowItWorks />
      {/* Founder Note Section - Personal motivation */}
      <FounderNote />
      {/* Waitlist Form - Email capture */}
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
