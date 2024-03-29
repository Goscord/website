import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

// Server base URL and port:
const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}`;

// Playwright config:
export default defineConfig({
  testDir: "./test",
  testMatch: "*.ts",

  timeout: 60 * 1000,

  reporter: [["html", { open: "always" }]],

  webServer: {
    url: baseURL,
    command: "npm run build && npm run dev",
    reuseExistingServer: !process.env.CI
  },

  use: {
    baseURL: baseURL,
    screenshot: "only-on-failure",
    trace: "retry-with-trace",
    video: "retain-on-failure"
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        permissions: ["clipboard-read"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    },
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"]
    //   }
    // },
    {
      name: "mobile chrome",
      use: {
        ...devices["Pixel 5"]
      }
    }
    // {
    //   name: "mobile safari",
    //   use: {
    //     ...devices["iPhone XR"]
    //   }
    // }
  ]
});