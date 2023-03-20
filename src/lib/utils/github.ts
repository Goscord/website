import { goscord } from "#/lib/configs/goscord";

// TODO : type this

export async function getGithubStars(): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/${goscord.github.mainRepo}`);
  const json = await response.json();

  return json.stargazers_count;
}

export async function getGithubClone(): Promise<number> {
  // const response = await fetch(`https://api.github.com/repos/${goscord.github.mainRepo}`);
  // const json = await response.json();

  // TODO

  return 4994;
}