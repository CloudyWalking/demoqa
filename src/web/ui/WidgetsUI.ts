import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class WidgetsUI {
    static accordianSubmenuOption = () => PageElement.located(By.xpath("//span[text()='Accordian']")).describedAs('Accordian submenu option');
}