import { Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/web";
import { PracticeFormUI } from "../ui/PracticeFormUI";

export const PracticeForm = {
  fillName: (name: string) =>
    Task.where(
      `Fill in Name with ${name}`,
      Click.on(PracticeFormUI.nameInput()),
      Enter.theValue(name).into(PracticeFormUI.nameInput()),
    ),

  fillLastName: (lastName: string) =>
    Task.where(
      `Fill in Last Name with ${lastName}`,
      Click.on(PracticeFormUI.lastNameInput()),
      Enter.theValue(lastName).into(PracticeFormUI.lastNameInput()),
    ),

    selectMaleGender: () => Task.where(
      "Select Male Gender",
      Click.on(PracticeFormUI.maleGenderRadio()),
    ),

    fillMobileNumber: (mobileNumber: string) =>
    Task.where(
      `Fill in Mobile Number with ${mobileNumber}`,
      Click.on(PracticeFormUI.mobileNumberInput()),
      Enter.theValue(mobileNumber).into(PracticeFormUI.mobileNumberInput()),
    ),

    clickSubmitButton: () => Task.where(
      "Click on Submit button",
      Click.on(PracticeFormUI.submitButton()),
    ),

};
