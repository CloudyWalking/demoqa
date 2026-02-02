import { PageElement } from "@serenity-js/web";
import { By} from "@serenity-js/web";

export class InteractionUI {
    static droppableMenuItem = ()=> PageElement.located(By.xpath("//span[text()='Droppable']")).describedAs("Droppable Menu Item");
}