import React, { useEffect, useRef } from "react";
import { ArrowDown, Code, Database, Layers, Terminal, Cpu, Server, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const Hero = () => {
  const iconRef1 = useRef<HTMLDivElement>(null);
  const iconRef2 = useRef<HTMLDivElement>(null);
  const iconRef3 = useRef<HTMLDivElement>(null);
  const iconRef4 = useRef<HTMLDivElement>(null);
  const iconRef5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef1.current || !iconRef2.current || !iconRef3.current || 
          !iconRef4.current || !iconRef5.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      iconRef1.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      iconRef2.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
      iconRef3.current.style.transform = `translate(${x * 15}px, ${y * -15}px)`;
      iconRef4.current.style.transform = `translate(${x * -10}px, ${y * 25}px)`;
      iconRef5.current.style.transform = `translate(${x * 25}px, ${y * -10}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1oQj1oMQV8W9YWfcS3d6Lg0SVeuBHHBf_/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 matrix-bg">
      <div className="absolute inset-0 hex-pattern opacity-30 animate-background"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid"></div>
      
      {/* Floating Icons */}
      <div ref={iconRef1} className="absolute top-1/4 right-[15%] transition-transform duration-300">
        <Code size={80} className="text-tech-blue/20" />
      </div>
      <div ref={iconRef2} className="absolute bottom-1/3 left-[10%] transition-transform duration-300">
        <Database size={100} className="text-tech-purple/20" />
      </div>
      <div ref={iconRef3} className="absolute top-1/3 left-[20%] transition-transform duration-300">
        <Layers size={70} className="text-tech-cyan/20" />
      </div>
      <div ref={iconRef4} className="absolute top-2/3 right-[25%] transition-transform duration-300">
        <Terminal size={90} className="text-tech-indigo/20" />
      </div>
      <div ref={iconRef5} className="absolute bottom-1/4 left-[30%] transition-transform duration-300">
        <Cpu size={85} className="text-tech-teal/20" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block cyber-border px-4 py-2 rounded-full mb-6 animate-fade-in bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-mono text-accent font-semibold tracking-wider">&lt;MASTER'S STUDENT IN INFORMATION TECHNOLOGY AND MANAGEMENT/&gt;</span>
          </div>
          
          <div className="mb-6 animate-fade-in cyber-dots" style={{animationDelay: "0.2s"}}>
            <AnimatedText 
              text="Udhva Patel" 
              textClassName="text-4xl md:text-6xl font-bold gradient-text" 
              underlineClassName="text-tech-purple"
              underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
              underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
              underlineDuration={2}
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <span className="font-mono text-tech-blue">&lt;</span> Computer Science graduate pursuing advanced studies in Information Technology. 
            Passionate about building innovative solutions that bridge the gap between technology and human experience. <span className="font-mono text-tech-blue">/&gt;</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:shadow-glow transition-all duration-300 cyber-border"
            >
              <Server className="inline-block mr-2 h-4 w-4" /> View My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-accent/30 text-accent rounded-lg hover:bg-accent/5 transition-all duration-300"
            >
              <Terminal className="inline-block mr-2 h-4 w-4" /> Get In Touch
            </a>
            <a
              onClick={handleResumeClick}
              className="px-6 py-3 bg-tech-purple/90 text-white rounded-lg hover:shadow-glow-purple transition-all duration-300 cyber-border cursor-pointer"
            >
              <FileText className="inline-block mr-2 h-4 w-4" /> View Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
