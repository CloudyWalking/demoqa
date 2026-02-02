import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { WidgetsUI } from "../ui/WidgetsUI";

export const Widgets = {
    clickAccordionMenuItem: () => Task.where("Click on Accordion menu item", Click.on(WidgetsUI.accordianSubmenuOption())),
}