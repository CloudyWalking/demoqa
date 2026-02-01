import { Task } from "@serenity-js/core";
import { Click, Navigate } from "@serenity-js/web";
import { LandingUI } from "../ui/LandingUI";

export const Landing = {
  navigateToLandingPage: () => Task.where("Navigate to Landing Page", Navigate.to("/")),
  clickElementsCard: () => Task.where("Click on elements card", Click.on(LandingUI.elementsCard())),
  clickFormsCard: () => Task.where("Click on forms card", Click.on(LandingUI.formsCard())),
  clickAlertsFrameAndWindowsCard: () => Task.where("Click on alerts, frame & windows card", Click.on(LandingUI.alertsFrameAndWindowsCard())),
};
