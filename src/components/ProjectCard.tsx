import { TerminalWindow } from "./TerminalWindow";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, duration, description, technologies }: ProjectCardProps) {
  return (
    <TerminalWindow className="hover:scale-105 transition-transform duration-300">
      <div className="space-y-4">
        
        <div>
          <h3 className="font-sans text-xl font-bold text-foreground mb-2">$ {title}</h3>
          <div className="font-mono text-sm text-terminal-cyan mb-3">{duration}</div>
        </div>
        
        <div className="font-sans text-sm text-muted-foreground leading-relaxed">
          {description}
        </div>
        
        <div className="pt-4">
          <div className="font-mono text-sm  mb-2">
            Tech Stack:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
  key={tech}
  variant="secondary"
  className="
    font-sans text-sm px-4 py-1.5 rounded-lg
    bg-muted/30 border border-border
    hover:bg-terminal-cyan/20 hover:border-terminal-cyan/50
    transition-all duration-200
    cursor-default
    hover:scale-105 hover:shadow-md
  "
>
  {tech}
</Badge>
            ))}
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}