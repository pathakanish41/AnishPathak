import SectionTitle from "@/components/ui/SectionTitle";
import { aboutTags } from "@/data/portfolioData";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary border-y-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle color="bg-primary">Who Am I?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-3xl md:text-5xl font-black leading-tight uppercase italic text-secondary-foreground">
            "Building interfaces that aren't just usable, but{" "}
            <span className="bg-background px-2 not-italic">unforgettable</span>."
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl md:text-2xl font-bold bg-background p-6 border-4 border-foreground brutal-shadow">
              Frontend development student with experience in{" "}
              <span className="bg-accent px-1">HTML</span>,{" "}
              <span className="bg-brutal-yellow px-1">CSS</span>,{" "}
              <span className="bg-brutal-yellow px-1">React</span>,{" "}
              <span className="bg-primary text-primary-foreground px-1">JS</span>, and{" "}
              <span className="bg-secondary px-1">Many More</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-foreground text-background px-4 py-2 font-black uppercase text-sm border-2 border-background"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
