import { headers } from "./github.const";

export async function getGitHubStars(owner: string, repo: string): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const json = await response.json();

  return json.stargazers_count;
}

export async function getGitHubClone(owner: string, repo: string): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/traffic/clones`, { headers });
  const json = await response.json();

  return json.count;
}