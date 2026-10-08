import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:4173/cefastaerospace-site/",
    ...devices["Desktop Chrome"],
    launchOptions: { executablePath: process.env.CHROME_PATH },
  },
  webServer: {
    command: "npm run preview -- --port 4173 --strictPort",
    url: "http://127.0.0.1:4173/cefastaerospace-site/",
    reuseExistingServer: !process.env.CI,
  },
});
