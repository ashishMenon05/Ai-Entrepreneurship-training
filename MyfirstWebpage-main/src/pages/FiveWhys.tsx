import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FiveWhysSection } from "@/components/FiveWhysSection";
import { AnimatedNodes } from "@/components/AnimatedNodes";

const FiveWhys = () => {
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
              The <span className="text-gradient">5 Whys</span> Framework
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A powerful technique to uncover the root motivations behind AI entrepreneurship. 
              Each "why" builds on the previous, revealing deeper insights.
            </p>
          </div>
        </section>
        
        <FiveWhysSection />
        
        {/* How to use */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="card-glass rounded-2xl p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-center">How to Apply the 5 Whys</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">For Problem Discovery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When you identify a problem, ask "why" five times to get to the root cause. 
                    This helps you understand the deeper needs of your customers and build solutions 
                    that address fundamental issues, not just symptoms.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-accent">For Decision Making</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Before making major decisions, use the 5 Whys to understand your motivations. 
                    This ensures your choices align with your core values and long-term vision 
                    for ethical, sustainable AI businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveWhys;
