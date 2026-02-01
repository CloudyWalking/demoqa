import { PageElement } from "@serenity-js/web";
import { By } from "@serenity-js/web";

export class TextBoxUI {
    static fullNameInput = () => PageElement.located(By.id("userName")).describedAs("Full Name input");
    static emailInput = () => PageElement.located(By.id("userEmail")).describedAs("Email input");
    static submitButton = () => PageElement.located(By.id("submit")).describedAs("Submit button");
    static nameOutput = () => PageElement.located(By.id("name")).describedAs("Name output");
    static emailOutput = () => PageElement.located(By.id("email")).describedAs("Email output");
}