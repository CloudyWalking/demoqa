import { Question } from "@serenity-js/core";
import { DroppableUI } from "../ui/DroppableUI";

export const TheDroppablePage = {
    droppedElementIsPresent: () =>
        Question.about("Dropped element visibility", async (actor) => {
          return actor.answer(DroppableUI.droppedElement().isPresent());
        }),
};