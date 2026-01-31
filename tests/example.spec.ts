import { Landing } from "../src/web/tasks/Landing";
import { TheLandingPage } from "../src/web/questions/TheLandingPage";
import { Ensure, equals } from "@serenity-js/assertions";
import { it } from "@serenity-js/playwright-test";

it.describe("DEMOQA suite", () => {

  it("Testing navigation to DEMOQA site", async ({ actor }) => {
    await actor.attemptsTo(
      Landing.navigateToLandingPage(),
      Landing.openCategoryCard("Elements"),
      Ensure.that(TheLandingPage.title(), equals("DEMOQA")),
    );
  });

});
 