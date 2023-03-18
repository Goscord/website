import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

// Server base URL and port:
const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}`;

// Playwright config:
export default defineConfig({
  testDir: "./test",

  timeout: 30 * 1000,

  reporter: [["html", { open: "always" }]],

  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI
  },

  use: {
    baseURL: baseURL,
    trace: "retry-with-trace"
  },

  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"]
      },
      testMatch: /.*\/[A-z]+\.(desktop\.)?ts/
    },
    {
      name: "mobile",
      use: {
        ...devices["iPhone XR"]
      },
      testMatch: /.*\/[A-z]+\.(mobile\.)?ts/
    }
  ]
});