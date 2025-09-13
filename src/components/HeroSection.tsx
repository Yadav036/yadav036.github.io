import { TerminalWindow } from "./TerminalWindow";

export function HeroSection() {
  return (
    <section className="px-4 pt-16 pb-8 flex items-center justify-center mt-14">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="gokul@portfolio:~$ whoami" className="w-full">
          <div className="space-y-4">
            {/* Command */}
            <div className="font-mono text-sm text-terminal-green">
              <span className="text-terminal-amber">$</span> whoami
            </div>

            {/* Fun Statement */}
            <div className="flex items-start gap-2">
              {/* Left: Vertical flex container */}
              <div className="flex flex-col justify-start w-full">
                {/* Subtitle */}
                <div className="font-mono text-2xl md:text-2xl font-bold text-foreground">
                  Yet another Software Engineer from Bengaluru
                </div>

                <br />

                <div className="font-mono text-lg text-terminal-cyan mb-4">
                  Sometimes I worry about AI replacing all engineers
                </div>

                <div>
                  <a
                    href="/Gokul Yadhava Resume Updated Sep.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-terminal-amber text-sm cursor-pointer hover:text-terminal-cyan transition-colors duration-300"
                  >
                    <span className="text-terminal-green">$</span> cat resume.pdf
                  </a>
                  <a></a>
                  <a className="text-muted-foreground text-[0.65rem] mt-1 animate-glitch" href="/Gokul Yadhava Resume Updated Sep.pdf" >
                       click here
                  </a>
                </div>

                <br />

                {/* Paragraph */}
                <div className="font-sans text-sm text-muted-foreground leading-relaxed">
                  I am Gokul. I am from Bengaluru. What fascinates me is the idea that
                  we can take a piece of the human brain the way we reason, plan, and solve
                  problems and turn it into a machine that makes life easier.
                  <br /><br />
                  I love building products from scratch, not just designing how they look, but
                  how they flow, and how every step works together. Different stacks coming
                  together to form one brilliant product excites me. In that pursuit, I learn
                  new tech stacks & I create.
                </div>
              </div>
            </div>

            {/* Status & Location */}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
