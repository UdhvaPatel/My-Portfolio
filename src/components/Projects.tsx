
import React, { useState } from "react";
import { ExternalLink, Github, Star, Code, Terminal, Database, Server } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Customer Churn Prediction - Machine Learning Model",
      description: "A fullstack ML-powered web app that predicts customer churn with dynamic risk factors and personalized recommendations using a Flask backend and React frontend.",
      image: "https://www.kdnuggets.com/wp-content/uploads/tayo_8_best_libraries_machine_learning_explained_1.jpg",
      tags: ["React", "Flask", "scikit-learn", "Tailwind CSS", "Vercel", "Render"],
      github: "https://github.com/UdhvaPatel/predict-customer-churn",
      demo: "https://predict-customer-churn.vercel.app/",
      featured: true,
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      title: "HealthConnect – Appointment Scheduler",
      description: "A MySQL-based hospital appointment system with 15+ tables, procedures, and triggers for efficient scheduling and reduced conflicts.",
      image: "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["MySQL", "SQL Triggers", "Database Design", "Stored Procedures"],
      github: "https://github.com/UdhvaPatel/HealthConnect---Hospital-Appointment-Scheduling-System.git",
      demo: null,
      featured: true,
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Ad-Analytics – Ad Performance Analyzer",
      description: "A Python-based analyzer using OOP to evaluate 12,000+ ad records, delivering insights with matplotlib and seaborn.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHlzaXN8ZW58MHx8MHx8fDA%3D",
      tags: ["Python", "OOP", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      github: "https://github.com/UdhvaPatel/Ad-Analytics.git",
      demo: null,
      featured: true,
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Raah-INDIA NGO Portal",
      description: "Raah, built on the MERN stack, offers a dynamic and user-centric navigation experience with real-time updates and interactive maps, enhancing exploration and streamlining navigation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      tags: ["React.js", "MongoDB", "JavaScript", "MERN Stack", "TypeScript"],
      github: null,
      demo: "https://www.raahindia.in/",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "CodeCrafter - AI Assistant",
      description: "A natural language processing tool that helps Coders find relevant code snippets and generate code.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      tags: ["Next.js", "Clerk", "Shadcn-UI", "Google Gemini API", "Tailwind CSS"],
      github: "https://github.com/UdhvaPatel/codecrafter.git",
      demo: "https://codecrafter-app.vercel.app/",
      featured: true,
      icon: <Code className="w-6 h-6" />,
    },
    

    // {
    //   title: "Intelligent Learning Platform",
    //   description: "An adaptive learning system that personalizes content based on student performance and learning patterns.",
    //   image: "https://github.com/UdhvaPatel/My-Portfolio/blob/main/public/ML.jpg?raw=true",
    //   tags: ["Python", "Django", "React", "Machine Learning"],
    //   github: "#",
    //   demo: "#",
    //   featured: true,
    //   icon: <Code className="w-6 h-6" />,
    // },
    // {
    //   title: "Cybersecurity Vulnerability Scanner",
    //   description: "An automated tool that identifies security vulnerabilities in web applications and provides remediation suggestions.",
    //   image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //   tags: ["Python", "Ethical Hacking", "OWASP", "Security"],
    //   github: "#",
    //   demo: null,
    //   icon: <Terminal className="w-6 h-6" />,
    // },
    // {
    //   title: "Data Visualization Dashboard",
    //   description: "Interactive dashboard for visualizing complex datasets with customizable charts and filtering options.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //   tags: ["D3.js", "React", "Node.js", "Data Analytics"],
    //   github: "#",
    //   demo: "#",
    //   icon: <Database className="w-6 h-6" />,
    // },
    
    // {
    //   title: "Cloud Resource Management System",
    //   description: "A tool for optimizing cloud infrastructure costs by analyzing usage patterns and suggesting resource allocation improvements.",
    //   image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //   tags: ["AWS", "Terraform", "Go", "Cloud Computing"],
    //   github: "#",
    //   demo: null,
    //   icon: <Server className="w-6 h-6" />,
    // },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">
          <span className="font-mono text-tech-blue">{'<'}</span>
          Featured Projects
          <span className="font-mono text-tech-blue">{'/>'}</span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group rounded-xl overflow-hidden border-0 bg-transparent animate-fade-in cyber-border"
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-tech-blue text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center backdrop-blur-sm">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full">
                  {project.icon}
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors backdrop-blur-sm">
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors backdrop-blur-sm">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 glass-card backdrop-blur-md bg-white/60">
                <h3 className="text-xl font-bold mb-2 font-mono">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag text-xs backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
