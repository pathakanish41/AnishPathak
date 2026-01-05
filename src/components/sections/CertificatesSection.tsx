import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/portfolioData";

const CertificatesSection = () => {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle color="bg-primary">Badges</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-background text-foreground border-4 border-background p-6 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 bg-accent text-accent-foreground font-black p-4 rotate-12 border-2 border-foreground group-hover:rotate-0 transition-transform">
                AWS
              </div>
              <Award size={48} className="mb-4 text-primary" />
              <h4 className="font-black uppercase text-xl leading-tight">{cert}</h4>
              <p className="text-xs font-bold uppercase mt-2 opacity-60 italic">
                AWS Academy Graduate
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
