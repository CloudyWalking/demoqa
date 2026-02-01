import { defineConfig, devices } from "@playwright/test";
import type {
  SerenityFixtures,
  SerenityWorkerFixtures,
} from "@serenity-js/playwright-test";

export default defineConfig<SerenityFixtures, SerenityWorkerFixtures>({
  testDir: "./tests",
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  use: {
    trace: "on-first-retry",
    baseURL: "https://demoqa.com",
    crew: [
      ["@serenity-js/web:Photographer", { strategy: "TakePhotosOfFailures" }],
    ],
    defaultActorName: "Alice",
  },
  reporter: [
    [
      "@serenity-js/playwright-test",
      {
        specDirectory: "./tests",
        crew: [
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
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        crew: [
          [
            "@serenity-js/web:Photographer",
            { strategy: "TakePhotosOfInteractions" },
          ],
        ],
      },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        crew: [
          [
            "@serenity-js/web:Photographer",
            { strategy: "TakePhotosOfInteractions" },
          ],
        ],
      },
    },
  ],
});
