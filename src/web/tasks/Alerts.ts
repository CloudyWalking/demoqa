import { Task } from "@serenity-js/core";
import { Click, ModalDialog } from "@serenity-js/web";
import { AlertsUI } from "../ui/AlertsUI";

export const Alerts = {
  clickAlertButton: () =>
    Task.where("Click on Alert button", Click.on(AlertsUI.alertButton())),
};
