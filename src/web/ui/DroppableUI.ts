import { PageElement } from "@serenity-js/web";
import { By } from "@serenity-js/web";

export class DroppableUI {
    static draggableElement = () => PageElement.located(By.xpath("//div[text()='Drag me']")).describedAs("Draggable Element");
    static droppableElement = () => PageElement.located(By.xpath("(//p[text()='Drop here'])[1]")).describedAs("Droppable Element");
    static droppedElement = () => PageElement.located(By.xpath("//p[text()='Dropped!']")).describedAs("Dropped Element");
}