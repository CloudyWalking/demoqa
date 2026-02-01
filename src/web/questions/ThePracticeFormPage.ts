import { Question } from "@serenity-js/core";
import { PracticeFormUI } from "../ui/PracticeFormUI";

export const ThePracticeFormPage = {

  thanksForSubmittingTheFormModalIsVisible: () =>
    Question.about(
      "Thanks for submitting the form modal visibility",
      async (actor) => {
        return actor.answer(
          PracticeFormUI.thanksForSubmittingTheFormModal().isVisible(),
        );
      },
    ),
    
};
