import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class ElementsUI {
    static textBoxMenuItem = () => PageElement.located(By.xpath("//span[text()='Text Box']")).describedAs("Text Box menu item");
}