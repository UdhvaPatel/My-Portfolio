
import React from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import DisplayCards from "@/components/ui/display-cards";
import { BadgeCheck, Code, Database, Shield, Server, Network } from "lucide-react";

const Certificates = () => {
  const certificateCards = [
    {
      icon: <Code className="size-4 text-tech-blue" />,
      title: "Advanced Web Development",
      description: "Full Stack JavaScript Specialization",
      date: "2023",
      iconClassName: "text-tech-blue",
      titleClassName: "text-tech-blue font-bold",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Database className="size-4 text-tech-purple" />,
      title: "Data Science Professional",
      description: "Machine Learning & Data Analysis",
      date: "2022",
      iconClassName: "text-tech-purple",
      titleClassName: "text-tech-purple font-bold",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-tech-cyan" />,
      title: "Cybersecurity Fundamentals",
      description: "Network Security & Ethical Hacking",
      date: "2021",
      iconClassName: "text-tech-cyan",
      titleClassName: "text-tech-cyan font-bold",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
    {
      icon: <Server className="size-4 text-tech-indigo" />,
      title: "Cloud Computing Architect",
      description: "AWS & Azure Services Certification",
      date: "2022",
      iconClassName: "text-tech-indigo",
      titleClassName: "text-tech-indigo font-bold",
      className: "[grid-area:stack] translate-x-48 translate-y-30 hover:translate-y-20",
    },
    {
      icon: <Network className="size-4 text-tech-teal" />,
      title: "DevOps Engineering",
      description: "CI/CD & Infrastructure as Code",
      date: "2023",
      iconClassName: "text-tech-teal",
      titleClassName: "text-tech-teal font-bold",
      className: "[grid-area:stack] translate-x-64 translate-y-40 hover:translate-y-30",
    },
    {
      icon: <BadgeCheck className="size-4 text-accent" />,
      title: "UI/UX Design Principles",
      description: "Human-Computer Interaction",
      date: "2021",
      iconClassName: "text-accent",
      titleClassName: "text-accent font-bold",
      className: "[grid-area:stack] translate-x-80 translate-y-50 hover:translate-y-40",
    },
  ];
  
  // For mobile view, we'll show only the first 3 certificates
  const mobileCards = certificateCards.slice(0, 3);

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <AnimatedText 
            text="Professional Certifications" 
            textClassName="text-3xl md:text-4xl font-bold"
            underlineClassName="text-tech-indigo"
            underlineDuration={2}
          />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Recognized achievements and specialized training that enhance Udhva's technical expertise
          </p>
        </div>
        
        <div className="flex justify-center mt-20 mb-10">
          {/* Display all certificates on desktop */}
          <div className="hidden md:block w-full max-w-4xl">
            <DisplayCards cards={certificateCards} />
          </div>
          
          {/* Display only 3 certificates on mobile */}
          <div className="block md:hidden w-full max-w-4xl">
            <DisplayCards cards={mobileCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
