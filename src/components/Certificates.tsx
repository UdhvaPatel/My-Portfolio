import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const certificates = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    link: "https://coursera.org/verify/IBM-DSP-Certificate-Link",
  },
  {
    title: "HackerRank Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/problem-solving-basic-link",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/react-basic-link",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">
          <span className="font-mono text-tech-blue">{'<'}</span>
          Certificates
          <span className="font-mono text-tech-blue">{'/>'}</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group rounded-xl overflow-hidden border-0 bg-transparent animate-fade-in cyber-border"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 glass-card backdrop-blur-md bg-white/60 flex flex-col h-full justify-between">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-tech-blue mr-3" />
                  <h3 className="text-lg font-bold font-mono">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tech-blue text-sm font-semibold hover:underline"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
