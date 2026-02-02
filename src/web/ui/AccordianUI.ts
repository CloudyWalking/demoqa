import { By } from "@serenity-js/web";
import { PageElement } from "@serenity-js/web";

export class AccordianUI {
    static firstAccordianHeader = () => PageElement.located(By.id("section1Heading")).describedAs('First Accordian Header');
    static secondAccordianHeader = () => PageElement.located(By.id("section2Heading")).describedAs('Second Accordian Header');
    static thirdAccordianHeader = () => PageElement.located(By.id("section3Heading")).describedAs('Third Accordian Header');
    static firstAccordianContent = () => PageElement.located(By.xpath("//p[contains(text(), 'Lorem Ipsum is simply dummy text')]")).describedAs('First Accordian Content');
    static secondAccordianContent = () => PageElement.located(By.xpath("//p[contains(text(), 'Contrary to popular belief')]")).describedAs('Second Accordian Content');
    static thirdAccordianContent = () => PageElement.located(By.xpath("//p[contains(text(), 'It is a long established fact')]")).describedAs('Third Accordian Content');

}