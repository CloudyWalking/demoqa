import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { FormsUI } from "../ui/FormsUI";

export const Forms = {
    clickPracticeFormMenuItem: () => Task.where("Click on Practice Form menu item", Click.on(FormsUI.practiceFormMenuItem()))
}