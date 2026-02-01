import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class PracticeFormUI {
    static nameInput = () => PageElement.located(By.id("firstName")).describedAs("Name input field");
    static lastNameInput = () => PageElement.located(By.id("lastName")).describedAs("Last Name input field");
    static maleGenderRadio = () => PageElement.located(By.css("label[for='gender-radio-1']")).describedAs("Male radio button");
    static mobileNumberInput = () => PageElement.located(By.id("userNumber")).describedAs("Mobile Number input field");
    static submitButton = () => PageElement.located(By.id("submit")).describedAs("Submit button");
    static thanksForSubmittingTheFormModal = () => PageElement.located(By.css(".modal-content")).describedAs("Thanks for submitting the form modal");
}