import { Code, Github, Cpu } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import BrutalCard from "@/components/ui/BrutalCard";
import { skills } from "@/data/portfolioData";

const getSkillIcon = (name: string) => {
  if (name === "Git/GitHub") return <Github className="w-6 h-6" />;
  if (name === "Figma") return <Cpu className="w-6 h-6" />;
  return <Code className="w-6 h-6" />;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-right">
          <SectionTitle color="bg-accent">Arsenal</SectionTitle>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <BrutalCard
              key={idx}
              color={skill.color}
              className="flex flex-col items-center gap-4 py-10"
            >
              <div className="bg-background border-2 border-foreground p-3">
                {getSkillIcon(skill.name)}
              </div>
              <h3 className="font-black uppercase text-lg text-center">{skill.name}</h3>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
