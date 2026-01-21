import { Link } from "react-router-dom";
import { Brain, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Brain className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-gradient">AI Founders</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Empowering the next generation of AI entrepreneurs to build ethical, scalable, and impactful businesses.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/empathy-map" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Empathy Map
                </Link>
              </li>
              <li>
                <Link to="/five-whys" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  5 Whys Framework
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Account */}
          <div>
            <h4 className="font-display font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Founders. Built with 💜 for aspiring AI entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
};
