import { ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import BrutalCard from "@/components/ui/BrutalCard";
import { projects } from "@/data/portfolioData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <SectionTitle color="bg-secondary">Creations</SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Featured Project */}
          <div className="md:col-span-2">
            <BrutalCard
              color="bg-accent"
              className="flex flex-col md:flex-row gap-8 items-center p-8"
            >
              <div className="w-full md:w-1/2 aspect-video bg-foreground border-4 border-foreground flex items-center justify-center overflow-hidden">
                <div className="text-background text-center p-8">
                  <h5 className="text-4xl font-black uppercase tracking-widest">
                    BOOKBOX
                  </h5>
                  <p className="text-xs font-bold uppercase mt-2">
                    E-Commerce Platform
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-black uppercase mb-4">
                  {projects.featured.name}
                </h3>
                <p className="text-xl font-bold mb-6">
                  {projects.featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects.featured.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-background border-2 border-foreground px-3 py-1 text-sm font-black uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="bg-foreground text-background px-6 py-3 font-black uppercase flex items-center gap-2 hover:bg-primary transition-colors">
                  View Project <ExternalLink size={18} />
                </button>
              </div>
            </BrutalCard>
          </div>

          {/* Other Projects */}
          {projects.other.map((project, idx) => (
            <BrutalCard key={idx} color={project.color}>
              <h3 className="text-3xl font-black uppercase mb-4">{project.name}</h3>
              <p className="font-bold mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-background border-2 border-foreground px-2 py-1 text-sm font-black uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.isCurrent ? (
                <span className="font-black uppercase text-primary-foreground italic">
                  Current View
                </span>
              ) : (
                <button className="border-4 border-foreground px-4 py-2 font-black uppercase hover:bg-background transition-all">
                  View Code
                </button>
              )}
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
