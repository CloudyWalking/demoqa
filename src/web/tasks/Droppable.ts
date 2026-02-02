import { Interaction } from "@serenity-js/core";
import { BrowseTheWebWithPlaywright } from "@serenity-js/playwright";
import { PlaywrightPage } from "@serenity-js/playwright";

export const Droppable = {
  dragAndDropElement: () =>
    Interaction.where("#actor hace drag and drop manual", async (actor) => {
      const serenityPage =
        await BrowseTheWebWithPlaywright.as(actor).currentPage();
      const page = await (serenityPage as PlaywrightPage).nativePage();
      const draggable = page.locator("//div[text()='Drag me']");
      const droppable = page.locator("(//p[text()='Drop here'])[1]");
      await draggable.hover();
      await page.mouse.down();
      await droppable.hover();
      await page.mouse.up();
    }),
};
