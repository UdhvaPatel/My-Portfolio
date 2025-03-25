
import React from "react";
import { Brain, BookOpen, Laptop, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg leading-relaxed">
              I'm a passionate technologist with a Bachelor's degree in Computer Science and Engineering, 
              currently pursuing a Master's in Information Technology. My journey into the world of technology 
              began with a curiosity about how digital systems shape our world.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my academic career, I've developed a strong foundation in programming, 
              systems architecture, and data structures, while also exploring emerging fields like 
              artificial intelligence, cloud computing, and cybersecurity.
            </p>
            <p className="text-lg leading-relaxed">
              My goal is to leverage my technical expertise and creative problem-solving skills to 
              develop innovative solutions that address real-world challenges. I believe in technology's 
              power to transform industries and improve lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="bg-tech-blue/10 p-3 rounded-full w-fit mb-4">
                <Brain className="text-tech-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Analytical Thinking</h3>
              <p className="text-muted-foreground">
                Skilled at breaking down complex problems and developing systematic solutions.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="bg-tech-purple/10 p-3 rounded-full w-fit mb-4">
                <BookOpen className="text-tech-purple" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Passionate about staying at the forefront of technological advancements.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="bg-tech-cyan/10 p-3 rounded-full w-fit mb-4">
                <Laptop className="text-tech-cyan" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Expertise</h3>
              <p className="text-muted-foreground">
                Proficient in various programming languages and technology frameworks.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{animationDelay: "0.8s"}}>
              <div className="bg-tech-indigo/10 p-3 rounded-full w-fit mb-4">
                <Layers className="text-tech-indigo" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                Experience working in diverse teams to deliver complex projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
