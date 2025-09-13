import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function TerminalWindow({ children, className, title }: TerminalWindowProps) {
  return (
    <div className={cn("terminal-window", className)}>
      <div className="terminal-header">
        <div className="terminal-button close"></div>
        <div className="terminal-button minimize"></div>
        <div className="terminal-button maximize"></div>
        {title && (
          <span className="text-xs text-muted-foreground ml-4 font-mono">{title}</span>
        )}
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
}