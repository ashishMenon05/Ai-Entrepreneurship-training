import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const whys = [
  {
    question: "Why solve human problems?",
    answer: "Because real problems create real businesses.",
    emoji: "🎯",
    color: "from-primary to-ai-cyan",
  },
  {
    question: "Why use AI?",
    answer: "AI automates, analyzes, and scales faster than traditional methods.",
    emoji: "🤖",
    color: "from-ai-cyan to-secondary",
  },
  {
    question: "Why prototype quickly?",
    answer: "To reduce risk and validate ideas early.",
    emoji: "⚡",
    color: "from-secondary to-ai-purple",
  },
  {
    question: "Why ethical AI?",
    answer: "Trust, fairness, and long-term adoption.",
    emoji: "🛡️",
    color: "from-ai-purple to-accent",
  },
  {
    question: "Why AI-driven growth?",
    answer: "Innovation, efficiency, and scalability.",
    emoji: "🚀",
    color: "from-accent to-ai-pink",
  },
];

export const FiveWhysSection = () => {
  const [visibleWhys, setVisibleWhys] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          whys.forEach((_, index) => {
            setTimeout(() => {
              setVisibleWhys((prev) => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="five-whys">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient">5 Whys</span> of AI Entrepreneurship
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple but powerful framework to understand the core principles of building AI startups.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {whys.map((why, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < whys.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
              )}
              
              <div
                className={`flex items-start gap-6 mb-8 transition-all duration-700 ${
                  visibleWhys.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Number Circle */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${why.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {why.emoji}
                </div>
                
                {/* Content */}
                <div className="flex-1 card-glass rounded-2xl p-6 hover:scale-102 transition-transform duration-300">
                  <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                    {why.question}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChevronDown className="w-4 h-4 text-primary" />
                    <p className="text-sm">{why.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
