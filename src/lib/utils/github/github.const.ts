export const headers: HeadersInit = {
  "Authorization": `Bearer ${process.env.GIT_GITHUB_TOKEN}`,
  "Accept": "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28"
};