
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-tech-blue" />,
      title: "Email",
      details: "udhvapatel@gmail.com",
    },
    {
      icon: <Phone className="text-tech-purple" />,
      title: "Phone",
      details: "+1 (940) 641-9903",
    },
    {
      icon: <MapPin className="text-tech-cyan" />,
      title: "Location",
      details: "Richardson, TX",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm always interested in collaborating on innovative projects, research opportunities, 
              or discussing technology trends. Feel free to reach out!
            </p>
            
            <div className="space-y-6 mt-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
                  <div className="p-3 bg-secondary rounded-full">{info.icon}</div>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 animate-fade-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-accent text-white rounded-lg hover:shadow-glow flex items-center justify-center transition-all duration-300 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
