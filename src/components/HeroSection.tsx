import React, { useState, useEffect } from 'react';
import { TerminalWindow } from "./TerminalWindow";

export function HeroSection() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  
  const commands = [
    { 
      cmd: 'whoami', 
      output: 'gokul yadav g - I want to be a software engineer'
    },
    { 
      cmd: 'cat about.txt', 
      output: 'Yet another Software Engineer from Bengaluru\n\nSometimes I worry about AI replacing all engineers 🤔' 
    },
    { 
      cmd: 'cat everythingaboutme.txt', 
      output: `I am Gokul. I am from Bengaluru. 
      
What fascinates me is the idea that we can take a piece of the human brain
the way we reason, plan, and solve problems  and turn it into a machine 
that makes life easier.

I love building products from scratch, not just designing how they look, but
how they flow, and how every step works together. Different stacks coming
together to form one brilliant product excites me. 

In that pursuit, I learn new tech stacks & I create.

📁 Resume: Available for download
🔗 Let's connect and build something amazing together!` 
    }
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    
    const executeCommands = () => {
      if (currentIndex < commands.length) {
        const command = commands[currentIndex];
        
        // Typing effect for command
        let charIndex = 0;
        const typeCommand = () => {
          if (charIndex <= command.cmd.length) {
            setCurrentInput(command.cmd.slice(0, charIndex));
            charIndex++;
            setTimeout(typeCommand, 100);
          } else {
            setIsProcessing(true);
            // Execute command after typing
            setTimeout(() => {
              setCommandHistory(prev => [...prev, { 
                cmd: command.cmd, 
                output: command.output 
              }]);
              setCurrentInput('');
              setIsProcessing(false);
              currentIndex++;
              
              if (currentIndex < commands.length) {
                setTimeout(executeCommands, 800);
              } else {
                // Show scroll hint after all commands complete
                setTimeout(() => setShowScrollHint(true), 1000);
              }
            }, 1200);
          }
        };
        
        typeCommand();
      }
    };
    
    executeCommands();
  }, []);

  return (
    <section className="px-4 pt-16 pb-8 flex items-center justify-center mt-14">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="gokul@portfolio:~$ whoami" className="w-full">
          <div className="space-y-4">
            {commandHistory.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="font-mono text-sm text-terminal-green">
                  <span className="text-terminal-amber">$</span> {item.cmd}
                </div>
                <div className="font-mono text-sm text-foreground ml-0 mt-2 whitespace-pre-line">
                  {item.output}
                </div>
              </div>
            ))}
            
            <div className="font-mono text-sm text-terminal-green">
              <span className="text-terminal-amber">$</span> {currentInput}
              {(currentInput || isProcessing) && <span className="animate-pulse ml-1 text-foreground">█</span>}
            </div>
            
            {showScrollHint && (
              <div className="mt-8 space-y-3 animate-in fade-in duration-1000">
                <div className="font-mono text-sm text-terminal-green">
                  <span className="text-terminal-amber">$</span> ls projects/
                </div>
                
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="font-mono text-xs text-muted-foreground animate-pulse">
                      ↓ scroll to explore more ↓
                    </div>
                    <div className="w-1 h-8 bg-muted-foreground rounded-full overflow-hidden">
                      <div className="w-full h-4 bg-terminal-green animate-bounce"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <a
                    href="/Gokul Yadhava Resume Updated Sep.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono text-sm text-terminal-cyan hover:text-terminal-green transition-colors duration-300 border border-terminal-cyan hover:border-terminal-green px-4 py-2 rounded"
                  >
                    <span className="text-terminal-green">$</span> wget resume.pdf
                  </a>
                </div>
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}