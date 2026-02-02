import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { AccordianUI } from "../ui/AccordianUI";

export const Accordian = {
    expandFirstAccordianSection: () => Task.where("Expand first accordian section", Click.on(AccordianUI.firstAccordianHeader())),
    expandSecondAccordianSection: () => Task.where("Expand second accordian section", Click.on(AccordianUI.secondAccordianHeader())),
    expandThirdAccordianSection: () => Task.where("Expand third accordian section", Click.on(AccordianUI.thirdAccordianHeader())),
}