import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { InteractionUI } from "../ui/InteractionUI";

export const Interaction = {
    clickDroppableMenuItem: () => Task.where("Click on droppable menu item", Click.on(InteractionUI.droppableMenuItem())),
}