import { describe, expect, test } from "vitest";
import { getGitHubStars, getGitHubClone } from "./github.util";
import { goscord } from "#/lib/configs/goscord";

describe("GitHub API calls", () => {
  test("should return the number of stars of the repository", async() => {
    const starCount = await getGitHubStars(goscord.github.owner, goscord.github.repo);

    expect(typeof starCount).toBe("number");
    expect(starCount).toBeGreaterThan(0);
  });

  test("should return the number of clone of the repository", async() => {
    const cloneCount = await getGitHubClone(goscord.github.owner, goscord.github.repo);

    expect(typeof cloneCount).toBe("number");
    expect(cloneCount).toBeGreaterThan(0);
  });
});