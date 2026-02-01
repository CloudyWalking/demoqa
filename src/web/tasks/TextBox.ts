import { Task } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { TextBoxUI } from "../ui/TextBoxUI";
import { Enter } from "@serenity-js/web";

export const TextBox = {
    enterFullName: (name: string) => Task.where(`Enter full name: ${ name }`,
        Click.on(TextBoxUI.fullNameInput()),
        Enter.theValue(name).into(TextBoxUI.fullNameInput())),

    enterEmail: (email: string) => Task.where(`Enter email: ${ email }`,
        Click.on(TextBoxUI.emailInput()),
        Enter.theValue(email).into(TextBoxUI.emailInput())),

    clickSubmitButton: () => Task.where("Click on Submit button",
        Click.on(TextBoxUI.submitButton()))
}