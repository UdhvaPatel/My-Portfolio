
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add intersection observer for animation on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add 'animate-fade-in' class when element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all sections except the first one (hero)
    const sections = document.querySelectorAll("section:not(#home)");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
