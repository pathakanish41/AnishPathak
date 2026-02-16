import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolioData";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <div
          className="text-2xl font-black uppercase tracking-tighter cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          ANISH
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-black uppercase text-sm hover:bg-brutal-yellow px-2 py-1 border-2 border-transparent hover:border-foreground transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden border-4 border-foreground p-2 bg-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t-4 border-foreground flex flex-col p-4 gap-4 animate-slide-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-2xl font-black uppercase p-2 border-2 border-transparent hover:border-foreground hover:bg-secondary"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
