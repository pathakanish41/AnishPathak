import { Mail, Linkedin, Github } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks } from "@/data/portfolioData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-accent border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <SectionTitle color="bg-brutal-yellow">Get In Touch</SectionTitle>
        <div className="mt-12">
          <h3 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-12 break-words">
            SAY <span className="bg-background px-4">HELLO</span>@ANISH
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="bg-background border-4 border-foreground p-8 brutal-shadow-primary hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
              <Mail size={40} className="mx-auto mb-4" />
              <span className="font-black uppercase text-xl">Email Me</span>
              <p className="font-bold text-sm mt-2 opacity-70">{socialLinks.email}</p>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border-4 border-foreground p-8 brutal-shadow-secondary hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
              <Linkedin size={40} className="mx-auto mb-4" />
              <span className="font-black uppercase text-xl">LinkedIn</span>
              <p className="font-bold text-sm mt-2 opacity-70">Connect with Anish</p>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border-4 border-foreground p-8 brutal-shadow-yellow hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
              <Github size={40} className="mx-auto mb-4" />
              <span className="font-black uppercase text-xl">GitHub</span>
              <p className="font-bold text-sm mt-2 opacity-70">Check My Code</p>
            </a>
          </div>

          <div className="mt-20">
            <button className="bg-foreground text-background px-12 py-6 text-3xl font-black uppercase hover:bg-primary transition-colors border-4 border-background">
              LET'S WORK TOGETHER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
