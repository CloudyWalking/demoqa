import { Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/web";
import { BooksUI } from "../ui/BooksUI";

export const Books = {
    enterSearchText: (text: string) => Task.where("#actor enters text into the search box",
        Click.on(BooksUI.typeToSearchInput()),
        Enter.theValue(text).into(BooksUI.typeToSearchInput()),
    ),
}