
import React, { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Smart Campus Navigation System",
      description: "A mobile application that uses indoor positioning technology to help students navigate university buildings efficiently.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      tags: ["React Native", "Bluetooth Beacons", "ML", "Indoor Mapping"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Intelligent Learning Platform",
      description: "An adaptive learning system that personalizes content based on student performance and learning patterns.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      tags: ["Python", "Django", "React", "Machine Learning"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Cybersecurity Vulnerability Scanner",
      description: "An automated tool that identifies security vulnerabilities in web applications and provides remediation suggestions.",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Python", "Ethical Hacking", "OWASP", "Security"],
      github: "#",
      demo: null,
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts and filtering options.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["D3.js", "React", "Node.js", "Data Analytics"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Research Assistant",
      description: "A natural language processing tool that helps researchers find relevant academic papers and summarize key findings.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      tags: ["Python", "NLP", "TensorFlow", "Academic APIs"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud Resource Management System",
      description: "A tool for optimizing cloud infrastructure costs by analyzing usage patterns and suggesting resource allocation improvements.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["AWS", "Terraform", "Go", "Cloud Computing"],
      github: "#",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
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
                  <div className="absolute top-2 right-2 bg-tech-blue text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
