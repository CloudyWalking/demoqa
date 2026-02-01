import { Question } from "@serenity-js/core";
import { TextBoxUI } from "../ui/TextBoxUI";

export const TheTextBoxPage = {
  nameOutputIsVisible: () =>
    Question.about("Name output visibility", async (actor) => {
      return actor.answer(TextBoxUI.nameOutput().isVisible());
    }),

  emailOutputIsVisible: () =>
    Question.about("Email output visibility", async (actor) => {
      return actor.answer(TextBoxUI.emailOutput().isVisible());
    }),
};
