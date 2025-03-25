
import React from "react";
import { GraduationCap, Calendar, School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Information Technology",
      institution: "University of Technology",
      years: "2022 - Present",
      description: "Specializing in advanced data systems, cloud architecture, and artificial intelligence applications.",
      courses: ["Advanced Database Systems", "Cloud Computing", "AI & Machine Learning", "Information Security"],
      type: "masters",
    },
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Institute of Engineering",
      years: "2018 - 2022",
      description: "Developed strong foundations in programming, algorithms, and computer systems architecture.",
      courses: ["Data Structures & Algorithms", "Operating Systems", "Software Engineering", "Computer Networks"],
      type: "bachelors",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative glass-card rounded-xl p-8 animate-fade-in ${
                  edu.type === "masters" ? "border-l-4 border-tech-blue" : "border-l-4 border-tech-purple"
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={`absolute -left-6 top-8 p-3 rounded-full ${
                  edu.type === "masters" ? "bg-tech-blue text-white" : "bg-tech-purple text-white"
                }`}>
                  {edu.type === "masters" ? (
                    <GraduationCap size={24} />
                  ) : (
                    <School size={24} />
                  )}
                </div>
                
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.years}
                    </span>
                  </div>
                  
                  <p className="mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="tech-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
