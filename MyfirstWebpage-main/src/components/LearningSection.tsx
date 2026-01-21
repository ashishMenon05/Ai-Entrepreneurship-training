import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Search, Zap, Shield, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Target,
    title: "Problem-First Thinking",
    description: "Focus on people, not tools. Understand the pain points before building solutions.",
    color: "from-primary to-ai-cyan",
    delay: 0,
  },
  {
    icon: Search,
    title: "Find Boring Problems",
    description: "The best AI startups automate what people hate doing. Look for friction in daily tasks.",
    color: "from-accent to-ai-pink",
    delay: 0.1,
  },
  {
    icon: Zap,
    title: "Build MVPs Fast",
    description: "Start small, learn fast. Your first version should be embarrassingly simple.",
    color: "from-secondary to-primary",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Ethics & Responsibility",
    description: "Fairness, privacy, and transparency are not optional—they're your foundation.",
    color: "from-ai-cyan to-secondary",
    delay: 0.3,
  },
];

export const LearningSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Start Your <span className="text-gradient-accent">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beginner-friendly modules designed to help you think like a successful AI entrepreneur.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group card-glass rounded-2xl p-8 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${module.delay}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-full h-full text-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{module.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{module.description}</p>
              <Link 
                to="/learn" 
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/learn">
            <Button variant="hero" size="lg" className="group">
              Explore All Modules
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
