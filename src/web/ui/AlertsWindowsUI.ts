import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class AlertsWindowsUI {
    static alertsMenuItem = () => PageElement.located(By.xpath("//span[text()='Alerts']")).describedAs("Alerts Menu Item");
}