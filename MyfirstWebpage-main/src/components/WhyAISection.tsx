import { Bot, Zap, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "Solves Complex Problems",
    description: "AI tackles repetitive tasks and complex analysis that would take humans countless hours.",
    color: "from-primary to-ai-cyan",
  },
  {
    icon: Zap,
    title: "Fast Experimentation",
    description: "Rapidly prototype and test ideas with AI-powered tools, reducing time-to-market significantly.",
    color: "from-accent to-ai-pink",
  },
  {
    icon: Rocket,
    title: "Lean & Scalable",
    description: "Build startups that can grow exponentially with minimal resources using AI automation.",
    color: "from-secondary to-primary",
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    description: "Create AI solutions that are ethical, transparent, and build long-term trust with users.",
    color: "from-ai-cyan to-secondary",
  },
];

export const WhyAISection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient">AI Entrepreneurship</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI is transforming how businesses operate. Here's why you should be part of this revolution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group card-glass rounded-2xl p-6 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-full h-full text-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
