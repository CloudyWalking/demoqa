import { Task } from "@serenity-js/core";
import { Click, Navigate } from "@serenity-js/web";
import { LandingUI } from "../ui/LandingUI";

export const Landing = {
  navigateToLandingPage: () => Task.where("Navigate to Landing Page", Navigate.to("/")),
  clickElementsCard: () => Task.where("Click on elements card", Click.on(LandingUI.elementsCard())),
  clickFormsCard: () => Task.where("Click on forms card", Click.on(LandingUI.formsCard())),
  clickAlertsFrameAndWindowsCard: () => Task.where("Click on alerts, frame & windows card", Click.on(LandingUI.alertsFrameAndWindowsCard())),
  clickWidgetsCard: () => Task.where("Click on widgets card", Click.on(LandingUI.widgetsCard())),
  clickInteractionsCard: () => Task.where("Click on interactions card", Click.on(LandingUI.interactionsCard())),
  clickBookStoreApplicationCard: () => Task.where("Click on book store application card", Click.on(LandingUI.bookStoreApplicationCard())),
};
