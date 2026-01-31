import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["line"], 
    [
      "@serenity-js/playwright-test",
      {
        specDirectory: "./tests",
        reporters: [
          "@serenity-js/console-reporter",
          ["@serenity-js/serenity-bdd", { specDirectory: "./tests" }],
          [
            "@serenity-js/core:ArtifactArchiver",
            { outputDirectory: "target/site/serenity" },
          ],
        ],
      },
    ],
  ],
  use: {
    trace: "on-first-retry",
    baseURL: "https://demoqa.com/",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
