import { Page } from "@serenity-js/web";
import { Question } from "@serenity-js/core";

export const TheLandingPage = {
  title: () => Page.current().title().describedAs("Landing Page Title"),
};
