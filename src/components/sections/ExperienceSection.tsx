import { Briefcase, Award, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import BrutalCard from "@/components/ui/BrutalCard";
import { experience } from "@/data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-brutal-yellow border-y-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle color="bg-background">Journey</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <Briefcase size={40} /> Work
            </h3>
            <BrutalCard className="mb-6">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <h4 className="text-2xl font-black uppercase">
                  {experience.work.company}
                </h4>
                <span className="bg-foreground text-background px-2 py-1 text-xs font-bold uppercase">
                  {experience.work.period}
                </span>
              </div>
              <p className="font-bold mb-4 italic">{experience.work.role}</p>
              <ul className="list-none space-y-2">
                {experience.work.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2 font-bold">
                    <ChevronRight className="shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </BrutalCard>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <Award size={40} /> Studies
            </h3>
            {experience.education.map((edu, idx) => (
              <BrutalCard key={idx} color="bg-background" className={idx > 0 ? "mt-6" : ""}>
                <h4 className="text-2xl font-black uppercase">{edu.degree}</h4>
                <p className="font-bold">{edu.institution}</p>
                <p className="text-sm font-black uppercase mt-2">{edu.period}</p>
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
