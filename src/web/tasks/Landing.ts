import { Task } from "@serenity-js/core";
import { Click, Navigate } from "@serenity-js/web";
import { LandingUI } from "../ui/LandingUI";

export const Landing = {
  navigateToLandingPage: () => Task.where("Navigate to Landing Page", Navigate.to("/")),
  openCategoryCard: (categoryName: string) => Task.where("Navigating to ${categoryName} card", Click.on(LandingUI.elementsCard())),
};
