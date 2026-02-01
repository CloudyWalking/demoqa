import { Page } from "@serenity-js/web";
import { Question } from "@serenity-js/core";
import { LandingUI } from "../ui/LandingUI";

export const TheLandingPage = {
  currentTitle: () => Page.current().title().describedAs("Current page title"),

  elementsCardIsPresent: () =>
    Question.about("Elements card presence", async (actor) => {
      return actor.answer(LandingUI.elementsCard().isPresent());
    }),

  formsCardIsPresent: () =>
    Question.about("Forms card presence", async (actor) => {
      return actor.answer(LandingUI.formsCard().isPresent());
    }),

  alertsFrameAndWindowsCardIsPresent: () =>
    Question.about("Alerts, Frame & Windows card presence", async (actor) => {
      return actor.answer(LandingUI.alertsFrameAndWindowsCard().isPresent());
    }),

  widgetsCardIsPresent: () =>
    Question.about("Widgets card presence", async (actor) => {
      return actor.answer(LandingUI.widgetsCard().isPresent());
    }),

  interactionsCardIsPresent: () =>
    Question.about("Interactions card presence", async (actor) => {
      return actor.answer(LandingUI.interactionsCard().isPresent());
    }),

  bookStoreApplicationCardIsPresent: () =>
    Question.about("Book Store Application card presence", async (actor) => {
      return actor.answer(LandingUI.bookStoreApplicationCard().isPresent());
    }),
};
