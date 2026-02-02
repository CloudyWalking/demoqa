import { PageElement, PageElements } from "@serenity-js/web";
import { By } from "@serenity-js/web";

export class BooksUI {
    static typeToSearchInput = () => PageElement.located(By.id("searchBox")).describedAs("Type to search input");
    static bookTitles = () => PageElements.located(By.css("a[href*='book']")).describedAs("Book Titles");
}