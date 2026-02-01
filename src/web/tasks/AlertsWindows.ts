import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { AlertsWindowsUI } from "../ui/AlertsWindowsUI";

export const AlertsWindows = {
  clickAlertsMenuItem: () =>
    Task.where(
      "Click on Alerts menu item",
      Click.on(AlertsWindowsUI.alertsMenuItem()),
    ),
};
