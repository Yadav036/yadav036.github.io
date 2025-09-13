import { TerminalWindow } from "./TerminalWindow";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon?: string;
}

export function SkillCard({ category, skills, icon = "📁" }: SkillCardProps) {
  return (
    <TerminalWindow className="hover:scale-105 transition-transform duration-300">
      <div className="space-y-4">
    
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-sans text-lg font-bold text-foreground">{category}</h3>
        </div>
        
    
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
           <Badge
  key={skill}
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
  {skill}
</Badge>

          ))}
        </div>
      </div>
    </TerminalWindow>
  );
}