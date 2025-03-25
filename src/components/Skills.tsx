
import React from "react";
import { Code, Database, Layout, Globe, Server, Shield, Activity } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "TypeScript", "SQL", "R"],
      color: "tech-blue",
    },
    {
      icon: <Layout />,
      title: "Frontend Development",
      skills: ["React", "HTML5/CSS3", "NextJS", "TailwindCSS", "Angular", "Vue"],
      color: "tech-purple",
    },
    {
      icon: <Server />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Spring Boot", "ASP.NET", "FastAPI"],
      color: "tech-cyan",
    },
    {
      icon: <Database />,
      title: "Databases & Cloud",
      skills: ["MongoDB", "PostgreSQL", "AWS", "Firebase", "Google Cloud", "Azure"],
      color: "tech-indigo",
    },
    {
      icon: <Shield />,
      title: "Security & DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "Network Security", "Auth Systems"],
      color: "tech-teal",
    },
    {
      icon: <Activity />,
      title: "Data Science & AI",
      skills: ["Machine Learning", "Data Analysis", "TensorFlow", "PyTorch", "NLP"],
      color: "tech-blue",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`bg-${category.color}/10 p-3 rounded-full w-fit mb-4 text-${category.color}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
