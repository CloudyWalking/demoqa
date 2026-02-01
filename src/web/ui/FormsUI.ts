import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class FormsUI {
    static practiceFormMenuItem = () => PageElement.located(By.xpath("//span[text()='Practice Form']")).describedAs("Practice Form menu item");
}