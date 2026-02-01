import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { ElementsUI } from "../ui/ElementsUI";

export const Elements = {
    clickTextBoxMenuItem: () => Task.where("Click on Text Box menu item", Click.on(ElementsUI.textBoxMenuItem()))
}