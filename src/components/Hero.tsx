
import React, { useEffect, useRef } from "react";
import { ArrowDown, Code, Database, Layers } from "lucide-react";

const Hero = () => {
  const iconRef1 = useRef<HTMLDivElement>(null);
  const iconRef2 = useRef<HTMLDivElement>(null);
  const iconRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef1.current || !iconRef2.current || !iconRef3.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      iconRef1.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      iconRef2.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
      iconRef3.current.style.transform = `translate(${x * 15}px, ${y * -15}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 animate-background"></div>
      
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
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 animate-fade-in">
            <span className="text-sm font-semibold">Master's Student in Information Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Crafting the <span className="gradient-text">Digital Future</span> Through Technology
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            Computer Science graduate pursuing advanced studies in Information Technology. 
            Passionate about building innovative solutions that bridge the gap between technology and human experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:shadow-glow transition-all duration-300"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white border border-accent text-accent rounded-lg hover:bg-accent/5 transition-all duration-300"
            >
              Get In Touch
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
