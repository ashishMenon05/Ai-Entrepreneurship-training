import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Rocket, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  BookOpen, 
  Map, 
  HelpCircle,
  Quote,
  ArrowRight,
  LogOut,
  User
} from "lucide-react";

const progressCards = [
  {
    title: "Problem Validation",
    status: "in-progress",
    progress: 60,
    icon: CheckCircle2,
    color: "from-primary to-ai-cyan",
  },
  {
    title: "Prototype Status",
    status: "not-started",
    progress: 0,
    icon: Clock,
    color: "from-accent to-ai-pink",
  },
  {
    title: "Ethics Checklist",
    status: "completed",
    progress: 100,
    icon: AlertCircle,
    color: "from-secondary to-primary",
  },
];

const quickLinks = [
  {
    title: "Empathy Map",
    description: "Understand your AI entrepreneur mindset",
    icon: Map,
    href: "/empathy-map",
    color: "from-primary to-ai-cyan",
  },
  {
    title: "5 Whys Guide",
    description: "Master the fundamental principles",
    icon: HelpCircle,
    href: "/five-whys",
    color: "from-accent to-ai-pink",
  },
  {
    title: "Learning Modules",
    description: "Continue your education journey",
    icon: BookOpen,
    href: "/learn",
    color: "from-secondary to-primary",
  },
];

const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Innovation distinguishes between a leader and a follower. — Steve Jobs",
  "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough. — Mark Zuckerberg",
  "The only way to do great work is to love what you do. — Steve Jobs",
];

const Dashboard = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold">
                    Welcome, Future AI Entrepreneur <span className="inline-block animate-bounce">🚀</span>
                  </h1>
                  <p className="text-muted-foreground">Your personalized AI startup journey dashboard</p>
                </div>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </Link>
          </div>

          {/* Progress Cards */}
          <section className="mb-12">
            <h2 className="text-xl font-display font-semibold mb-6">Your Progress</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {progressCards.map((card, index) => (
                <div
                  key={card.title}
                  className="card-glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-2.5`}>
                      <card.icon className="w-full h-full text-foreground" />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      card.status === "completed" ? "bg-green-500/20 text-green-400" :
                      card.status === "in-progress" ? "bg-accent/20 text-accent" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {card.status === "completed" ? "Complete" :
                       card.status === "in-progress" ? "In Progress" : "Not Started"}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-3">{card.title}</h3>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${card.color} transition-all duration-1000`}
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{card.progress}% complete</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-12">
            <h2 className="text-xl font-display font-semibold mb-6">Quick Access</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="group card-glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-full h-full text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{link.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Motivational Quote */}
          <section className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="card-glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl text-foreground italic leading-relaxed">
                  "{randomQuote.split(" — ")[0]}"
                </p>
                <p className="mt-4 text-muted-foreground font-medium">
                  — {randomQuote.split(" — ")[1]}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
