import { Github, Linkedin, User } from "lucide-react";
import ParticleHero from "@/components/effects/ParticleHero";
import { socialLinks } from "@/data/portfolioData";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black-600"
    >
      <ParticleHero />
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="bg-primary text-primary-foreground px-4 py-1 text-xl font-black uppercase mb-4 inline-block transform -rotate-2">
            Frontend Developer Intern
          </span>
          <h1 className="bg-yellow-400 text-black text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-6">
            ANISH <br />
            PATHAK
          </h1>

          <p className="text-xl md:text-2xl font-bold max-w-lg mb-8 bg-background p-4 border-4 border-foreground brutal-shadow-sm">
            Frontend Developer dedicated to building high-performance, scalable web applications with React. I bridge the gap between complex backend logic and elegant, user-centric design, delivering polished interfaces that drive engagement in Agile environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Anish_Pathak_FrontendDeveloper.pdf"
              download
              className="bg-accent border-4 border-foreground px-8 py-4 text-xl font-black uppercase brutal-shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all inline-block"
            >
              Download CV
            </a>

            <div className="flex gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background border-4 border-foreground p-4 hover:bg-brutal-yellow transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background border-4 border-foreground p-4 hover:bg-secondary transition-colors"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-brutal-yellow border-4 border-foreground rounded-full shadow-[20px_20px_0px_0px_hsl(var(--primary))]"></div>
            <div className="absolute inset-4 border-4 border-foreground rounded-full overflow-hidden bg-background flex items-center justify-center">
              <img
                src="/me.jpeg"
                alt="Anish Pathak"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
