
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/UdhvaPatel" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/udhva-patel/" },
    { icon: <Twitter size={20} />, url: "https://x.com/UdhvaPatel" },
    { icon: <Mail size={20} />, url: "mailto:udhvapatel@gmail.com" },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="font-mono">{'< '}</span>
              Udhva Patel
              <span className="font-mono">{' />'}</span>
            </a>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Udhva Patel. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
