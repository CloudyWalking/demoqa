import { Question } from "@serenity-js/core";
import { AccordianUI } from "../ui/AccordianUI";

export const TheAccordianPage = {
  firstPanelContentIsVisible: () =>
    Question.about("First panel content visibility", async (actor) => {
      return actor.answer(AccordianUI.firstAccordianContent().isVisible());
    }),

  secondPanelContentIsVisible: () =>
    Question.about("Second panel content visibility", async (actor) => {
      return actor.answer(AccordianUI.secondAccordianContent().isVisible());
    }),
    
  thirdPanelContentIsVisible: () =>
    Question.about("Third panel content visibility", async (actor) => {
      return actor.answer(AccordianUI.thirdAccordianContent().isVisible());
    }),
};
