import { useState } from "react";
import { MessageCircle, Activity, Brain, Heart } from "lucide-react";

const quadrants = [
  {
    id: "says",
    title: "SAYS",
    icon: MessageCircle,
    color: "from-primary to-ai-cyan",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    items: [
      "Technology should solve real human problems",
      "AI must create real customer value",
      "Ethical AI is non-negotiable",
    ],
  },
  {
    id: "does",
    title: "DOES",
    icon: Activity,
    color: "from-accent to-ai-pink",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    items: [
      "Experiments with AI models and prototypes",
      "Uses AI for market research",
      "Talks to users to understand pain points",
      "Automates boring, repetitive tasks",
    ],
  },
  {
    id: "thinks",
    title: "THINKS",
    icon: Brain,
    color: "from-secondary to-primary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    items: [
      "Is this solution scalable?",
      "Do I have quality data?",
      "Will ethical AI build long-term trust?",
    ],
  },
  {
    id: "feels",
    title: "FEELS",
    icon: Heart,
    color: "from-ai-pink to-accent",
    bgColor: "bg-ai-pink/10",
    borderColor: "border-ai-pink/30",
    items: [
      "Excited about innovation",
      "Confident in AI-driven growth",
      "Responsible for AI's societal impact",
    ],
  },
];

export const EmpathyMapSection = () => {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="empathy-map">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            The AI Entrepreneur <span className="text-gradient-accent">Empathy Map</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understand the mindset of a successful AI entrepreneur through four key dimensions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {quadrants.map((quadrant, index) => (
            <div
              key={quadrant.id}
              className={`group card-glass rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer ${quadrant.borderColor} ${
                activeQuadrant === quadrant.id ? "scale-105 shadow-2xl" : "hover:scale-102"
              }`}
              onMouseEnter={() => setActiveQuadrant(quadrant.id)}
              onMouseLeave={() => setActiveQuadrant(null)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${quadrant.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                  <quadrant.icon className="w-full h-full text-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold">{quadrant.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {quadrant.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-3 text-muted-foreground transition-all duration-300 ${
                      activeQuadrant === quadrant.id ? "text-foreground translate-x-2" : ""
                    }`}
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${quadrant.color} mt-2 flex-shrink-0`} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
