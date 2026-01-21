import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedNodes } from "@/components/AnimatedNodes";
import { 
  Target, 
  Search, 
  Zap, 
  Shield, 
  ArrowRight, 
  Users, 
  Lightbulb,
  Scale,
  Repeat
} from "lucide-react";

const modules = [
  {
    id: 1,
    icon: Target,
    title: "Problem-First Thinking",
    duration: "15 min read",
    description: "Learn to identify real problems worth solving. Focus on people first, technology second.",
    content: [
      "Start by observing, not building",
      "Interview potential users before writing code",
      "Validate pain points with evidence",
      "Measure problem severity and frequency",
    ],
    color: "from-primary to-ai-cyan",
  },
  {
    id: 2,
    icon: Search,
    title: "Find Boring Problems",
    duration: "12 min read",
    description: "The best AI startups solve mundane, repetitive tasks that people hate doing.",
    content: [
      "Look for tasks people complain about",
      "Identify high-volume, low-value activities",
      "Find processes that require pattern recognition",
      "Automate the obvious before the exciting",
    ],
    color: "from-accent to-ai-pink",
  },
  {
    id: 3,
    icon: Zap,
    title: "Build MVPs Fast",
    duration: "18 min read",
    description: "Launch quickly, learn faster. Your first version should be embarrassingly simple.",
    content: [
      "Define the smallest possible solution",
      "Use no-code tools to prototype rapidly",
      "Ship in days, not months",
      "Embrace imperfection as learning",
    ],
    color: "from-secondary to-primary",
  },
  {
    id: 4,
    icon: Shield,
    title: "Ethics & Responsibility",
    duration: "20 min read",
    description: "Build AI that's fair, transparent, and respects privacy. Trust is your foundation.",
    content: [
      "Understand AI bias and mitigation strategies",
      "Implement privacy by design",
      "Be transparent about AI decision-making",
      "Create feedback loops for accountability",
    ],
    color: "from-ai-cyan to-secondary",
  },
  {
    id: 5,
    icon: Users,
    title: "User-Centered AI",
    duration: "14 min read",
    description: "Design AI systems that augment human capabilities, not replace human judgment.",
    content: [
      "Keep humans in the loop for critical decisions",
      "Design intuitive AI interfaces",
      "Explain AI recommendations clearly",
      "Empower users with AI, don't automate them away",
    ],
    color: "from-ai-pink to-accent",
  },
  {
    id: 6,
    icon: Lightbulb,
    title: "Ideation Techniques",
    duration: "16 min read",
    description: "Generate and validate AI startup ideas using proven frameworks.",
    content: [
      "Use the Problem-Solution Fit canvas",
      "Apply AI to existing successful business models",
      "Combine existing technologies in new ways",
      "Learn from adjacent industries",
    ],
    color: "from-primary to-secondary",
  },
  {
    id: 7,
    icon: Scale,
    title: "Scaling AI Products",
    duration: "22 min read",
    description: "Grow your AI product from prototype to production with sustainable practices.",
    content: [
      "Manage model performance at scale",
      "Handle data quality and drift",
      "Build monitoring and alerting systems",
      "Plan for infrastructure costs",
    ],
    color: "from-ai-cyan to-ai-pink",
  },
  {
    id: 8,
    icon: Repeat,
    title: "Continuous Learning",
    duration: "10 min read",
    description: "Stay current in the fast-moving AI landscape while maintaining focus.",
    content: [
      "Curate reliable information sources",
      "Build a learning habit that fits your schedule",
      "Connect with the AI community",
      "Balance learning with doing",
    ],
    color: "from-accent to-primary",
  },
];

const Learn = () => {
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
              Learn to Build <span className="text-gradient-accent">Ethical AI</span> Startups
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Comprehensive, beginner-friendly modules designed to transform you from an AI enthusiast 
              into a confident, responsible AI entrepreneur.
            </p>
            <Link to="/signup">
              <Button variant="hero" size="lg" className="group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Modules Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className="group card-glass rounded-2xl p-8 hover:scale-102 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <module.icon className="w-full h-full text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-1">{module.title}</h3>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{module.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {module.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.color} mt-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" size="sm" className="group/btn">
                    Start Module
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="card-glass rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-4">Ready to Begin Your Journey?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of aspiring AI entrepreneurs who are building the future of ethical, 
                  human-centered AI businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button variant="hero" size="lg" className="group">
                      Create Free Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/empathy-map">
                    <Button variant="hero-outline" size="lg">
                      Explore Empathy Map
                    </Button>
                  </Link>
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

export default Learn;
