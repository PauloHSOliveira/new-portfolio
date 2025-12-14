
export type Section = 'about' | 'skills' | 'projects' | 'writing' | 'github' | 'contact';

export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  updated_at: string;
  created_at: string;
  pushed_at: string;
  homepage?: string;
  topics: string[];
  size: number;
  is_fork: boolean;
  isPrivate: boolean;
  owner_type: string;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface GitHubStats {
  repos: number;
  commits: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  location: string;
  bio: string;
  avatar_url: string;
  total_contributions: number;
  pull_requests: number;
  issues: number;
  reviews: number;
  streak: number;
  top_languages: { name: string; color: string; percentage: number }[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  status: 'active development' | 'alpha' | 'archived' | 'stealth';
  content: string;
  metrics?: {
    mrr: string;
    users: string;
    uptime: string;
    version: string;
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Article {
  slug: string;
  title: string;
  desc: string;
  content: string;
  date: string;
  readTime: string;
  category: 'Fintech' | 'Architecture' | 'AI' | 'Security' | 'Engineering';
  tags: string[];
}
