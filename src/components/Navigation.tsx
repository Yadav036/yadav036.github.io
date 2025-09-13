import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-lg font-bold text-primary glitch">
            ~/gokul-yadav
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => setHoveredItem('projects')}
              onMouseLeave={() => setHoveredItem(null)}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {hoveredItem === 'projects' ? 'cat projects' : './projects'}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              onMouseEnter={() => setHoveredItem('skills')}
              onMouseLeave={() => setHoveredItem(null)}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {hoveredItem === 'skills' ? 'cat skills' : './skills'}
            </button>
            <a 
              href="Gokul Yadhava Resume Updated Sep.pdf"
              onMouseEnter={() => setHoveredItem('resume')}
              onMouseLeave={() => setHoveredItem(null)}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {hoveredItem === 'resume' ? 'cat resume' : './resume'}
            </a>
            
          
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.location.href = 'tel:+919740117597'}
              className="hover:bg-terminal-green/20 hover:text-terminal-green"
            >
              <Phone className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.location.href = 'mailto:gokulyadhavag@gmail.com'}
              className="hover:bg-terminal-cyan/20 hover:text-terminal-cyan"
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://linkedin.com/in/gokul-yadav-g', '_blank')}
              className="hover:bg-terminal-amber/20 hover:text-terminal-amber"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}