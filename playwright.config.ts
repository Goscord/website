import { defineConfig } from "@playwright/test";
import "dotenv/config";

// Server base URL and port:
const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}`;

// Playwright config:
export default defineConfig({
  testDir: "./test",
  testMatch: "*.ts",

  timeout: 30 * 1000,

  webServer: {
    command: "npm run dev",
    url: baseURL
  }
});