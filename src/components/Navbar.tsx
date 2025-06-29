import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-foreground flex items-center">
          <Terminal className="mr-2 text-tech-blue" />
          <span className="font-mono text-tech-blue">{'< '}</span>
          <AnimatedText 
            text="Udhva Patel" 
            className="h-auto !items-start"
            textClassName="text-xl font-bold text-tech-blue" 
            underlineClassName="text-tech-purple h-4"
            underlinePath="M 0,10 Q 50,0 100,10 Q 150,20 200,10"
            underlineHoverPath="M 0,10 Q 50,20 100,10 Q 150,0 200,10"
          />
          <span className="font-mono text-tech-blue ml-1">{' />'}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-foreground hover:text-accent transition-colors relative group font-mono"
            >
              {`<${item.label}/>`}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground hover:text-accent transition-colors py-2 font-mono"
                onClick={() => setIsOpen(false)}
              >
                {`<${item.label}/>`}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
