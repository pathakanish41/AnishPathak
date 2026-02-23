import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { useState, useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import BrutalCard from "@/components/ui/BrutalCard";
import { projects } from "@/data/portfolioData";
import { fetchGitHubRepos, GitHubRepo } from "@/services/githubApi";

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGitHubRepos();
        setRepos(githubRepos);
        setError(null);
      } catch (err) {
        console.error('Error loading GitHub repos:', err);
        setError('Failed to load projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const colors = ["bg-brutal-yellow", "bg-hot-pink", "bg-blue-300", "bg-green-300", "bg-purple-300", "bg-indigo-300"];

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

          {/* GitHub Projects */}
          {loading ? (
            <div className="md:col-span-2 text-center py-12">
              <p className="text-xl font-black uppercase">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="md:col-span-2">
              <BrutalCard color="bg-red-200">
                <p className="text-lg font-bold uppercase">{error}</p>
              </BrutalCard>
            </div>
          ) : (
            repos.map((repo, idx) => (
              <BrutalCard key={repo.id} color={colors[idx % colors.length]}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-black uppercase flex-1">{repo.name}</h3>
                  <div className="flex gap-3 ml-4">
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 text-sm font-bold">
                        <Star size={16} />
                        {repo.stargazers_count}
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center gap-1 text-sm font-bold">
                        <GitFork size={16} />
                        {repo.forks_count}
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-bold mb-4 line-clamp-2">
                  {repo.description || "No description available"}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.language && (
                    <span className="bg-background border-2 border-foreground px-2 py-1 text-xs font-black uppercase">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 2).map((topic) => (
                    <span
                      key={topic}
                      className="bg-background border-2 border-foreground px-2 py-1 text-xs font-black uppercase"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-4 border-foreground px-4 py-2 font-black uppercase hover:bg-background transition-all"
                >
                  <Github size={16} /> View Code
                </a>
              </BrutalCard>
            ))
          )}

          {/* Other Static Projects */}
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
