const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USER = 'pathakanish41';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add token if available for higher rate limits
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=10&type=owner`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forked repos and sort by updated date
    return repos
      .filter(repo => repo.fork === false)  // Explicitly check for false
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 4);
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    throw error;
  }
};
