import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class AlertsUI {
    static alertButton = () => PageElement.located(By.id("alertButton")).describedAs("Alert Button");
}