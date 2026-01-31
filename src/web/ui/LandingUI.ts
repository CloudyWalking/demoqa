import {PageElement} from '@serenity-js/web';
import { By } from '@serenity-js/web';

export class LandingUI {
    static elementsCard = () => PageElement.located(By.xpath("//h5[text()='Elements']")).describedAs("Elements card");
    static formsCard = () => PageElement.located(By.xpath("//h5[text()='Forms']")).describedAs("Forms card");
    static alertsFrameAndWindowsCard = () => PageElement.located(By.xpath("//h5[text()='Alerts, Frame & Windows']")).describedAs("Alerts, Frame & Windows card");
    static widgetsCard = () => PageElement.located(By.xpath("//h5[text()='Widgets']")).describedAs("Widgets card");
    static interactionsCard = () => PageElement.located(By.xpath("//h5[text()='Interactions']")).describedAs("Interactions card");
    static bookStoreApplicationCard = () => PageElement.located(By.xpath("//h5[text()='Book Store Application']")).describedAs("Book Store Application card");
}