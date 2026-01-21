import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmpathyMapSection } from "@/components/EmpathyMapSection";
import { AnimatedNodes } from "@/components/AnimatedNodes";

const EmpathyMap = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
        <AnimatedNodes />
        
        {/* Hero */}
        <section className="relative py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 animate-fade-in">
              The AI Entrepreneur <span className="text-gradient-accent">Empathy Map</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Step into the mindset of a successful AI entrepreneur. Understand what they say, do, think, and feel 
              to develop your own entrepreneurial perspective.
            </p>
          </div>
        </section>
        
        <EmpathyMapSection />
        
        {/* Additional context */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="card-glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-display font-bold mb-4">Why Use an Empathy Map?</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Empathy Map is a powerful tool used by designers and entrepreneurs to understand their target audience deeply. 
                By applying it to the AI entrepreneur persona, you can internalize the mindset needed to build successful, 
                ethical AI businesses. Use these insights to guide your decision-making and product development.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmpathyMap;
