import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const certificates = [
  {
    title: "IBM Data Science Professional Certificate",
    image: "https://www.hackerrank.com/certificates/iframe/48597396a402",
    link: "https://coursera.org/verify/IBM-DSP-Certificate-Link",
  },
  {
    title: "HackerRank Problem Solving (Basic)",
    image: "https://www.hackerrank.com/certificates/iframe/48597396a402",
    link: "https://www.hackerrank.com/certificates/48597396a402",
  },
  {
    title: "React (Basic) – HackerRank",
    image: "https://www.hackerrank.com/certificates/iframe/48597396a402",
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 text-white font-semibold text-sm px-4 py-2 bg-black/50 hover:bg-black/70 rounded backdrop-blur-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </div>

              <CardContent className="p-4 glass-card backdrop-blur-md bg-white/60">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-tech-blue mr-2" />
                  <h3 className="text-base font-bold font-mono">{cert.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
